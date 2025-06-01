
import { Link, useLocation } from "react-router-dom";
import { Globe, Phone, Mail } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold text-gray-800">SHINEX INTERNATIONAL</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') ? 'text-amber-600 bg-amber-50' : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/products') ? 'text-amber-600 bg-amber-50' : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-amber-600 bg-amber-50' : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/why-choose-us" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/why-choose-us') ? 'text-amber-600 bg-amber-50' : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              Why Choose Us
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-amber-600 bg-amber-50' : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+91-XXXXXXXXXX</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>info@shinex.com</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
