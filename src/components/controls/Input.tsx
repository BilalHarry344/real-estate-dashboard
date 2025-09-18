import React from "react";
// interfaces
import { InputProps } from "../../interfaces";
// icons
import { ControllerErrorIcon } from "@/assets/svgs";

const InputController = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, startIcon, endIcon, className = "", ...props }, ref) => {
    return (
      <div className="w-full group">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1.5 group-hover:text-primary transition-colors">
            {label}
          </label>
        )}
        <div className="relative">
          {startIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-hover:text-primary transition-colors">
              {startIcon}
            </div>
          )}
          <input
            ref={ref}
            className={`
              w-full px-4 py-2.5 
              bg-white border border-gray-200 
              rounded-lg shadow-sm 
              text-gray-900 placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
              hover:border-primary/50
              transition-all duration-200
              ${startIcon ? "pl-10" : ""} 
              ${endIcon ? "pr-10" : ""} 
              ${
                error
                  ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                  : ""
              }
              ${className}
            `}
            {...props}
          />
          {endIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400 group-hover:text-primary transition-colors">
              {endIcon}
            </div>
          )}
        </div>
        {error && (
          <div className="mt-1.5 flex items-center gap-1.5 text-red-500">
            <ControllerErrorIcon />
            <p className="text-sm">{error}</p>
          </div>
        )}
      </div>
    );
  }
);

export default InputController;
