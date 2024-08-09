import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  transparent?: boolean;
  text: string;
}

export function Button({ text, ...props }: ButtonProps) {
  return (
    <button {...props} className="relative font-thin text-x1">
      <div className="absolute inset-x-0 h-full bg-green-300 border border-green-300 rounded-md" />
      <div className="relative bg-purple-900 border border-green-300 py-3 px-10 transition transform duration-200 hover:-translate-x-1 hover:-translate-y-1 rounded-md text-green-300 font-medium">
        {text}
      </div>
    </button>
  );
}
