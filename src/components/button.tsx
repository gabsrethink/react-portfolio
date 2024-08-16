import { CircularProgress } from "@mui/material";
import React from "react";

interface ButtonProps extends React.ComponentProps<"button"> {
  transparent?: boolean;
  text: string;
  loading?: boolean;
}

export function Button({ text, loading, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`relative font-medium ${
        loading ? "bg-purple-900" : "bg-transparent"
      } ${loading ? "disabled:opacity-50" : ""}`}
      disabled={loading}
    >
      <div className="absolute inset-x-0 h-full bg-green-300 border border-green-300 rounded-md flex items-center justify-center">
        {loading && (
          <div className="z-50 flex">
            <CircularProgress size={24} color="inherit" />
          </div>
        )}
      </div>
      <div
        className={`relative bg-purple-900 border border-green-300 py-3 px-10 transition transform duration-200 hover:-translate-x-1 hover:-translate-y-1 rounded-md text-green-300 font-medium flex items-center justify-center ${
          loading ? "opacity-100" : ""
        }`}
      >
        {text}
      </div>
    </button>
  );
}
