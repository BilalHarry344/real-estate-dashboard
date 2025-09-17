// icons
import {
  MapPinIcon,
  HomeModernIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
// components
import StatsCard from "./StatsCard";

const StatsSection = () => {
  const stats = [
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

  return (
    <div className="max-w-7xl mx-auto mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
