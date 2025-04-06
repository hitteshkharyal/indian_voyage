
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div>
      <Navbar />
      
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-9xl font-bold text-india-saffron mb-4">404</h1>
          <p className="text-3xl font-semibold mb-6">Oops! Page Not Found</p>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="space-x-4">
            <Link to="/">
              <Button size="lg">Back to Home</Button>
            </Link>
            <Link to="/trips">
              <Button variant="outline" size="lg">Browse Trips</Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
