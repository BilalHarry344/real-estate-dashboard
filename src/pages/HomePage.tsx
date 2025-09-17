import { useState } from "react";
// components
import MapView from "../components/MapView";
import Input from "../components/controls/Input";
import StatsCard from "../components/StatsCard";
import PropertyCard from "../components/PropertyCard";
import { useProperties } from "../hooks/useProperties";
import SortSelect from "../components/controls/SortSelect";
import PropertyFilters from "../components/PropertyFilters";
// interfaces
import type { SortOption, Property } from "../interfaces";
import { PropertyFilters as Filters } from "../interfaces";
// icons
import {
  MapPinIcon,
  HomeModernIcon,
  HandThumbUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

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
      {/* Hero Section */}
      <div className="relative mb-12">
        <div className="rounded-2xl h-[600px] bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-50"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
          <div className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-8 sm:px-6">
            <h1 className="text-3xl font-bold text-white max-w-3xl">
              Find Your Dream Home Today
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              Explore thousands of properties and find the perfect place to call
              home.
            </p>
            <div className="mt-8 max-w-2xl w-full bg-white rounded-xl shadow-lg p-2">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1">
                  <Input
                    placeholder="Search by location or property name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    startIcon={
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                    }
                    className="h-12"
                  />
                </div>
                <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {[
            {
              icon: <HomeModernIcon className="h-6 w-6 text-primary" />,
              value: "1,234+",
              label: "Available Properties",
            },
            {
              icon: <MapPinIcon className="h-6 w-6 text-primary" />,
              value: "100+",
              label: "Locations",
            },
            {
              icon: <HandThumbUpIcon className="h-6 w-6 text-primary" />,
              value: "98%",
              label: "Happy Customers",
            },
          ].map((stat, index) => (
            <StatsCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8">
          <PropertyFilters onFilterChange={handleFilterChange} />

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-900">
              {isLoading
                ? "Loading properties..."
                : `${filteredAndSortedProperties.length} Properties Available`}
            </h2>
            <div className="w-full sm:w-72">
              <SortSelect value={sort} onChange={setSort} />
            </div>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse"
                >
                  <div className="w-full h-64 bg-gray-200" />
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
                    <div className="h-8 bg-gray-200 rounded w-1/2 mb-4" />
                    <div className="h-4 bg-gray-200 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <div className="bg-red-50 rounded-lg p-6 inline-block">
                <div className="flex items-center gap-3 text-red-600">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
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
