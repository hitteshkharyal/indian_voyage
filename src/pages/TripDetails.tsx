
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, MapPin, Bus, Users, Check, X, Clock, IndianRupee, Bookmark } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from '@/hooks/use-toast';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { trips, attractions } from '@/lib/data';

const TripDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedSeats, setSelectedSeats] = useState<number>(1);
  
  // Find the trip with the matching ID
  const trip = trips.find(trip => trip.id === id);
  
  // Handle cases where the trip is not found
  if (!trip) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Trip Not Found</h1>
          <p className="mb-6">Sorry, we couldn't find the trip you're looking for.</p>
          <Link to="/trips">
            <Button>Back to All Trips</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Find attractions related to the trip's destination
  const tripDestinations = trip.destination.split(', ');
  const relevantAttractions = attractions.filter(attraction => 
    tripDestinations.some(dest => attraction.city.includes(dest))
  );
  
  // Calculate total cost
  const totalCost = trip.price * selectedSeats;
  
  const handleBooking = () => {
    toast('Booking confirmed', {
      description: `You booked ${selectedSeats} seat(s) for ${trip.title}`,
      duration: 5000,
    });
  };

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-cover bg-center" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${trip.image}')`}}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{trip.title}</h1>
            <div className="flex items-center justify-center">
              <MapPin size={20} className="mr-2" />
              <span className="text-xl">{trip.destination}</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Trip Details Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            {/* Key Details Bar */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Calendar size={24} className="text-india-saffron" />
                  </div>
                  <h3 className="text-lg font-semibold">{trip.duration.days} Days / {trip.duration.nights} Nights</h3>
                  <p className="text-gray-500 text-sm">Duration</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Calendar size={24} className="text-india-saffron" />
                  </div>
                  <h3 className="text-lg font-semibold">{trip.startDate}</h3>
                  <p className="text-gray-500 text-sm">Start Date</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Bus size={24} className="text-india-saffron" />
                  </div>
                  <h3 className="text-lg font-semibold">{trip.busType}</h3>
                  <p className="text-gray-500 text-sm">Bus Type</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users size={24} className="text-india-saffron" />
                  </div>
                  <h3 className="text-lg font-semibold">{trip.availableSeats}/{trip.totalSeats}</h3>
                  <p className="text-gray-500 text-sm">Available Seats</p>
                </div>
              </div>
            </div>
            
            {/* Tabs Section */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Tabs defaultValue="overview">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="attractions">Attractions</TabsTrigger>
                </TabsList>
                
                {/* Overview Tab */}
                <TabsContent value="overview" className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Trip Overview</h2>
                  <p className="text-gray-700 mb-6">{trip.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* What's Included */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Check size={20} className="mr-2 text-green-600" />
                        What's Included
                      </h3>
                      <ul className="space-y-3">
                        {trip.included.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check size={16} className="mr-2 text-green-500 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Not Included */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <X size={20} className="mr-2 text-red-600" />
                        Not Included
                      </h3>
                      <ul className="space-y-3">
                        {trip.notIncluded.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <X size={16} className="mr-2 text-red-500 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                {/* Itinerary Tab */}
                <TabsContent value="itinerary" className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Trip Itinerary</h2>
                  <div className="space-y-6">
                    {trip.itinerary.map((day, index) => (
                      <div key={index} className="relative pl-8 pb-8 border-l border-gray-200">
                        <div className="absolute top-0 left-0 -translate-x-1/2 w-6 h-6 rounded-full bg-india-saffron flex items-center justify-center text-white">
                          {day.day}
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-semibold mb-2">{day.title}</h3>
                          <p className="text-gray-700">{day.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                {/* Attractions Tab */}
                <TabsContent value="attractions" className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Things to Do</h2>
                  {relevantAttractions.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {relevantAttractions.map((attraction) => (
                        <Card key={attraction.id} className="overflow-hidden">
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={attraction.image} 
                              alt={attraction.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardHeader>
                            <div className="flex justify-between">
                              <CardTitle>{attraction.title}</CardTitle>
                              <Badge>{attraction.type}</Badge>
                            </div>
                            <CardDescription className="flex items-center">
                              <MapPin size={16} className="mr-2" />
                              {attraction.location}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700">{attraction.description}</p>
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
                  ) : (
                    <p className="text-gray-500">No attractions information available for this destination.</p>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Booking Card */}
            <Card className="mb-6 sticky top-[100px]">
              <CardHeader>
                <CardTitle className="text-2xl">Book This Trip</CardTitle>
                <CardDescription className="flex items-center">
                  <IndianRupee size={16} className="mr-1" /> 
                  <span className="text-xl font-semibold">₹{trip.price}</span> per person
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Seats ({trip.availableSeats} available)
                  </label>
                  <div className="flex">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => setSelectedSeats(Math.max(1, selectedSeats - 1))}
                      disabled={selectedSeats <= 1}
                    >
                      -
                    </Button>
                    <div className="w-full flex items-center justify-center font-medium mx-2">
                      {selectedSeats}
                    </div>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => setSelectedSeats(Math.min(trip.availableSeats, selectedSeats + 1))}
                      disabled={selectedSeats >= trip.availableSeats}
                    >
                      +
                    </Button>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <div className="flex justify-between mb-2">
                    <span>Base Price × {selectedSeats}</span>
                    <span>₹{trip.price} × {selectedSeats}</span>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>₹{totalCost}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-3">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="w-full bg-india-saffron hover:bg-orange-600">Book Now</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Confirm your booking</AlertDialogTitle>
                      <AlertDialogDescription>
                        You're about to book {selectedSeats} seat(s) for {trip.title} starting on {trip.startDate} for a total of ₹{totalCost}.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleBooking}>Confirm Booking</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <Button variant="outline" className="w-full flex items-center">
                  <Bookmark size={16} className="mr-2" />
                  Save for Later
                </Button>
              </CardFooter>
            </Card>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>What should I pack for this trip?</AccordionTrigger>
                  <AccordionContent>
                    It's recommended to pack comfortable clothing, walking shoes, sunscreen, a hat, insect repellent, and any personal medications. A camera is essential to capture the beautiful sights.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is there a cancellation policy?</AccordionTrigger>
                  <AccordionContent>
                    Yes, cancellations made 30 days before departure date receive a full refund. Cancellations between 15-30 days receive 50% refund. Less than 15 days before departure are non-refundable.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Are meals vegetarian-friendly?</AccordionTrigger>
                  <AccordionContent>
                    Yes, all included meals offer vegetarian options. Please inform us of any dietary restrictions when booking.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What's the typical group size?</AccordionTrigger>
                  <AccordionContent>
                    Our tour groups typically range from 15-30 people, depending on the trip and season.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TripDetails;
