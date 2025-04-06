
export interface Trip {
  id: string;
  title: string;
  destination: string;
  image: string;
  startDate: string;
  endDate: string;
  duration: {
    days: number;
    nights: number;
  };
  price: number;
  availableSeats: number;
  totalSeats: number;
  busType: 'AC' | 'Non-AC' | 'Semi-Sleeper';
  description: string;
  included: string[];
  notIncluded: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
}

export interface Attraction {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  city: string;
  rating: number;
  type: string;
}

export const trips: Trip[] = [
  {
    id: "trip-001",
    title: "Golden Triangle Tour",
    destination: "Delhi, Agra, Jaipur",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1171&auto=format&fit=crop",
    startDate: "2025-05-15",
    endDate: "2025-05-21",
    duration: {
      days: 7,
      nights: 6,
    },
    price: 25000,
    availableSeats: 20,
    totalSeats: 30,
    busType: "AC",
    description: "Experience India's iconic Golden Triangle tour covering Delhi, Agra, and Jaipur. Witness the majestic Taj Mahal, explore historic forts, and immerse yourself in India's rich cultural heritage.",
    included: [
      "AC Bus Transportation",
      "Hotel Accommodation",
      "Breakfast and Dinner",
      "Sightseeing as per itinerary",
      "English Speaking Guide",
      "All taxes and service charges"
    ],
    notIncluded: [
      "Lunch",
      "Monument entrance fees",
      "Personal expenses",
      "Any item not specified in inclusions"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi",
        description: "Welcome to Delhi! After arrival, check-in at the hotel. Evening free for leisure or optional city tour."
      },
      {
        day: 2,
        title: "Delhi Sightseeing",
        description: "Full day Delhi sightseeing including Red Fort, Jama Masjid, Qutub Minar, and India Gate."
      },
      {
        day: 3,
        title: "Delhi to Agra",
        description: "Morning departure to Agra. Visit Taj Mahal during sunset. Overnight in Agra."
      },
      {
        day: 4,
        title: "Agra to Jaipur",
        description: "Morning visit to Agra Fort. Afternoon departure to Jaipur with a stop at Fatehpur Sikri."
      },
      {
        day: 5,
        title: "Jaipur Sightseeing",
        description: "Full day Jaipur sightseeing including Amber Fort, City Palace, and Hawa Mahal."
      },
      {
        day: 6,
        title: "Jaipur Leisure Day",
        description: "Day free for shopping and exploring local markets. Optional visit to Chokhi Dhani for cultural experience."
      },
      {
        day: 7,
        title: "Jaipur to Delhi",
        description: "Morning departure to Delhi. Tour concludes upon arrival in Delhi."
      }
    ]
  },
  {
    id: "trip-002",
    title: "Kerala Backwaters Escape",
    destination: "Kochi, Munnar, Alleppey",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1632&auto=format&fit=crop",
    startDate: "2025-06-10",
    endDate: "2025-06-15",
    duration: {
      days: 6,
      nights: 5,
    },
    price: 22000,
    availableSeats: 15,
    totalSeats: 20,
    busType: "AC",
    description: "Discover the serene beauty of Kerala's backwaters, lush tea plantations, and pristine beaches on this relaxing tour of God's Own Country.",
    included: [
      "AC Bus Transportation",
      "Hotel Accommodation",
      "Breakfast and Dinner",
      "Houseboat stay in Alleppey",
      "Sightseeing as per itinerary",
      "English Speaking Guide",
      "All taxes and service charges"
    ],
    notIncluded: [
      "Lunch (except during houseboat stay)",
      "Personal expenses",
      "Optional activities",
      "Any item not specified in inclusions"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kochi",
        description: "Welcome to Kochi! After arrival, check-in at the hotel. Evening visit to Kathakali dance performance."
      },
      {
        day: 2,
        title: "Kochi to Munnar",
        description: "Morning sightseeing in Kochi including Fort Kochi and Jewish Synagogue. Afternoon departure to Munnar."
      },
      {
        day: 3,
        title: "Munnar Sightseeing",
        description: "Full day exploring Munnar tea plantations, Eravikulam National Park, and Mattupetty Dam."
      },
      {
        day: 4,
        title: "Munnar to Alleppey",
        description: "Morning departure to Alleppey. Board a traditional houseboat for an overnight stay on Kerala backwaters."
      },
      {
        day: 5,
        title: "Alleppey to Kochi",
        description: "Morning cruise on the backwaters. Disembark and transfer to Kochi. Evening free for shopping."
      },
      {
        day: 6,
        title: "Departure from Kochi",
        description: "Tour concludes. Transfer to airport for your onward journey."
      }
    ]
  },
  {
    id: "trip-003",
    title: "Varanasi Spiritual Journey",
    destination: "Varanasi",
    image: "https://cdn.getyourguide.com/img/tour/014e9b084ff0f6ebf69149097fc2680b5eecdd3588ef178c4da98f03fab58aa4.jpg/145.jpg",
    startDate: "2025-04-25",
    endDate: "2025-04-28",
    duration: {
      days: 4,
      nights: 3,
    },
    price: 12000,
    availableSeats: 25,
    totalSeats: 30,
    busType: "Semi-Sleeper",
    description: "Experience the spiritual essence of India with a journey to Varanasi, one of the world's oldest living cities. Witness the sacred Ganga Aarti and explore ancient temples.",
    included: [
      "Semi-Sleeper Bus Transportation",
      "Hotel Accommodation",
      "Breakfast",
      "Ganga Aarti experience",
      "Boat ride on River Ganges",
      "Local guide services",
      "All taxes"
    ],
    notIncluded: [
      "Lunch and dinner",
      "Monument entrance fees",
      "Personal expenses",
      "Optional activities",
      "Any item not specified in inclusions"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Varanasi",
        description: "Welcome to Varanasi! After arrival, check-in at the hotel. Evening visit to witness the mesmerizing Ganga Aarti ceremony at Dashashwamedh Ghat."
      },
      {
        day: 2,
        title: "Morning Boat Ride & Temple Visit",
        description: "Early morning boat ride on the River Ganges to witness the spiritual rituals. Visit to Kashi Vishwanath Temple and other important temples in the city."
      },
      {
        day: 3,
        title: "Sarnath Excursion",
        description: "Day trip to Sarnath, where Buddha gave his first sermon. Visit to Sarnath Museum and Dhamek Stupa."
      },
      {
        day: 4,
        title: "Departure",
        description: "Morning free for personal activities or shopping. Departure from Varanasi."
      }
    ]
  },
  {
    id: "trip-004",
    title: "Rajasthan Royal Retreat",
    destination: "Udaipur, Jodhpur, Jaisalmer",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1470&auto=format&fit=crop",
    startDate: "2025-07-10",
    endDate: "2025-07-20",
    duration: {
      days: 11,
      nights: 10,
    },
    price: 35000,
    availableSeats: 18,
    totalSeats: 25,
    busType: "AC",
    description: "Journey through the royal land of Rajasthan, exploring its magnificent palaces, formidable forts, and vibrant culture. Experience the royal heritage and hospitality of this colorful state.",
    included: [
      "AC Bus Transportation",
      "Hotel Accommodation",
      "Daily Breakfast",
      "Welcome dinner in Udaipur",
      "Desert safari in Jaisalmer",
      "Local English speaking guides",
      "All applicable taxes"
    ],
    notIncluded: [
      "Lunch and dinner (except mentioned)",
      "Monument entrance fees",
      "Camera fees",
      "Personal expenses",
      "Any item not specified in inclusions"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Udaipur",
        description: "Welcome to Udaipur, the City of Lakes! After arrival, check-in at the hotel. Welcome dinner at a lakeside restaurant."
      },
      {
        day: 2,
        title: "Udaipur Sightseeing",
        description: "Full day exploring Udaipur including City Palace, Lake Pichola, Saheliyon Ki Bari, and Jagdish Temple."
      },
      {
        day: 3,
        title: "Udaipur to Jodhpur",
        description: "Morning departure to Jodhpur with a stop at the beautiful Ranakpur Jain Temple."
      },
      {
        day: 4,
        title: "Jodhpur Exploration",
        description: "Full day sightseeing of Jodhpur including Mehrangarh Fort, Umaid Bhawan Palace, and Jaswant Thada."
      },
      {
        day: 5,
        title: "Jodhpur to Jaisalmer",
        description: "Morning departure to Jaisalmer. Evening free to explore Jaisalmer city."
      },
      {
        day: 6,
        title: "Jaisalmer Fort and City",
        description: "Full day exploring the Golden City including Jaisalmer Fort, Patwon Ki Haveli, and Gadisar Lake."
      },
      {
        day: 7,
        title: "Desert Safari",
        description: "Morning at leisure. Afternoon desert safari to Sam Sand Dunes with camel ride and cultural program."
      },
      {
        day: 8,
        title: "Jaisalmer to Jodhpur",
        description: "Return journey to Jodhpur. Evening free for shopping and leisure."
      },
      {
        day: 9,
        title: "Jodhpur to Udaipur",
        description: "Morning departure to Udaipur. Evening boat ride on Lake Pichola (optional)."
      },
      {
        day: 10,
        title: "Udaipur Leisure Day",
        description: "Day free for personal activities, shopping, or optional excursion to nearby attractions."
      },
      {
        day: 11,
        title: "Departure from Udaipur",
        description: "Tour concludes. Transfer to airport/railway station for your onward journey."
      }
    ]
  }
];

export const attractions: Attraction[] = [
  {
    id: "att-001",
    title: "Taj Mahal",
    description: "The iconic white marble mausoleum built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1471&auto=format&fit=crop",
    location: "Agra, Uttar Pradesh",
    city: "Agra",
    rating: 4.9,
    type: "Monument"
  },
  {
    id: "att-002",
    title: "Amber Fort",
    description: "A magnificent fort complex that combines Rajput and Mughal architecture, featuring stunning views and intricate designs.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1470&auto=format&fit=crop",
    location: "Jaipur, Rajasthan",
    city: "Jaipur",
    rating: 4.7,
    type: "Fort"
  },
  {
    id: "att-003",
    title: "Alleppey Backwaters",
    description: "Serene network of canals, lakes, and lagoons where you can experience traditional Kerala houseboats.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1632&auto=format&fit=crop",
    location: "Alleppey, Kerala",
    city: "Alleppey",
    rating: 4.8,
    type: "Natural"
  },
  {
    id: "att-004",
    title: "Dashashwamedh Ghat",
    description: "The main ghat in Varanasi where the spectacular Ganga Aarti ceremony takes place every evening.",
    image: "https://kashiyatra.in/wp-content/uploads/2023/10/dashashwamedh-ghat-evening-ganga-aarti.jpg",
    location: "Varanasi, Uttar Pradesh",
    city: "Varanasi",
    rating: 4.6,
    type: "Cultural"
  },
  {
    id: "att-005",
    title: "India Gate",
    description: "A war memorial dedicated to the soldiers who died in World War I, standing majestically in the heart of Delhi.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1470&auto=format&fit=crop",
    location: "New Delhi, Delhi",
    city: "Delhi",
    rating: 4.5,
    type: "Monument"
  },
  {
    id: "att-006",
    title: "Mehrangarh Fort",
    description: "One of the largest forts in India, standing 400 feet above the city with imposing thick walls and stunning views.",
    image: "https://tripxl.com/blog/wp-content/uploads/2024/09/Location-289.jpg",
    location: "Jodhpur, Rajasthan",
    city: "Jodhpur",
    rating: 4.7,
    type: "Fort"
  },
  {
    id: "att-007",
    title: "Barot Valley, Himachal Pradesh",
    description: "A hidden gem in Himachal Pradesh, known for its lush green landscapes and serene river views.",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*igZvR0B6F2EKKTyQpVvs-g.jpeg",
    location: "Mandi, Himachal Pradesh",
    city:"Barot Valley",
    rating: 4.9,
    type: "Natural"
  },
];
