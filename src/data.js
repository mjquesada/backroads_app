import tourImg1 from './images/tour-1.jpeg'
import tourImg2 from './images/tour-2.jpeg'
import tourImg3 from './images/tour-3.jpeg'
import tourImg4 from './images/tour-4.jpeg'

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://twitter.com", icon: "fab fa-facebook" },
  { id: 1, href: "https://twitter.com", icon: "fab fa-twitter" },
  { id: 1, href: "https://twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tourImg1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    country: "china",
    length: "6 days",
    price: "from $2100",
  },
  {
    id: 2,
    image: tourImg2,
    date: "october 1th, 2020",
    title: "best of java",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    country: "indonesia",
    length: "11 days",
    price: "from $1400",
  },
  {
    id: 3,
    image: tourImg3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    country: "hong kong",
    length: "8 days",
    price: "from $5000",
  },
  {
    id: 4,
    image: tourImg4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    country: "china",
    length: "20 days",
    price: "from $3300",
  },
];
