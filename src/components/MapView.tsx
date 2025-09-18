import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import type { Property } from "../interfaces";

interface MapViewProps {
  properties: Property[];
  onPropertyClick?: (property: Property) => void;
  className?: string;
}

// Custom marker icon
const markerIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

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
      ? { lat: properties[0].coordinates[0], lng: properties[0].coordinates[1] }
      : { lat: 25.2048, lng: 55.2708 }; // Default to Downtown Dubai

  const handleMarkerClick = (property: Property) => {
    setSelectedProperty(property);
    if (onPropertyClick) {
      onPropertyClick(property);
    }
  };

  return (
    <div className={`h-[400px] w-full rounded-lg overflow-hidden ${className}`}>
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={12}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          className="map-tiles-english"
        />
        {properties.map((property) =>
          property.coordinates ? (
            <Marker
              key={property.id}
              position={[property.coordinates[0], property.coordinates[1]]}
              icon={markerIcon}
              eventHandlers={{
                click: () => handleMarkerClick(property),
              }}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-semibold">{property.title}</h3>
                  <p className="text-sm text-gray-600">{property.location}</p>
                  <p className="text-sm font-semibold mt-1">
                    ${property.price.toLocaleString()}
                  </p>
                </div>
              </Popup>
            </Marker>
          ) : null
        )}
      </MapContainer>

      {selectedProperty && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg z-[1000]">
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
