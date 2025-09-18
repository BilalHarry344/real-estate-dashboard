import { useState } from "react";
// components
import MapView from "../components/MapView";
import Input from "../components/controls/Input";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import PropertyCard from "../components/PropertyCard";
import { useProperties } from "../hooks/useProperties";
import SortSelect from "../components/controls/SortSelect";
import PropertyFilters from "../components/PropertyFilters";
import PropertyCardSkeleton from "../components/PropertyCardSkeleton";
// interfaces
import type { SortOption, Property } from "../interfaces";
import { PropertyFilters as Filters } from "../interfaces";
// icons
import { ErrorIcon } from "@/assets/svgs";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const HomePage = () => {
  const [filters, setFilters] = useState<Filters>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState<SortOption>({
    field: "price",
    direction: "asc",
  });
  const { data: properties, isLoading, error } = useProperties(filters);

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  const sortProperties = (properties: any[]) => {
    return [...properties].sort((a, b) => {
      const aValue = a[sort.field];
      const bValue = b[sort.field];

      if (typeof aValue === "string") {
        return sort.direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return sort.direction === "asc" ? aValue - bValue : bValue - aValue;
    });
  };

  const filteredAndSortedProperties = properties
    ? sortProperties(
        properties.filter((property: Property) =>
          property.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : [];

  return (
    <div>
      <HeroSection
        searchQuery={searchQuery}
        onSearchChange={(value) => setSearchQuery(value)}
      />

      <StatsSection />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8">
          <PropertyFilters onFilterChange={handleFilterChange} />

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                startIcon={<MagnifyingGlassIcon className="h-5 w-5" />}
                className="max-w-md"
              />
            </div>
            <div className="w-full sm:w-72">
              <SortSelect value={sort} onChange={setSort} />
            </div>
          </div>

          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {isLoading
                ? "Loading properties..."
                : `${filteredAndSortedProperties.length} Properties Available`}
            </h2>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <PropertyCardSkeleton key={n} />
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <div className="bg-red-50 rounded-lg p-6 inline-block">
                <div className="flex items-center gap-3 text-red-600">
                  <ErrorIcon />

                  <p className="text-lg font-medium">
                    An error occurred while fetching properties.
                  </p>
                </div>
                <p className="mt-2 text-red-500">Please try again later.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-1">
              {filteredAndSortedProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
              {filteredAndSortedProperties.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <div className="bg-gray-50 rounded-lg p-6 inline-block">
                    <p className="text-lg text-gray-600">
                      No properties found. Try adjusting your filters.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Map View */}
          {!isLoading && !error && filteredAndSortedProperties.length > 0 && (
            <div className="mb-8">
              <MapView
                properties={filteredAndSortedProperties}
                className="shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
