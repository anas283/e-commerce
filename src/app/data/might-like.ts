import Product9Image from "../../../public/product-9.svg";
import Product10Image from "../../../public/product-10.svg";
import Product11Image from "../../../public/product-11.svg";
import Product12Image from "../../../public/product-12.svg";
import { Product } from "../models/product";

export const mightLikeData: Product[] = [
  {
    id: 1,
    title: "Polo with Contrast Trims",
    price: 212,
    originalPrice: 242,
    discountPercent: null,
    rating: 4.0,
    image: Product9Image
  },
  {
    id: 2,
    title: "Gradient Graphic T-shirt",
    price: 145,
    originalPrice: null,
    discountPercent: null,
    rating: 3.5,
    image: Product10Image
  },
  {
    id: 3,
    title: "Polo with Tipping Details",
    price: 180,
    originalPrice: null,
    discountPercent: null,
    rating: 4.5,
    image: Product11Image
  },
  {
    id: 4,
    title: "Black Striped T-shirt",
    price: 120,
    originalPrice: 150,
    discountPercent: -30,
    rating: 5.0,
    image: Product12Image
  }
]