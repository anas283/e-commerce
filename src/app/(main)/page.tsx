import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import Image from "next/image";
import HeroImage from "../../../public/hero-image.png";

const integralCF = localFont({
  src: "../fonts/integralcf-bold.woff",
});

export default function Home() {
  return (
    <div className="bg-[#F2F0F1] w-full min-h-[663px]">
      <div className="w-full max-w-xl mx-auto flex items-center min-h-[663px]">
        <div className="flex flex-col gap-7">
          <h1 className={`${integralCF.className} text-[64px] uppercase max-w-[577px] leading-[64px]`}>
            Find Clothes That Matches Your Styles
          </h1>
          <h6 className="max-w-[545px] opacity-60">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </h6>
          <Button className="rounded-full w-[210px] h-[52px] font-medium px-4">
            Shop Now
          </Button>
          <div className="flex flex-row gap-4 divide-x mt-2">
            <div className="pr-4">
              <h5 className="text-[40px] font-bold">200+</h5>
              <h6 className="opacity-60">International Brands</h6>
            </div>
            <div className="px-4">
              <h5 className="text-[40px] font-bold">2000+</h5>
              <h6 className="opacity-60">High-Quality Products</h6>
            </div>
            <div className="pl-4">
              <h5 className="text-[40px] font-bold">30000+</h5>
              <h6 className="opacity-60">Happy Customers</h6>
            </div>
          </div>
        </div>
        <div className="ml-auto mt-auto">
          <Image src={HeroImage} alt="hero-image" className="w-[621px] h-[617px]" />
        </div>
      </div>
    </div>
  )
}