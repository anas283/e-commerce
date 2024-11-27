export interface Product {
  id: number,
  title: string,
  price: number,
  originalPrice: number | null,
  discountPercent: number | null,
  rating: number,
  image: string | object
}