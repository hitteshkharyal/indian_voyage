
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Menu, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-india-saffron flex items-center justify-center">
                <span className="text-white font-bold text-xl">IV</span>
              </div>
              <span className="font-bold text-xl hidden md:block">IndianVoyage</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-india-saffron transition-colors">Home</Link>
            <Link to="/trips" className="font-medium hover:text-india-saffron transition-colors">Trips</Link>
            <Link to="/destinations" className="font-medium hover:text-india-saffron transition-colors">Destinations</Link>
            <Link to="/about" className="font-medium hover:text-india-saffron transition-colors">About</Link>
            <div className="relative">
              {searchOpen ? (
                <div className="absolute right-0 top-0 flex items-center">
                  <Input 
                    type="text" 
                    placeholder="Search destinations..." 
                    className="w-64 pr-8"
                  />
                  <X 
                    className="h-4 w-4 absolute right-2 cursor-pointer" 
                    onClick={() => setSearchOpen(false)}
                  />
                </div>
              ) : (
                <Search className="cursor-pointer" onClick={() => setSearchOpen(true)} />
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/admin">
              <Button>Admin Access</Button>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <Search className="mr-4" onClick={() => setSearchOpen(!searchOpen)} />
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {searchOpen && (
          <div className="md:hidden mt-3 relative">
            <Input type="text" placeholder="Search destinations..." className="w-full pr-8" />
            <X className="h-4 w-4 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => setSearchOpen(false)} />
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 pb-4 space-y-3">
            <Link to="/" className="block font-medium hover:text-india-saffron transition-colors py-2">Home</Link>
            <Link to="/trips" className="block font-medium hover:text-india-saffron transition-colors py-2">Trips</Link>
            <Link to="/destinations" className="block font-medium hover:text-india-saffron transition-colors py-2">Destinations</Link>
            <Link to="/about" className="block font-medium hover:text-india-saffron transition-colors py-2">About</Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/login">
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
              <Link to="/admin">
                <Button className="w-full">Admin Access</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
