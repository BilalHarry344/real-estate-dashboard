// components
import Input from "./controls/Input";
// interfaces
import { HeroSectionProps } from "@/interfaces";
// icons
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const HeroSection = ({ searchQuery, onSearchChange }: HeroSectionProps) => {
  return (
    <div className="relative mb-12">
      <div className="rounded-2xl h-[600px] bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-50"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
        <div className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-8 sm:px-6">
          <h1 className="text-3xl font-bold text-white max-w-3xl">
            Find Your Dream Home Today
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Explore thousands of properties and find the perfect place to call
            home.
          </p>
          <div className="mt-8 max-w-2xl w-full bg-white rounded-xl shadow-lg p-2">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1">
                <Input
                  placeholder="Search by location or property name..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  startIcon={
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                  }
                  className="h-12"
                />
              </div>
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
