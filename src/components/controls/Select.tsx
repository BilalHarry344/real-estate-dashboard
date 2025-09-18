import React from "react";
// interfaces
import { SelectProps } from "../../interfaces";
// icons
import { ControllerErrorIcon } from "@/assets/svgs";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = "", onChange, ...props }, ref) => {
    return (
      <div className="w-full group">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1.5 group-hover:text-primary transition-colors">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={`
              w-full px-4 py-2.5 
              bg-white border border-gray-200 
              rounded-lg shadow-sm 
              text-gray-900 
              appearance-none
              focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
              hover:border-primary/50
              transition-all duration-200
              ${
                error
                  ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                  : ""
              }
              ${className}
            `}
            onChange={(e) => onChange(e.target.value)}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400 group-hover:text-primary transition-colors">
            <ChevronDownIcon className="h-5 w-5" />
          </div>
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

export default Select;
