import { useQuery } from "@tanstack/react-query";
// services
import { getProperties, getProperty } from "../services/api";
// interfaces
import { PropertyFilters } from "../interfaces";

export const useProperties = (filters?: PropertyFilters) => {
  return useQuery({
    queryKey: ["properties", filters],
    queryFn: () => getProperties(filters),
  });
};

export const useProperty = (id: string) => {
  return useQuery({
    queryKey: ["property", id],
    queryFn: () => getProperty(id),
  });
};
