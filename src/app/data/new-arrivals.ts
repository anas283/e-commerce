import Product1Image from "../../../public/product-1.svg";
import Product2Image from "../../../public/product-2.svg";
import Product3Image from "../../../public/product-3.svg";
import Product4Image from "../../../public/product-4.svg";
import { Product } from "../models/product";

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    price: 120,
    originalPrice: null,
    discountPercent: null,
    rating: 4.5,
    image: Product1Image
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    discountPercent: -20,
    rating: 3.5,
    image: Product2Image
  },
  {
    id: 3,
    title: "Checkered Shirt",
    price: 180,
    originalPrice: null,
    discountPercent: null,
    rating: 4.5,
    image: Product3Image
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    discountPercent: -30,
    rating: 4.5,
    image: Product4Image
  }
]