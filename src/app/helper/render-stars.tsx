import Image from "next/image";
import StarFull from "../../../public/star-full.svg";
import StarHalf from "../../../public/star-half.svg";

export const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars: JSX.Element[] = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Image src={StarFull} alt="star" width={18.49} height={18.49} />);
  }
  if (hasHalfStar) {
    stars.push(<Image src={StarHalf} alt="star" width={8.79} height={16.72} />);
  }
  return stars;
}