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
import { topSellingData } from "../data/top-selling";
import CasualShirt from "../../../public/casual.png";
import FormalShirt from "../../../public/formal.png";
import PartyShirt from "../../../public/party.png";
import GymShirt from "../../../public/gym.png";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { reviewsData } from "../data/reviews";
import StarFull from "../../../public/star-full.svg";
import StarHalf from "../../../public/star-half.svg";
import VerifiedLogo from "../../../public/verified.svg";

const integralCF = localFont({
  src: "../fonts/integralcf-bold.woff",
});

export default function Home() {

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
    <div>
      <div className="bg-[#F2F0F1] w-full md:min-h-[663px]">
        <div className="w-full max-w-xl mx-auto flex flex-col md:flex-row items-center md:min-h-[663px]">
          <div className="flex flex-col gap-4 md:gap-7 pt-8 px-4 md:pt-0 xl:px-0">
            <h1 className={`${integralCF.className} text-4xl md:text-5xl xl:text-[64px] uppercase md:max-w-[577px] leading-[34px] xl:leading-[64px]`}>
              Find Clothes That Matches Your Styles
            </h1>
            <h6 className="md:max-w-[545px] opacity-60 text-sm md:text-base">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </h6>
            <Button className="rounded-full w-full md:w-[210px] h-[52px] font-medium px-4 text-base">
              Shop Now
            </Button>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <div className="flex flex-col lg:gap-1 pr-4">
                <h5 className="text-2xl xl:text-[40px] font-bold">200+</h5>
                <h6 className="text-xs md:text-base opacity-60">International Brands</h6>
              </div>
              <div className="flex flex-col lg:gap-1 px-4 border-l md:border-r">
                <h5 className="text-2xl xl:text-[40px] font-bold">2000+</h5>
                <h6 className="text-xs md:text-base opacity-60">High-Quality Products</h6>
              </div>
              <div className="flex flex-col lg:gap-1 pl-4">
                <h5 className="text-2xl xl:text-[40px] font-bold">30000+</h5>
                <h6 className="text-xs md:text-base opacity-60">Happy Customers</h6>
              </div>
            </div>
          </div>
          <div className="lg:ml-auto mt-10 md:mt-auto flex justify-center">
            <Image src={HeroImage} alt="hero-image" className="w-[500px] h-fit xl:w-[621px] xl:h-[617px]" />
          </div>
        </div>
      </div>

      <div className="w-full h-[122px] bg-black py-5 md:py-0 px-4 xl:px-0">
        <div className="w-full max-w-xl h-full mx-auto flex flex-wrap justify-center md:justify-between items-center gap-x-8 md:gap-0">
          <div>
            <Image src={VersaceLogo} alt="versace-logo" className="max-w-[116px] lg:max-w-[166px] w-auto h-auto" />
          </div>
          <div>
            <Image src={ZaraLogo} alt="zara-logo" className="max-w-[63px] lg:max-w-[91px] w-auto h-auto" />
          </div>
          <div>
            <Image src={GucciLogo} alt="gucci-logo" className="max-w-[109px] lg:max-w-[156px] w-auto h-auto" />
          </div>
          <div>
            <Image src={PradaLogo} alt="prada-logo" className="max-w-[127px] lg:max-w-[194px] w-auto h-auto" />
          </div>
          <div>
            <Image src={CalvinLogo} alt="calvin-logo" className="max-w-[134px] lg:max-w-[206px] w-auto h-auto" />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full max-w-xl mx-auto py-16 px-4 xl:px-0">
          <h3 className={`${integralCF.className} text-[32px] md:text-5xl uppercase text-center`}>
            New Arrivals
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-14 justify-center">
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
        
      <div className="w-full">
        <div className="w-full max-w-xl mx-auto py-16 px-4 xl:px-0">
          <h3 className={`${integralCF.className} text-[32px] md:text-5xl uppercase text-center`}>
            Top Selling
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-14 justify-center">
            {topSellingData.map((data, key) => {
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

      <div className="w-full px-4 xl:px-0">
        <div className="w-full max-w-xl mx-auto rounded-[20px] md:rounded-[40px] bg-[#F0F0F0] px-5 py-10 md:p-10">
          <h3 className={`${integralCF.className} text-[32px] leading-9 md:leading-normal md:text-5xl uppercase text-center`}>
            Browse by dress style
          </h3>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 mt-10 gap-4">
            <div className="h-[190px] md:h-[289px] rounded-[20px] overflow-hidden relative">
              <span className="absolute top-5 left-6 text-2xl md:text-4xl font-bold">Casual</span>
              <Image className="w-full h-full object-cover" src={CasualShirt} alt="casual-shirt" />
            </div>
            <div className="h-[190px] md:h-[289px] rounded-[20px] col-span-2 overflow-hidden relative">
              <span className="absolute top-5 left-6 text-2xl md:text-4xl font-bold">Formal</span>
              <Image className="w-full h-full object-cover" src={FormalShirt} alt="formal-shirt" />
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 mt-4 gap-4">
            <div className="h-[190px] md:h-[289px] rounded-[20px] col-span-2 overflow-hidden relative">
              <span className="absolute top-5 left-6 text-2xl md:text-4xl font-bold">Party</span>
              <Image className="w-full h-full object-cover" src={PartyShirt} alt="party-shirt" />
            </div>
            <div className="h-[190px] md:h-[289px] rounded-[20px] overflow-hidden relative">
              <span className="absolute top-5 left-6 text-2xl md:text-4xl font-bold">Gym</span>
              <Image className="w-full h-full object-cover" src={GymShirt} alt="gym-shirt" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 xl:px-0">
        <div className="w-full max-w-xl mx-auto my-16 relative">
          <h3 className={`${integralCF.className} text-[32px] leading-9 md:leading-normal md:text-5xl uppercase text-left`}>
            Our Happy Customers
          </h3>

          <Carousel
            opts={{
              align: "start",
            }}
            className="static w-full mt-7"
          >
            <CarouselContent>
              {reviewsData.map((data, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="min-h-[186px] md:min-h-[240px] shadow-none">
                      <CardContent className="flex flex-col p-6 gap-2">
                        <div className="flex h-[18.49px] gap-0.5">
                          {renderStars(data.rating)}
                        </div>
                        <div className="flex flex-row gap-2">
                          <h5 className="text-xl font-bold">{data.name}</h5>
                          {data.verified &&
                            <Image src={VerifiedLogo} alt="verified" width={19.5} height={19.5} />
                          }
                        </div>
                        <p className="text-base opacity-60 leading-6">{data.review}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-7 left-[unset] right-8 border-none shadow-none" />
            <CarouselNext className="absolute top-7 right-0 border-none shadow-none" />
          </Carousel>
        </div>
      </div>
    </div>
  )
}