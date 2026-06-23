export type Shop = {
  id: string;
  name: string;
  description: string;
  category: string;
};

export type Review = {
  author: string;
  rating: number;
  text: string;
  date: string;
  photoCount?: number;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const SITE = {
  name: "The Centre",
  tagline: "Your hub for shopping, snooker, food, drinks, and free WiFi",
  address: "7CXG+4MV Rugoyi, Rusape, Zimbabwe",
  plusCode: "7CXF+F5 Rugoyi",
  phone: "078 249 1166",
  rating: 5.0,
  reviewCount: 7,
  hours: "Open · Closes 11 pm",
  social: {
    facebook: "#",
    instagram: "#",
    whatsapp: "https://wa.me/263782491166",
  },
} as const;

export const SHOPS: Shop[] = [
  {
    id: "grocery",
    name: "Grocery Store",
    description: "Fresh produce, essentials, and everyday groceries at affordable prices.",
    category: "Grocery",
  },
  {
    id: "hardware",
    name: "Hardware & Cement",
    description: "Quality cement and building materials for all your construction needs.",
    category: "Hardware",
  },
  {
    id: "salon",
    name: "Salon & Barber",
    description: "Professional hair styling, grooming, and beauty services.",
    category: "Beauty",
  },
  {
    id: "bar",
    name: "Bar & Lounge",
    description: "Relax with drinks and good company in a vibrant atmosphere.",
    category: "Food & Drink",
  },
  {
    id: "snooker",
    name: "Snooker Hall",
    description: "Enjoy a game of snooker with friends in a cozy setting.",
    category: "Entertainment",
  },
  {
    id: "general",
    name: "General Dealer",
    description: "A wide range of commodities — from household goods to everyday essentials.",
    category: "Retail",
  },
];

export const REVIEWS: Review[] = [
  {
    author: "Tinotenda Mudzinganyama",
    rating: 5,
    text: "It's an amazing place, great scenery, an amazing place to chill and enjoy quality time with friends and family.",
    date: "5 months ago",
  },
  {
    author: "Tinashe Chuma",
    rating: 5,
    text: "Very nice location, with an amazing scenery.",
    date: "5 months ago",
  },
  {
    author: "Panashe",
    rating: 5,
    text: "Cement yavo is very cheap. I am happy with The Centre!",
    date: "6 months ago",
    photoCount: 3,
  },
  {
    author: "Tari Maramba",
    rating: 5,
    text: "Good nice spot. Very neat haaa panofaya!",
    date: "5 months ago",
    photoCount: 2,
  },
];

export const AMENITIES = [
  "In-store shopping",
  "Free Wi-Fi",
  "Gender-neutral toilets",
  "On-site parking",
  "Free street parking",
  "Free parking lot",
];

export const SERVICES: Service[] = [
  {
    title: "Bar & Lounge",
    description: "Unwind with a wide selection of drinks in a relaxed, friendly atmosphere.",
    icon: "🍻",
  },
  {
    title: "Snooker",
    description: "Challenge friends to a game of snooker on our professional tables.",
    icon: "🎱",
  },
  {
    title: "Free Wi-Fi",
    description: "Stay connected with complimentary high-speed internet throughout the centre.",
    icon: "📶",
  },
  {
    title: "Shopping",
    description: "Multiple shops offering groceries, hardware, general goods and more.",
    icon: "🛍️",
  },
];
