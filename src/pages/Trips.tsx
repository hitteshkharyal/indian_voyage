
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Bus, Users, Filter, ArrowDownAZ, IndianRupee } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { trips } from '@/lib/data';

const Trips = () => {
  const [filteredTrips, setFilteredTrips] = useState(trips);
  const [sortCriteria, setSortCriteria] = useState('');
  const [busTypes, setBusTypes] = useState({
    AC: false,
    'Non-AC': false,
    'Semi-Sleeper': false
  });
  const [priceRange, setPriceRange] = useState({
    min: '',
    max: ''
  });
  const [durationDays, setDurationDays] = useState('');

  const handleSortChange = (value: string) => {
    setSortCriteria(value);
    let sortedTrips = [...filteredTrips];
    
    switch(value) {
      case 'price-low':
        sortedTrips.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sortedTrips.sort((a, b) => b.price - a.price);
        break;
      case 'duration-short':
        sortedTrips.sort((a, b) => a.duration.days - b.duration.days);
        break;
      case 'duration-long':
        sortedTrips.sort((a, b) => b.duration.days - a.duration.days);
        break;
      case 'name-asc':
        sortedTrips.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        // Default sorting or reset to original
        sortedTrips = [...trips];
    }
    
    setFilteredTrips(sortedTrips);
  };

  const handleBusTypeChange = (type: 'AC' | 'Non-AC' | 'Semi-Sleeper') => {
    const newBusTypes = { ...busTypes, [type]: !busTypes[type] };
    setBusTypes(newBusTypes);
    applyFilters(newBusTypes, priceRange, durationDays);
  };

  const handlePriceRangeChange = (field: 'min' | 'max', value: string) => {
    const newPriceRange = { ...priceRange, [field]: value };
    setPriceRange(newPriceRange);
    applyFilters(busTypes, newPriceRange, durationDays);
  };

  const handleDurationChange = (value: string) => {
    setDurationDays(value);
    applyFilters(busTypes, priceRange, value);
  };

  const applyFilters = (
    busTypesFilter: typeof busTypes, 
    priceRangeFilter: typeof priceRange, 
    durationDaysFilter: string
  ) => {
    let result = [...trips];
    
    // Filter by bus type
    const selectedBusTypes = Object.entries(busTypesFilter)
      .filter(([_, isSelected]) => isSelected)
      .map(([type]) => type);
      
    if (selectedBusTypes.length > 0) {
      result = result.filter(trip => selectedBusTypes.includes(trip.busType));
    }
    
    // Filter by price range
    if (priceRangeFilter.min !== '') {
      result = result.filter(trip => trip.price >= Number(priceRangeFilter.min));
    }
    
    if (priceRangeFilter.max !== '') {
      result = result.filter(trip => trip.price <= Number(priceRangeFilter.max));
    }
    
    // Filter by duration
    if (durationDaysFilter !== '') {
      const durationValue = Number(durationDaysFilter);
      switch(durationDaysFilter) {
        case '3':
          result = result.filter(trip => trip.duration.days <= 3);
          break;
        case '7':
          result = result.filter(trip => trip.duration.days > 3 && trip.duration.days <= 7);
          break;
        case '14':
          result = result.filter(trip => trip.duration.days > 7 && trip.duration.days <= 14);
          break;
        case '15':
          result = result.filter(trip => trip.duration.days > 14);
          break;
      }
    }
    
    setFilteredTrips(result);
  };

  const resetFilters = () => {
    setBusTypes({
      AC: false,
      'Non-AC': false,
      'Semi-Sleeper': false
    });
    setPriceRange({
      min: '',
      max: ''
    });
    setDurationDays('');
    setSortCriteria('');
    setFilteredTrips(trips);
  };

  return (
    <div>
      <Navbar />
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Explore Our Trips</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find your perfect Indian adventure from our selection of carefully curated trips.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters sidebar */}
            <div className="lg:w-1/4 bg-white p-6 rounded-lg shadow-md h-fit">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <Filter size={18} className="mr-2" />
                  <h2 className="text-xl font-semibold">Filters</h2>
                </div>
                <Button variant="ghost" size="sm" onClick={resetFilters}>Reset</Button>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-3">Bus Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="bus-ac" 
                      checked={busTypes.AC}
                      onCheckedChange={() => handleBusTypeChange('AC')}
                    />
                    <Label htmlFor="bus-ac">AC</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="bus-nonac" 
                      checked={busTypes['Non-AC']}
                      onCheckedChange={() => handleBusTypeChange('Non-AC')}
                    />
                    <Label htmlFor="bus-nonac">Non-AC</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="bus-sleeper" 
                      checked={busTypes['Semi-Sleeper']}
                      onCheckedChange={() => handleBusTypeChange('Semi-Sleeper')}
                    />
                    <Label htmlFor="bus-sleeper">Semi-Sleeper</Label>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range (₹)</h3>
                <div className="flex gap-4">
                  <div>
                    <Label htmlFor="min-price" className="text-sm">Min</Label>
                    <Input 
                      id="min-price" 
                      type="number" 
                      placeholder="Min" 
                      className="mt-1"
                      value={priceRange.min}
                      onChange={(e) => handlePriceRangeChange('min', e.target.value)} 
                    />
                  </div>
                  <div>
                    <Label htmlFor="max-price" className="text-sm">Max</Label>
                    <Input 
                      id="max-price" 
                      type="number" 
                      placeholder="Max" 
                      className="mt-1"
                      value={priceRange.max}
                      onChange={(e) => handlePriceRangeChange('max', e.target.value)} 
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-3">Duration</h3>
                <Select value={durationDays} onValueChange={handleDurationChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="3">Short (1-3 days)</SelectItem>
                      <SelectItem value="7">Medium (4-7 days)</SelectItem>
                      <SelectItem value="14">Long (8-14 days)</SelectItem>
                      <SelectItem value="15">Extended (15+ days)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Trip cards grid */}
            <div className="lg:w-3/4">
              <div className="bg-white p-4 mb-6 rounded-lg shadow-md flex justify-between items-center">
                <div>
                  <p className="text-gray-500">Showing <span className="font-semibold">{filteredTrips.length}</span> trips</p>
                </div>
                <div className="flex items-center">
                  <ArrowDownAZ size={18} className="mr-2 text-gray-500" />
                  <Select value={sortCriteria} onValueChange={handleSortChange}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="duration-short">Duration: Short to Long</SelectItem>
                      <SelectItem value="duration-long">Duration: Long to Short</SelectItem>
                      <SelectItem value="name-asc">Name: A to Z</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {filteredTrips.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredTrips.map((trip) => (
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
              ) : (
                <div className="text-center py-16 bg-white rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-4">No trips match your filters</h3>
                  <p className="text-gray-500 mb-6">Try changing your filter criteria to see more results.</p>
                  <Button onClick={resetFilters}>Reset Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Trips;
