import araku2DaysImg from '../assets/Images/araku-wooden-bridge.jpg';
import araku1DayImg from '../assets/Images/araku-katika-waterfall.jpg';
import vizagDay1Img from '../assets/Images/ttd-vizag.jpg';
import vizagDay2Img from '../assets/Images/simhachalam-vizag.jpg';

// Special Package images
import imgLambasingi from '../assets/SpecialPackages/lambasingi-view.jpg';
import imgVanajangi from '../assets/SpecialPackages/vanajangi-view.jpg';
import imgDeomali from '../assets/SpecialPackages/deomali-hills.webp';
import imgChitrakote from '../assets/SpecialPackages/chitrakote-waterfalls.jpg';

// Temple images
import imgLocalVizag from '../assets/Images/simhachalam-vizag.jpg';
import imgSrikakulam from '../assets/Temples/srimukhalingam-srikakulam.jpg';
import imgOdisha from '../assets/Temples/puri-temple.jpg';
import imgEastGodavari from '../assets/Temples/annavaram-temple.jpg';
import imgAndhraPradesh from '../assets/Temples/kanaka-durgamma-temple.jpg';
import imgTirupati from '../assets/Temples/tirumala-tirupati.jpg';
import imgSouthIndia from '../assets/Temples/arunachalam-temple.jpg';

export const tours = [
  {
    id: "araku-1-day",
    title: "Araku 1 Day Trip",
    duration: "1 Day",
    price: "₹4,999",
    image: araku1DayImg,
    description: "A quick escape to Araku valley covering the most popular viewpoints.",
    highlights: [
      "Damuku view point",
      "Borra caves",
      "Katiki waterfalls (up to jeep parking, local vehicles pay by customer)",
      "Coffee plantation",
      "Wooden bridge",
      "Galikonda view point"
    ],
    notes: [
      "Must provide driver food",
      "No AC in ghat roads"
    ]
  },
  {
    id: "araku-2-days",
    title: "Araku 2 Days Trip",
    duration: "2 Days / 1 Night",
    price: "₹7,499",
    image: araku2DaysImg,
    description: "Explore the beautiful Araku Valley over two days with major sightseeing spots.",
    highlights: [
      "Damuku view hotel",
      "Borra caves",
      "Katiki waterfalls (up to jeep parking, local vehicles pay by customer)",
      "Coffee plantation",
      "Wooden bridge",
      "Galikonda view point",
      "Araku pinery & Tribal museum",
      "Coffee museum & Chocolate factory",
      "Padmapuram gardens",
      "Chaparai waterfalls"
    ],
    notes: [
      "Must provide driver food",
      "No AC in ghat roads",
      "Tolls and parking pay by customer"
    ]
  },
  {
    id: "vizag-day-1",
    title: "Vizag Trip - Day 1",
    duration: "9:00 AM to 6:00 PM",
    price: "₹2,999",
    image: vizagDay1Img,
    description: "Local sightseeing around the beautiful city of Destiny.",
    highlights: [
      "TTD temple",
      "Thotlakonda",
      "Natural arch",
      "Rama Naidu studio",
      "Rushikonda beach",
      "Tenneti park",
      "Zoo park",
      "Kailash giri",
      "Three museums",
      "Kalimatha temple",
      "RK beach"
    ],
    notes: []
  },
  {
    id: "vizag-day-2",
    title: "Vizag Trip - Day 2",
    duration: "9:00 AM to 6:00 PM",
    price: "₹3,499",
    image: vizagDay2Img,
    description: "Explore the historic and scenic coastal locations of Vizag.",
    highlights: [
      "Simhachalam temple",
      "Yarada beach",
      "Dolphin nose Light house",
      "Rosehill Church",
      "Fishing harbour"
    ],
    notes: [
      "Must provide driver food",
      "Tolls and parking pay by customer"
    ]
  }
];

export const services = [
  {
    id: "temples",
    title: "Temple Tours",
    description: "We provide tours to any temple across India. Contact us for custom quotes."
  },
  {
    id: "airport",
    title: "Airport & Railway Pick up/Drop",
    description: "Hassle-free transfers to and from the airport and railway stations."
  },
  {
    id: "corporate",
    title: "Corporate & Rentals",
    description: "Rental based transport solutions for corporate purposes and long-term needs."
  },
  {
    id: "marriages",
    title: "Marriages & Functions",
    description: "Bulk transportation and luxury vehicles available for special occasions."
  }
];

export const specialPackages = [
  {
    id: "lambasingi",
    title: "Lambasingi Hill Station",
    duration: "1 Night / 2 Days",
    image: imgLambasingi,
    description: "Escape to the 'Kashmir of Andhra Pradesh'. Experience misty hills, chilly climate, and stunning natural beauty.",
    highlights: [
      "Lambasingi Viewpoint",
      "Strawberry farms visit",
      "Coffee and pepper plantations",
      "Tribal village sightseeing",
      "Sunrise & fog valley experience"
    ]
  },
  {
    id: "vanajangi",
    title: "Vanajangi Forest Trek",
    duration: "2 Days / 1 Night",
    image: imgVanajangi,
    description: "A breathtaking forest destination known for its sea of clouds and dense greenery above the Vizag ghats.",
    highlights: [
      "Cloud valley views",
      "Dense forest trekking",
      "Panoramic ghat road drive",
      "Kothapalli Waterfalls",
      "Matsyagundam",
      "Photography paradise",
      "Local tribal area tour"
    ]
  },
  {
    id: "deomali",
    title: "Deomali Peak",
    duration: "1 Night / 2 Days",
    image: imgDeomali,
    description: "Visit the highest peak in Odisha, offering stunning views of Eastern Ghats, forests, and rivers below.",
    highlights: [
      "Deomali Peak summit",
      "Scenic ghat road journey",
      "Koraput tribal town visit",
      "Nature walks & photography",
      "Sunset views from peak"
    ]
  },
  {
    id: "chitrakote",
    title: "Chitrakote Waterfalls",
    duration: "2 Days / 1 Night",
    image: imgChitrakote,
    description: "Experience the 'Niagara of India' — the widest waterfall in India, located in Bastar, Chhattisgarh.",
    highlights: [
      "Chitrakote Waterfall (Niagara of India)",
      "Indravati river boat ride",
      "Bastar tribal culture experience",
      "Tirathgarh Waterfall side visit",
      "Wildlife & forest scenery"
    ]
  }
];

export const templePackages = [
  {
    id: "local-vizag",
    title: "Local Temple Tour (Vizag)",
    image: imgLocalVizag,
    temples: [
      "Simhachalam Temple",
      "Kanaka Mahalakshmi Temple",
      "Bellam Vinayakudu Temple",
      "Sampath Vinayaka Temple",
      "Polamamba Temple",
      "TTD Temple",
      "ISKCON Temple",
      "Other temples on request"
    ]
  },
  {
    id: "srikakulam",
    title: "Srikakulam And Vizianagaram Temple Tour",
    image: imgSrikakulam,
    temples: [
      "Arasavalli Sun Temple",
      "Srikurmam Temple",
      "Srimukhalingam Temple",
      "Ravivalasa Temple",
      "Ramateertham Temple",
      "Pydithalli Ammavari Temple",
      "Ramnarayan Temple"
    ]
  },
  {
    id: "odisha",
    title: "Odisha Temple Tour",
    image: imgOdisha,
    temples: [
      "Jagannath Temple, Puri",
      "Konark Sun Temple",
      "Mukteswar Temple",
      "Chilika Lake"
    ]
  },
  {
    id: "east-godavari",
    title: "East Godavari Temple Tour",
    image: imgEastGodavari,
    temples: [
      "Annavaram",
      "Dwarapudi",
      "Vadapalli Venkateswara Swamy Temple",
      "Pithapuram Shakti Peetham"
    ]
  },
  {
    id: "andhra-pradesh",
    title: "Andhra Pradesh Temple Tour",
    image: imgAndhraPradesh,
    temples: [
      "Vijayawada Kanaka Durga Temple",
      "Tirupati Balaji Temple",
      "Kanipakam Vinayaka Temple",
      "Srikalahasti Temple"
    ]
  },
  {
    id: "tirupati",
    title: "Tirupati Balaji Pilgrimage",
    image: imgTirupati,
    temples: [
      "Tirupati Balaji Temple (TTD)",
      "Tirumala local sightseeing temple"
    ]
  },
  {
    id: "south-india",
    title: "South India Pilgrimage Tours",
    image: imgSouthIndia,
    temples: [
      "Arunachalam Temple",
      "Sabarimala Pilgrimage"
    ]
  }
];
