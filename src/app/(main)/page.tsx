import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import Image from "next/image";
import HeroImage from "../../../public/hero-image.png";
import VersaceLogo from "../../../public/versace-logo.svg";
import ZaraLogo from "../../../public/zara-logo.svg";
import GucciLogo from "../../../public/gucci-logo.svg";
import PradaLogo from "../../../public/prada-logo.svg";
import CalvinLogo from "../../../public/calvin-logo.svg";
import ProductCard from "../components/product-card";
import { newArrivalsData } from "../data/new-arrivals";

const integralCF = localFont({
  src: "../fonts/integralcf-bold.woff",
});

export default function Home() {
  return (
    <div>
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

      <div className="w-full h-[122px] bg-black">
        <div className="w-full max-w-xl h-full mx-auto flex justify-between items-center">
          <div>
            <Image src={VersaceLogo} alt="versace-logo" className="max-w-[166px] w-auto h-auto" />
          </div>
          <div>
            <Image src={ZaraLogo} alt="zara-logo" className="max-w-[91px] w-auto h-auto" />
          </div>
          <div>
            <Image src={GucciLogo} alt="gucci-logo" className="max-w-[156px] w-auto h-auto" />
          </div>
          <div>
            <Image src={PradaLogo} alt="prada-logo" className="max-w-[194px] w-auto h-auto" />
          </div>
          <div>
            <Image src={CalvinLogo} alt="calvin-logo" className="max-w-[206px] w-auto h-auto" />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full max-w-xl mx-auto py-16">
          <h3 className={`${integralCF.className} text-5xl uppercase text-center`}>
            New Arrivals
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-14">
            {newArrivalsData.map((data, key) => {
              return (
                <ProductCard 
                  key={key}
                  data={data} 
                />
              )
            })}
          </div>

          <div className="flex justify-center pt-10">
            <Button variant="outline" className="rounded-full w-[210px] h-[52px] font-medium px-4">
              View All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}