import { useState } from "react";
import GoogleMapReact from "google-map-react";
// interfaces
import { MapViewProps, MarkerProps, Property } from "../interfaces";

const LocationMarker = ({ property, onClick }: MarkerProps) => (
  <div
    className="relative cursor-pointer transform -translate-x-1/2 -translate-y-full"
    onClick={onClick}
  >
    <div className="p-2 bg-white rounded-lg shadow-lg absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap">
      <p className="font-semibold">${property.price.toLocaleString()}</p>
    </div>
    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg">
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </div>
  </div>
);

const MapView = ({
  properties,
  onPropertyClick,
  className = "",
}: MapViewProps) => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );

  // Calculate center based on properties or default to a central location
  const center =
    properties.length > 0 && properties[0].coordinates
      ? {
          lat: properties[0].coordinates[0],
          lng: properties[0].coordinates[1],
        }
      : { lat: 25.2048, lng: 55.2708 }; // Default to Downtown Dubai

  const handleMarkerClick = (property: Property) => {
    setSelectedProperty(property);
    if (onPropertyClick) {
      onPropertyClick(property);
    }
  };

  return (
    <div className={`h-[400px] w-full rounded-lg overflow-hidden ${className}`}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={12}
        options={{
          fullscreenControl: false,
          zoomControl: true,
          clickableIcons: false,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
        }}
      >
        {properties.map(
          (property) =>
            property.coordinates && (
              <LocationMarker
                key={property.id}
                lat={property.coordinates[0]}
                lng={property.coordinates[1]}
                property={property}
                onClick={() => handleMarkerClick(property)}
              />
            )
        )}
      </GoogleMapReact>

      {selectedProperty && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg z-10">
          <h3 className="font-semibold">{selectedProperty.title}</h3>
          <p className="text-sm text-gray-600">{selectedProperty.location}</p>
          <p className="text-sm font-semibold mt-1">
            ${selectedProperty.price.toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default MapView;
