
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Bus, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { trips } from '@/lib/data';

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-[500px] flex items-center" 
         style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1171&auto=format&fit=crop')`}}>
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Discover the Magic of India</h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Explore breathtaking destinations, immerse in rich culture, and create unforgettable memories on your Indian voyage.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4" style={{position: 'absolute', left: '37%' ,top:'65%',zIndex:2}}>
            <Link to="/trips">
            <Button variant="outline"  size="lg" className="bg-india-saffron hover:bg-orange-600 text-white">Explore Trips</Button>
            </Link>
            <Link to="/destinations">
            <Button variant="outline" size="lg" className="bg-india-saffron hover:bg-orange-600 text-white">Discover Destinations</Button>
            </Link>
        </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

const FeaturedTrips = () => {
  // Display only the first 3 trips from the data
  const featuredTrips = trips.slice(0, 3);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Trips</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of incredible journeys across India's most breathtaking destinations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTrips.map((trip) => (
            <Link to={`/trip/${trip.id}`} key={trip.id}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 trip-card">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={trip.image} 
                    alt={trip.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{trip.title}</CardTitle>
                    <Badge variant="outline" className="bg-india-saffron text-white">₹{trip.price}</Badge>
                  </div>
                  <CardDescription className="flex items-center mt-2">
                    <MapPin size={16} className="mr-1" /> {trip.destination}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{trip.duration.days} days</span>
                    </div>
                    <div className="flex items-center">
                      <Bus size={16} className="mr-1" />
                      <span>{trip.busType}</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      <span>{trip.availableSeats}/{trip.totalSeats}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 line-clamp-2">{trip.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/trips">
            <Button variant="outline" size="lg">View All Trips</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: "✓",
      title: "Expertly Curated",
      description: "Our trips are carefully designed by travel experts who know India inside out."
    },
    {
      icon: "✓",
      title: "Authentic Experiences",
      description: "Go beyond the tourist trail and connect with the real India."
    },
    {
      icon: "✓",
      title: "Comfortable Travel",
      description: "Quality transportation and accommodation for a stress-free journey."
    },
    {
      icon: "✓",
      title: "Local Expertise",
      description: "Knowledgeable guides who bring destinations to life."
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Indian Voyage?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're passionate about creating memorable travel experiences in incredible India.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-india-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">{reason.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedTrips />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
