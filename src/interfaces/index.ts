import { ReactNode } from "react";

// Property related interfaces
export interface PriceHistory {
  date: string;
  price: number;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  priceHistory?: PriceHistory[];
  coordinates?: [number, number];
}

export interface PropertyFilters {
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
  maxBedrooms?: number;
}

// Component interfaces
export interface PropertyCardProps {
  property: Property;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface PropertyFiltersProps {
  onFilterChange: (filters: PropertyFilters) => void;
}

// Control component interfaces
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export interface Option {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  options: Option[];
  label?: string;
  error?: string;
  onChange: (value: string) => void;
}

export type SortOption = {
  field: string;
  direction: "asc" | "desc";
};

export interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
  className?: string;
}

export interface StatsCardProps {
  icon: ReactNode;
  value: string;
  label: string;
}

export interface PriceChartProps {
  priceHistory: PriceHistory[];
}

export interface MapViewProps {
  properties: Property[];
  onPropertyClick?: (property: Property) => void;
  className?: string;
}

export interface MarkerProps {
  lat: number;
  lng: number;
  property: Property;
  onClick: () => void;
}

export interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export interface FooterColumnProps {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}
