
import { Link } from "react-router-dom";
import { Globe, Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold">SHINEX INTERNATIONAL</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading the way in international trade with premium egg powder products and efficient scrap import services. 
              Your trusted partner for quality products and reliable business solutions worldwide.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-amber-400 transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link to="/why-choose-us" className="text-gray-300 hover:text-amber-400 transition-colors">Why Choose Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-amber-400 mt-0.5" />
                <span className="text-gray-300">Hazaribagh, Jharkhand, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">+91-XXXXXXXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">info@shinex.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2024 SHINEX INTERNATIONAL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
