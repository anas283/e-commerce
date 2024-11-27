import Image from "next/image";
import Link from "next/link";
import StarFull from "../../../public/star-full.svg";
import StarHalf from "../../../public/star-half.svg";
import { Product } from "../models/product";

interface Props {
  data: Product 
}

export default function ProductCard(props: Props) {

  const renderStars = (rating: number) => {
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

  return (
    <Link href="product-detail">
      <div className="w-[295px] h-[298px] rounded-[20px] bg-[#F0EEED] overflow-hidden flex justify-center items-center">
        <Image
          src={props.data.image}
          alt={props.data.title}
        />
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <h6 className="text-xl font-bold">
          {props.data.title}
        </h6>
        <div className="flex flex-row gap-2.5 items-center">
          <div className="flex h-[18.49px] gap-0.5">
            {renderStars(props.data.rating)}
          </div>
          <span className="flex flex-row">
            <span className="text-sm">{props.data.rating}/</span>
            <span className="text-sm opacity-60">5</span>
          </span>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <h5 className="text-2xl font-bold">
            ${props.data.price}
          </h5>
          {props.data.originalPrice &&
            <h5 className="text-2xl font-bold opacity-40 line-through">
              ${props.data.originalPrice}
            </h5>
          }
          {props.data.discountPercent &&
            <span className="w-[58px] h-[28px] bg-[#FF3333]/10 rounded-full text-xs text-[#FF3333] flex justify-center items-center font-medium">
              {props.data.discountPercent}%
            </span>
          }
        </div>
      </div>
    </Link>
  )
}