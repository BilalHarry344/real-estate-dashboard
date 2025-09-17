import { useParams, Link } from "react-router-dom";
// hooks
import { useProperty } from "../hooks/useProperties";
// components
import PriceChart from "../components/PriceChart";
// icons
import {
  HomeIcon,
  ArrowLeftIcon,
  BeakerIcon as BathIcon,
  UserGroupIcon as BedIcon,
} from "@heroicons/react/24/outline";

const PropertyPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: property, isLoading, error } = useProperty(id!);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="text-center text-red-600 py-8">
        An error occurred while fetching the property. Please try again later.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto pb-12">
      <Link
        to="/"
        className="inline-flex items-center text-black hover:text-primary/80 mb-6 font-bold"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Back
      </Link>

      {/* Main Property Card */}
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative">
            <img
              src={property.imageUrl}
              alt={property.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <h1 className="text-3xl font-bold text-white">
                {property.title}
              </h1>
              <p className="text-white/90 mt-2">{property.location}</p>
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <p className="text-primary text-3xl font-bold">
                ${property.price.toLocaleString()}
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <BedIcon className="h-6 w-6 text-gray-500" />
                  <span className="text-lg">{property.bedrooms} beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <BathIcon className="h-6 w-6 text-gray-500" />
                  <span className="text-lg">{property.bathrooms} baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <HomeIcon className="h-6 w-6 text-gray-500" />
                  <span className="text-lg">{property.area} sqft</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Description
              </h2>
              <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                {property.description}
              </p>
            </div>
          </div>
        </div>

        {/* Price History Card */}
        {property.priceHistory && property.priceHistory.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Price History
              </h2>
              <PriceChart priceHistory={property.priceHistory} />
              <div className="mt-6 text-sm text-gray-500 border-t border-gray-100 pt-4">
                * Price history shown for the last 6 months
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyPage;
