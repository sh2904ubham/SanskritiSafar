import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
/*import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";*/

const tours = [
  {
    id: "01",
    title: "Akshardham Temple",
    city: "Delhi",
    distance: 300,
    address: 'NH 24, Pramukh Swami Maharaj Marg, Pandav Nagar, New Delhi, Delhi, 110092',
    price: 99,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "Veer Pratap Singh",
        rating: 4.6,
      },
      {
         name: "Raunak",
         rating: 5,
       },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Dal Lake",
    city: "Srinagar",
    distance: 400,
    address: 'Srinagar',
    price: 96,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Shubham",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Solang Valley",
    city: "Manali",
    distance: 500,
    address: 'Manali',
    price: 76,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Kriti",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Kashi Vishwanath Temple",
    city: "Varanasi",
    distance: 500,
    address: 'Lahori Tola, Varanasi, Domari, Uttar Pradesh 221001',
    price: 85,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Ananya",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Arambol Beach",
    city: "Goa",
    distance: 500,
    address: 'Arambol Beach, North Goa.',
    price: 75,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Shubham",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  
];

export default tours;
