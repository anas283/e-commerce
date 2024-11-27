import Product5Image from "../../../public/product-5.png";
import Product6Image from "../../../public/product-6.png";
import Product7Image from "../../../public/product-7.svg";
import Product8Image from "../../../public/product-8.svg";
import { Product } from "../models/product";

export const topSellingData: Product[] = [
  {
    id: 1,
    title: "Vertical Striped Shirt",
    price: 212,
    originalPrice: 232,
    discountPercent: -20,
    rating: 5.0,
    image: Product5Image
  },
  {
    id: 2,
    title: "Courage Graphic T-shirt",
    price: 145,
    originalPrice: null,
    discountPercent: null,
    rating: 4.0,
    image: Product6Image
  },
  {
    id: 3,
    title: "Loose Fit Bermuda Shorts",
    price: 80,
    originalPrice: null,
    discountPercent: null,
    rating: 3.0,
    image: Product7Image
  },
  {
    id: 4,
    title: "Faded Skinny Jeans",
    price: 210,
    originalPrice: null,
    discountPercent: null,
    rating: 4.5,
    image: Product8Image
  }
]