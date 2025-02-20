import * as React from "react";

import { cn } from "@/shared/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  action?: React.ReactNode;
  label?: string;
  icon?: React.ReactNode;
  widthMain?: string;
  wrapped?: boolean;
  actionClassName?: string;
  bgColor?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      error,
      widthMain,
      wrapped,
      icon,
      action,
      label,
      bgColor,
      actionClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn(widthMain || "w-full", "flex flex-col gap-2")}>
        {label && <p className="text-foreground  font-bold text-lg">{label}</p>}
        <span
          className={cn(
            "flex relative bg-input md:flex-row md:flex-none  rounded-md items-center",
            wrapped && "flex-col",
            bgColor,
          )}
        >
          {icon && <div className="absolute left-0 px-3 py-1">{icon}</div>}
          <input
            type={type}
            className={cn(
              error ? "border-red-500" : "border-muted-foreground",
              "flex text-white bg-transparent w-full uppercase placeholder:text-[16px] placeholder:font-medium tracking-[-0.16px] rounded-[3px] px-[20px] text-sm  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              className,
            )}
            ref={ref}
            {...props}
          />
          {action && (
            <div
              className={cn(
                "right-0 flex justify-end py-[4px] px-[4px]",
                actionClassName,
                !wrapped ? "absolute" : "w-full",
              )}
            >
              {action}
            </div>
          )}
        </span>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
