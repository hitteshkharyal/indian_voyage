
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, MapPin, Bus, Users, Plus, Edit, Trash2, Search } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { trips } from '@/lib/data';
import { Trip } from '@/lib/data';

const AdminDashboard = () => {
  const [allTrips, setAllTrips] = useState<Trip[]>(trips);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [tripToDelete, setTripToDelete] = useState<string | null>(null);
  
  // Filter trips based on search query
  const filteredTrips = allTrips.filter(trip => 
    trip.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    trip.destination.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const deleteTrip = () => {
    if (tripToDelete) {
      const updatedTrips = allTrips.filter(trip => trip.id !== tripToDelete);
      setAllTrips(updatedTrips);
      toast('Success', {
        description: 'Trip deleted successfully',
      });
      setTripToDelete(null);
      setShowDeleteDialog(false);
    }
  };
  
  const confirmDelete = (id: string) => {
    setTripToDelete(id);
    setShowDeleteDialog(true);
  };
  
  const handleAddTrip = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    toast('Success', {
      title: 'Success',
      description: 'New trip added successfully',
      variant: 'default',
    });
    // Close the dialog
    const closeButton = document.getElementById('closeAddTripDialog');
    if (closeButton) {
      closeButton.click();
    }
  };

  return (
    <div>
      <Navbar />
      
      <div className="bg-gray-50 min-h-screen py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-gray-600">Manage your trips and bookings</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-4 md:mt-0 flex items-center">
                  <Plus size={16} className="mr-2" />
                  Add New Trip
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add New Trip</DialogTitle>
                  <DialogDescription>
                    Fill in the details to create a new trip. All fields are required.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddTrip}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Trip Title</Label>
                      <Input id="title" placeholder="Golden Triangle Tour" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="destination">Destination(s)</Label>
                      <Input id="destination" placeholder="Delhi, Agra, Jaipur" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="image">Image URL</Label>
                      <Input id="image" type="url" placeholder="https://example.com/image.jpg" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Price per Person (₹)</Label>
                      <Input id="price" type="number" min="0" placeholder="25000" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="startDate">Start Date</Label>
                      <Input id="startDate" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="endDate">End Date</Label>
                      <Input id="endDate" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="days">Days</Label>
                      <Input id="days" type="number" min="1" placeholder="7" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nights">Nights</Label>
                      <Input id="nights" type="number" min="0" placeholder="6" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="totalSeats">Total Seats</Label>
                      <Input id="totalSeats" type="number" min="1" placeholder="30" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="busType">Bus Type</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select bus type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="AC">AC</SelectItem>
                          <SelectItem value="Non-AC">Non-AC</SelectItem>
                          <SelectItem value="Semi-Sleeper">Semi-Sleeper</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea id="description" placeholder="Provide a detailed description of the trip..." required />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button id="closeAddTripDialog" type="button" variant="outline">
                      Cancel
                    </Button>
                    <Button type="submit">Save Trip</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Tabs defaultValue="trips">
              <TabsList className="flex w-full bg-gray-100 p-0">
                <TabsTrigger value="trips" className="flex-1 py-3">
                  Manage Trips
                </TabsTrigger>
                <TabsTrigger value="bookings" className="flex-1 py-3">
                  Bookings
                </TabsTrigger>
                <TabsTrigger value="attractions" className="flex-1 py-3">
                  Attractions
                </TabsTrigger>
                <TabsTrigger value="reports" className="flex-1 py-3">
                  Reports
                </TabsTrigger>
              </TabsList>
              
              {/* Trips Management Tab */}
              <TabsContent value="trips" className="p-6">
                <div className="flex justify-between mb-6">
                  <h2 className="text-2xl font-semibold">All Trips</h2>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                    <Input 
                      placeholder="Search trips..." 
                      className="pl-10 w-64" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  {filteredTrips.length > 0 ? (
                    filteredTrips.map(trip => (
                      <Card key={trip.id} className="overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/4 h-40 md:h-auto">
                            <img 
                              src={trip.image} 
                              alt={trip.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="md:w-3/4 p-4">
                            <div className="flex justify-between">
                              <h3 className="text-xl font-semibold">{trip.title}</h3>
                              <Badge variant={trip.availableSeats > 5 ? "outline" : "destructive"}>
                                {trip.availableSeats} seats left
                              </Badge>
                            </div>
                            <div className="flex items-center text-gray-500 mt-1">
                              <MapPin size={16} className="mr-1" />
                              {trip.destination}
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-3">
                              <div className="flex items-center">
                                <Calendar size={16} className="mr-1" />
                                <span>{trip.startDate}</span>
                              </div>
                              <div className="flex items-center">
                                <Bus size={16} className="mr-1" />
                                <span>{trip.busType}</span>
                              </div>
                              <div>
                                <span className="font-semibold">₹{trip.price}</span>
                              </div>
                            </div>
                            <Separator className="my-3" />
                            <div className="flex justify-end space-x-3">
                              <Link to={`/trip/${trip.id}`}>
                                <Button variant="outline" size="sm">View</Button>
                              </Link>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" size="sm" className="flex items-center">
                                    <Edit size={14} className="mr-1" />
                                    Edit
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Edit Trip</DialogTitle>
                                  </DialogHeader>
                                  {/* Form fields would go here, similar to the Add Trip form */}
                                  <DialogFooter>
                                    <Button type="button" variant="outline">Cancel</Button>
                                    <Button>Save Changes</Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="flex items-center text-red-500 hover:text-red-700"
                                onClick={() => confirmDelete(trip.id)}
                              >
                                <Trash2 size={14} className="mr-1" />
                                Delete
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500 mb-4">No trips match your search criteria</p>
                      <Button variant="outline" onClick={() => setSearchQuery('')}>Clear Search</Button>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              {/* Bookings Tab */}
              <TabsContent value="bookings" className="p-6">
                <div className="text-center py-20">
                  <h3 className="text-xl font-semibold mb-3">Bookings Management</h3>
                  <p className="text-gray-500 mb-6">View and manage all customer bookings here.</p>
                  <p className="text-gray-400">(No data)</p>
                </div>
              </TabsContent>
              
              {/* Attractions Tab */}
              <TabsContent value="attractions" className="p-6">
                <div className="text-center py-20">
                  <h3 className="text-xl font-semibold mb-3">Attractions Management</h3>
                  <p className="text-gray-500 mb-6">Add and manage attractions for your destinations.</p>
                  <p className="text-gray-400">(No data)</p>
                </div>
              </TabsContent>
              
              {/* Reports Tab */}
              <TabsContent value="reports" className="p-6">
                <div className="text-center py-20">
                  <h3 className="text-xl font-semibold mb-3">Reports & Analytics</h3>
                  <p className="text-gray-500 mb-6">View insights about your trips and bookings.</p>
                  <p className="text-gray-400">(No data)</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this trip? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>Cancel</Button>
            <Button variant="destructive" onClick={deleteTrip}>Delete Trip</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
