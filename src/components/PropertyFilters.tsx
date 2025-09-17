import { useState, useEffect } from "react";
// components
import InputController from "./controls/Input";
// interfaces
import {
  PropertyFiltersProps,
  PropertyFilters as Filters,
} from "../interfaces";
// icons
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

const PropertyFilters = ({ onFilterChange }: PropertyFiltersProps) => {
  const [filters, setFilters] = useState<Filters>({});
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      onFilterChange(filters);
    }, 500);

    return () => clearTimeout(debounceTimeout);
  }, [filters, onFilterChange]);

  const handleChange = (name: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value ? Number(value) : undefined,
    }));
  };

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="bg-white rounded-xl shadow-sm mb-8 overflow-hidden transition-all duration-300">
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
            {activeFiltersCount > 0 && (
              <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {activeFiltersCount} active
              </span>
            )}
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors md:hidden"
          >
            <AdjustmentsHorizontalIcon className="h-5 w-5" />
            <span className="text-sm font-medium">
              {isExpanded ? "Hide Filters" : "Show Filters"}
            </span>
          </button>
        </div>
        <div
          className={`space-y-6 ${isExpanded ? "block" : "hidden md:block"}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-blue-700">Price Range</h3>
              <div className="space-y-4">
                <InputController
                  label="Minimum"
                  type="number"
                  name="minPrice"
                  value={filters.minPrice || ""}
                  onChange={(e) => handleChange("minPrice", e.target.value)}
                  placeholder="Min Price"
                  startIcon={<span className="text-gray-500">$</span>}
                  className="pl-7"
                />
                <InputController
                  label="Maximum"
                  type="number"
                  name="maxPrice"
                  value={filters.maxPrice || ""}
                  onChange={(e) => handleChange("maxPrice", e.target.value)}
                  placeholder="Max Price"
                  startIcon={<span className="text-gray-500">$</span>}
                  className="pl-7"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-blue-700">Bedrooms</h3>
              <div className="space-y-4">
                <InputController
                  label="Minimum"
                  type="number"
                  name="minBedrooms"
                  value={filters.minBedrooms || ""}
                  onChange={(e) => handleChange("minBedrooms", e.target.value)}
                  placeholder="Min Bedrooms"
                />
                <InputController
                  label="Maximum"
                  type="number"
                  name="maxBedrooms"
                  value={filters.maxBedrooms || ""}
                  onChange={(e) => handleChange("maxBedrooms", e.target.value)}
                  placeholder="Max Bedrooms"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-100">
            <button
              onClick={() => setFilters({})}
              className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;
