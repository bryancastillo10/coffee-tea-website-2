import male from "src/assets/placeholder/male.png";
import male2 from "src/assets/placeholder/male2.png";
import female from "src/assets/placeholder/female.png";
import female2 from "src/assets/placeholder/female2.png";

export const Customer = [
  {
    id: 1,
    name: "Alice",
    comment: "Great ambiance and excellent coffee selection!",
    img: female,
  },
  {
    id: 2,
    name: "Bob",
    comment: "Fantastic teas and cozy atmosphere!",
    img: male,
  },
  {
    id: 3,
    name: "Charlie",
    comment:
      "Lovely place, perfect for catching up with friends over a cup of coffee.",
    img: male2,
  },
  {
    id: 4,
    name: "金成龍",
    comment: "Best spot for a relaxing afternoon tea!",
    img: male,
  },
  {
    id: 5,
    name: "Eva",
    comment: "The staff is friendly, and the coffee is top-notch!",
    img: female2,
  },
  {
    id: 6,
    name: "Mark",
    comment: "A hidden gem for tea lovers!",
    img: male2,
  },
  {
    id: 7,
    name: "Jen",
    comment: "A nice place to read some books at peace.",
    img: female,
  },
];

export const SliderSetting = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
