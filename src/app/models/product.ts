import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Product {
  id: number,
  title: string,
  price: number,
  originalPrice: number | null,
  discountPercent: number | null,
  rating: number,
  image: string | StaticImport
}