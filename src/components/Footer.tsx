
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-india-saffron flex items-center justify-center">
                <span className="text-white font-bold text-xl">IV</span>
              </div>
              <span className="font-bold text-xl">IndianVoyage</span>
            </Link>
            <p className="text-gray-300 mb-6">
              Discover the beauty and diversity of India with our curated trips to the most breathtaking destinations across the country.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-india-saffron transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-white hover:text-india-saffron transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-white hover:text-india-saffron transition-colors">
                <Twitter />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-india-saffron transition-colors">Home</Link></li>
              <li><Link to="/trips" className="text-gray-300 hover:text-india-saffron transition-colors">Trips</Link></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-india-saffron transition-colors">Destinations</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-india-saffron transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-india-saffron transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Top Destinations</h3>
            <ul className="space-y-3">
              <li><Link to="/destination/delhi" className="text-gray-300 hover:text-india-saffron transition-colors">Delhi</Link></li>
              <li><Link to="/destination/jaipur" className="text-gray-300 hover:text-india-saffron transition-colors">Jaipur</Link></li>
              <li><Link to="/destination/varanasi" className="text-gray-300 hover:text-india-saffron transition-colors">Varanasi</Link></li>
              <li><Link to="/destination/mumbai" className="text-gray-300 hover:text-india-saffron transition-colors">Mumbai</Link></li>
              <li><Link to="/destination/kerala" className="text-gray-300 hover:text-india-saffron transition-colors">Kerala</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-india-saffron mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-300">Bilaspur, Himachal pradesh, India</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-india-saffron flex-shrink-0" size={18} />
                <p className="text-gray-300">+91 7876586478</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-india-saffron flex-shrink-0" size={18} />
                <p className="text-gray-300">info@indianvoyage.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} IndianVoyage Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
