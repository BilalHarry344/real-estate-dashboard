import React, { useState } from "react";
// interfaces
import { SortSelectProps } from "../../interfaces";
// icons
import { ChevronDownIcon, ArrowsUpDownIcon } from "@heroicons/react/24/outline";

const sortOptions = [
  { value: "price:asc", label: "Price: Low to High", icon: "💰" },
  { value: "price:desc", label: "Price: High to Low", icon: "💰" },
  { value: "bedrooms:asc", label: "Bedrooms: Least to Most", icon: "🛏️" },
  { value: "bedrooms:desc", label: "Bedrooms: Most to Least", icon: "🛏️" },
  { value: "title:asc", label: "Title: A to Z", icon: "📝" },
  { value: "title:desc", label: "Title: Z to A", icon: "📝" },
];

const SortSelect: React.FC<SortSelectProps> = ({
  value,
  onChange,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedValue: string) => {
    const [field, direction] = selectedValue.split(":");
    onChange({ field, direction: direction as "asc" | "desc" });
    setIsOpen(false);
  };

  const currentOption = sortOptions.find(
    (option) => option.value === `${value.field}:${value.direction}`
  );

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full px-4 py-2.5
          bg-white border border-gray-200
          rounded-lg shadow-sm
          text-left
          focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
          hover:border-primary/50
          transition-all duration-200
          ${className}
        `}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <ArrowsUpDownIcon className="h-5 w-5 flex-shrink-0 text-gray-400" />
            <span className="text-gray-900 truncate">
              {currentOption ? currentOption.label : "Sort by"}
            </span>
          </div>
          <ChevronDownIcon
            className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <div className="py-1">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`
                  w-full px-4 py-2.5 text-left
                  flex items-center gap-2
                  hover:bg-gray-50
                  transition-colors duration-150
                  ${
                    option.value === `${value.field}:${value.direction}`
                      ? "bg-primary/5 text-primary"
                      : "text-gray-700"
                  }
                `}
              >
                <span className="text-lg">{option.icon}</span>
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortSelect;
