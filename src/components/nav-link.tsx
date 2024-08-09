import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<"a"> {
  children: string;
}

export const NavLink = (props: NavLinkProps) => {
  return (
    <a
      {...props}
      className="relative inline cursor-pointer text-base font-medium text-gray-50 hover:text-green-300 transition-colors duration-300 ease-in-out before:bg-green-300 before:absolute before:-bottom-0 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
    >
      {props.children}
    </a>
  );
};
