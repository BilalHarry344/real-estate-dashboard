import { Property, PropertyFilters } from "../interfaces";
import { mockProperties } from "./mockData";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getProperties = async (
  filters?: PropertyFilters
): Promise<Property[]> => {
  await delay(500); // Simulate network delay
  let filteredProperties = [...mockProperties];

  if (filters) {
    if (filters.minPrice) {
      filteredProperties = filteredProperties.filter(
        (p) => p.price >= filters.minPrice!
      );
    }
    if (filters.maxPrice) {
      filteredProperties = filteredProperties.filter(
        (p) => p.price <= filters.maxPrice!
      );
    }
    if (filters.minBedrooms) {
      filteredProperties = filteredProperties.filter(
        (p) => p.bedrooms >= filters.minBedrooms!
      );
    }
    if (filters.maxBedrooms) {
      filteredProperties = filteredProperties.filter(
        (p) => p.bedrooms <= filters.maxBedrooms!
      );
    }
  }

  return filteredProperties;
};

export const getProperty = async (id: string): Promise<Property> => {
  await delay(500); // Simulate network delay
  const property = mockProperties.find((p) => p.id === id);
  if (!property) {
    throw new Error("Property not found");
  }
  return property;
};
