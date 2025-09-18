import { useState } from "react";
import { Link } from "react-router-dom";
// interfaces
import { LayoutProps } from "../../interfaces";
// icons
import {
  MapIcon,
  HomeIcon,
  Bars3Icon,
  XMarkIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import Footer from "./Footer";

const Layout = ({ children }: LayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <nav className="max-w-7xl mx-auto">
          <div className="flex justify-between h-20 px-4">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Property Finder
                </span>
              </Link>
              <div className="hidden lg:flex items-center space-x-6">
                <Link
                  to="/"
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <HomeIcon className="h-5 w-5" />
                  <span>Buy</span>
                </Link>
                <Link
                  to="/"
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <BuildingOfficeIcon className="h-5 w-5" />
                  <span>Rent</span>
                </Link>
                <Link
                  to="/"
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <UserGroupIcon className="h-5 w-5" />
                  <span>Find Agent</span>
                </Link>
                <Link
                  to="/"
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <MapIcon className="h-5 w-5" />
                  <span>Explore</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hidden lg:block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                List Property
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-primary rounded-lg hover:bg-gray-50 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
        {/* Mobile and Tablet menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-2 space-y-2">
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-2.5 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <HomeIcon className="h-5 w-5" />
                <span>Buy</span>
              </Link>
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-2.5 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <BuildingOfficeIcon className="h-5 w-5" />
                <span>Rent</span>
              </Link>
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-2.5 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <UserGroupIcon className="h-5 w-5" />
                <span>Find Agent</span>
              </Link>
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-2.5 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MapIcon className="h-5 w-5" />
                <span>Explore</span>
              </Link>

              <div className="pt-2 mt-2 border-t border-gray-100">
                <Link
                  to="/"
                  className="block px-4 py-2.5 text-center bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  List Property
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
      <main className="max-w-7xl mx-auto py-6 mt-20 px-4">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
