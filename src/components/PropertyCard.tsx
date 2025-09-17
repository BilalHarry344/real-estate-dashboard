import { Link } from "react-router-dom";
// icons
import {
  HomeIcon,
  HeartIcon,
  MapPinIcon,
  BeakerIcon as BathIcon,
  UserGroupIcon as BedIcon,
} from "@heroicons/react/24/outline";
// interfaces
import { PropertyCardProps } from "../interfaces";

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Link
      to={`/property/${property.id}`}
      className="block group h-full transform"
    >
      <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 relative h-full flex flex-col">
        <div className="relative">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors duration-200">
            <HeartIcon className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors duration-200" />
          </button>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200">
                {property.title}
              </h3>
              <div className="flex items-center mt-1 text-gray-500">
                <MapPinIcon className="h-4 w-4 mr-1" />
                <p className="text-sm">{property.location}</p>
              </div>
            </div>
            <p className="text-primary text-xl font-bold">
              ${property.price.toLocaleString()}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100 mt-auto">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 text-gray-500">
                <BedIcon className="h-5 w-5" />
                <span className="font-medium">{property.bedrooms}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Bedrooms</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 text-gray-500">
                <BathIcon className="h-5 w-5" />
                <span className="font-medium">{property.bathrooms}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Bathrooms</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 text-gray-500">
                <HomeIcon className="h-5 w-5" />
                <span className="font-medium">{property.area}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Sq Ft</p>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Added {new Date().toLocaleDateString()}
            </div>
            <button className="text-primary text-sm font-medium hover:text-primary/80 transition-colors duration-200">
              Schedule Tour
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
