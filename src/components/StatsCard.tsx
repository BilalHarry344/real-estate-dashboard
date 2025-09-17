import { ReactNode } from "react";

interface StatsCardProps {
  icon: ReactNode;
  value: string;
  label: string;
}

const StatsCard = ({ icon, value, label }: StatsCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-primary/10 rounded-lg">{icon}</div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
          <p className="text-gray-600">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
