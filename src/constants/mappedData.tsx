// icons
import {
  MapPinIcon,
  HomeModernIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";

export const stats = [
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
];

export const sortOptions = [
  { value: "price:asc", label: "Price: Low to High", icon: "💰" },
  { value: "price:desc", label: "Price: High to Low", icon: "💰" },
  { value: "bedrooms:asc", label: "Bedrooms: Least to Most", icon: "🛏️" },
  { value: "bedrooms:desc", label: "Bedrooms: Most to Least", icon: "🛏️" },
  { value: "title:asc", label: "Title: A to Z", icon: "📝" },
  { value: "title:desc", label: "Title: Z to A", icon: "📝" },
];
