
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { attractions } from '@/lib/data';

// Group attractions by city
const attractionsByCity = attractions.reduce((acc, attraction) => {
  if (!acc[attraction.city]) {
    acc[attraction.city] = [];
  }
  acc[attraction.city].push(attraction);
  return acc;
}, {} as Record<string, typeof attractions>);

const cities = [
  { 
    name: "Delhi", 
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1470&auto=format&fit=crop", 
    description: "Experience the blend of ancient history and modern culture in India's capital city.",
    featured: true
  },
  { 
    name: "Agra", 
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1471&auto=format&fit=crop", 
    description: "Home to the iconic Taj Mahal and other magnificent Mughal-era monuments.",
    featured: true
  },
  { 
    name: "Jaipur", 
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1470&auto=format&fit=crop", 
    description: "The 'Pink City' known for its stunning palaces, forts, and vibrant culture.",
    featured: true
  },
  { 
    name: "Varanasi", 
    image: "https://cdn.getyourguide.com/img/tour/014e9b084ff0f6ebf69149097fc2680b5eecdd3588ef178c4da98f03fab58aa4.jpg/145.jpg",
    description: "One of the world's oldest living cities with deep spiritual significance.",
    featured: true
  },
  { 
    name: "Mumbai", 
    image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1470&auto=format&fit=crop", 
    description: "India's financial capital and home to Bollywood.",
    featured: true
  },
  { 
    name: "Kerala", 
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1632&auto=format&fit=crop", 
    description: "Known as 'God's Own Country' for its serene backwaters and lush landscapes.",
    featured: true
  },
  { 
    name: "Jodhpur", 
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1470&auto=format&fit=crop", 
    description: "The 'Blue City' featuring the imposing Mehrangarh Fort and vibrant markets.",
    featured: true
  },
  { 
    name: "Udaipur", 
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1470&auto=format&fit=crop", 
    description: "The 'City of Lakes' known for its romantic setting and royal heritage.",
    featured: false
  }
];

const Destinations = () => {
  const featuredCities = cities.filter(city => city.featured);
  
  return (
    <div>
      <Navbar />
      
      <div className="relative bg-cover bg-center h-[400px]" 
           style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1171&auto=format&fit=crop')`}}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Indian Destinations</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover the beauty, culture, and history of incredible India
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Featured Destinations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of stunning Indian destinations, each offering unique experiences and unforgettable memories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCities.map((city, index) => (
              <Link to={`/destination/${city.name.toLowerCase()}`} key={index}>
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 trip-card">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={city.image} 
                      alt={city.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{city.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{city.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Explore {city.name}</Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Popular Attractions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Attractions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Must-visit attractions that showcase India's rich heritage and natural beauty.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.slice(0, 7).map((attraction) => (
              <Card key={attraction.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{attraction.title}</CardTitle>
                    <Badge>{attraction.type}</Badge>
                  </div>
                  <div className="flex items-center text-gray-500 mt-1">
                    <MapPin size={16} className="mr-1" />
                    {attraction.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-2">{attraction.description}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(attraction.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                    <span className="ml-1 text-gray-500">{attraction.rating}/5</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore India?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Browse our curated trips to these amazing destinations and start your Indian adventure today.
          </p>
          <Link to="/trips">
            <Button size="lg">View All Trips</Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Destinations;
