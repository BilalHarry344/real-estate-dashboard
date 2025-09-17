import { Property } from "../interfaces";

export const mockProperties: Property[] = [
  {
    id: "1",
    title: "Modern Apartment in City Center",
    price: 250000,
    bedrooms: 2,
    location: "Downtown Dubai",
    bathrooms: 1,
    area: 1000,
    description:
      "Modern apartment in prime location with stunning views of Burj Khalifa",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
    coordinates: [25.2048, 55.2708], // Downtown Dubai
    priceHistory: [
      { date: "2024-09-17", price: 250000 },
      { date: "2024-08-17", price: 245000 },
      { date: "2024-07-17", price: 240000 },
      { date: "2024-06-17", price: 235000 },
      { date: "2024-05-17", price: 230000 },
      { date: "2024-04-17", price: 225000 },
    ],
  },
  {
    id: "2",
    title: "Cozy Suburban Home",
    price: 320000,
    bedrooms: 3,
    location: "Dubai Marina",
    bathrooms: 2,
    area: 1500,
    description:
      "Comfortable family home with marina views and modern amenities",
    imageUrl:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    coordinates: [25.0805, 55.1403], // Dubai Marina
    priceHistory: [
      { date: "2024-09-17", price: 320000 },
      { date: "2024-08-17", price: 315000 },
      { date: "2024-07-17", price: 310000 },
      { date: "2024-06-17", price: 305000 },
      { date: "2024-05-17", price: 300000 },
      { date: "2024-04-17", price: 295000 },
    ],
  },
];
