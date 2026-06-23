export type Shop = {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  color: string;
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

export type DiasporaFaq = {
  question: string;
  answer: string;
};

export const SITE = {
  name: "The Centre",
  tagline: "Your hub for shopping, snooker, food, drinks, and free WiFi — delivering to your loved ones back home",
  address: "7CXG+4MV Rugoyi, Rusape, Zimbabwe",
  plusCode: "7CXF+F5 Rugoyi",
  phone: "078 249 1166",
  rating: 5.0,
  reviewCount: 7,
  hours: "Open · Closes 11 pm",
  googleMapsUrl: "https://maps.google.com/?q=7CXG+4MV+Rugoyi,+Rusape,+Zimbabwe",
  googleReviewUrl: "https://search.google.com/local/reviews?placeid=REPLACE_ME",
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
    icon: "🛒",
    color: "green",
  },
  {
    id: "hardware",
    name: "Hardware & Cement",
    description: "Quality cement and building materials for all your construction needs.",
    category: "Hardware",
    icon: "🔨",
    color: "red",
  },
  {
    id: "salon",
    name: "Salon & Barber",
    description: "Professional hair styling, grooming, and beauty services.",
    category: "Beauty",
    icon: "💇",
    color: "pink",
  },
  {
    id: "bar",
    name: "Bar & Lounge",
    description: "Relax with drinks and good company in a vibrant atmosphere.",
    category: "Food & Drink",
    icon: "🍻",
    color: "amber",
  },
  {
    id: "snooker",
    name: "Snooker Hall",
    description: "Enjoy a game of snooker with friends in a cozy setting.",
    category: "Entertainment",
    icon: "🎱",
    color: "purple",
  },
  {
    id: "general",
    name: "General Dealer",
    description: "A wide range of commodities — from household goods to everyday essentials.",
    category: "Retail",
    icon: "🏪",
    color: "blue",
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
  { label: "In-store shopping", icon: "🛍️" },
  { label: "Free Wi-Fi", icon: "📶" },
  { label: "Gender-neutral toilets", icon: "🚻" },
  { label: "On-site parking", icon: "🅿️" },
  { label: "Free street parking", icon: "🆓" },
  { label: "Free parking lot", icon: "🅿️" },
];

export const DIASPORA_STEPS = [
  {
    step: 1,
    title: "Browse & Order",
    description: "Tell us what you need via WhatsApp, phone, or social media. We confirm prices and availability.",
  },
  {
    step: 2,
    title: "We Shop & Pack",
    description: "We source the items from our shops — groceries, cement, hardware, or any goods. We share photos of your purchase.",
  },
  {
    step: 3,
    title: "Delivered to Family",
    description: "We deliver directly to your loved ones in the Rusape area and send you proof of delivery.",
  },
] as const;

export const DIASPORA_PRODUCTS = [
  { icon: "🛒", label: "Groceries & Food" },
  { icon: "🧱", label: "Cement & Hardware" },
  { icon: "🧴", label: "Household Goods" },
  { icon: "👕", label: "Clothing & Fashion" },
  { icon: "📱", label: "Electronics & Phones" },
  { icon: "🎁", label: "Custom Orders" },
];

export const DIASPORA_FAQ: DiasporaFaq[] = [
  {
    question: "How does diaspora delivery work?",
    answer: "You contact us via WhatsApp or phone with your order. We source the items from our shops, confirm prices with you, and once payment is received, we deliver to your family or friends in the Rusape area. Simple!",
  },
  {
    question: "What areas do you deliver to?",
    answer: "We deliver within the Rusape town area. Contact us for specific locations to confirm if we can reach your family.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept mobile money (EcoCash, OneMoney), bank transfers, and international payment options. We'll share confirmation photos of the purchased goods before delivery.",
  },
  {
    question: "How long does delivery take?",
    answer: "We typically deliver within 24-48 hours of order confirmation, depending on item availability and delivery location.",
  },
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
