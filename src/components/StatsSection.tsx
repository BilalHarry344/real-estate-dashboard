// components
import StatsCard from "./StatsCard";
// constants
import { stats } from "@/constants/mappedData";

const StatsSection = () => {
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
