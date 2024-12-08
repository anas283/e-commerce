'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Tshirt1Image from "../../../../../public/t-shirts/t-shirt-1.svg"
import Tshirt2Image from "../../../../../public/t-shirts/t-shirt-2.svg"
import Tshirt3Image from "../../../../../public/t-shirts/t-shirt-3.svg"
import StarFull from "../../../../../public/star-full.svg";
import StarHalf from "../../../../../public/star-half.svg";
import CheckIcon from "../../../../../public/check.svg";
import VerifiedLogo from "../../../../../public/verified.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Minus, Plus, SlidersVertical } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react"
import { reviewsData } from "@/app/data/reviews"
import { Card, CardContent } from "@/components/ui/card"
import { renderStars } from "@/app/helper/render-stars"
import { integralCF } from "@/app/helper/fonts"
import ProductCard from "@/app/components/product-card"
import { mightLikeData } from "@/app/data/might-like"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ShopDetail() {
  const [tshirt, setTshirt] = useState(Tshirt1Image);
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e: any) => {
    setQuantity(e.target.value)
  }

  return (
    <div className="w-full max-w-xl mx-auto border-t pt-5 px-4 xl:px-0">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/men">Men</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>T-shirts</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-5 flex flex-col gap-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full h-[290px] lg:h-[530px] lg:max-w-[444px] rounded-[20px] overflow-hidden order-1 lg:order-2">
              <Image src={tshirt} alt="star" className="object-cover w-full h-full" />
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 order-2 lg:order-1">
              <div className={tshirt === Tshirt1Image ?  `h-[106px] lg:h-[167px] lg:w-[152px] rounded-[20px] overflow-hidden border border-black cursor-pointer`:`h-[106px] lg:h-[167px] lg:w-[152px] rounded-[20px] overflow-hidden cursor-pointer`}
                onClick={() => setTshirt(Tshirt1Image)}
              > 
                <Image src={Tshirt1Image} alt="star" className="object-cover w-full h-full" />
              </div>
              <div className={tshirt === Tshirt2Image ?  `h-[106px] lg:h-[167px] lg:w-[152px] rounded-[20px] overflow-hidden border border-black cursor-pointer`:`h-[106px] lg:h-[167px] lg:w-[152px] rounded-[20px] overflow-hidden cursor-pointer`}
                onClick={() => setTshirt(Tshirt2Image)}
              > 
                <Image src={Tshirt2Image} alt="star" className="object-cover w-full h-full" />
              </div>
              <div className={tshirt === Tshirt3Image ?  `h-[106px] lg:h-[167px] lg:w-[152px] rounded-[20px] overflow-hidden border border-black cursor-pointer`:`h-[106px] lg:h-[167px] lg:w-[152px] rounded-[20px] overflow-hidden cursor-pointer`}
                onClick={() => setTshirt(Tshirt3Image)}
              > 
                <Image src={Tshirt3Image} alt="star" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 divide-y">
            <div className="flex flex-col gap-3">
              <h3 className={`${integralCF.className} w-10/12 text-2xl md:w-full md:text-5xl uppercase`}>
                One life graphic tshirt
              </h3>
              <div className="flex flex-row gap-2.5 items-center">
                <div className="flex h-[18.49px] gap-0.5">
                  <Image src={StarFull} alt="star" width={18.49} height={18.49} />
                  <Image src={StarFull} alt="star" width={18.49} height={18.49} />
                  <Image src={StarFull} alt="star" width={18.49} height={18.49} />
                  <Image src={StarFull} alt="star" width={18.49} height={18.49} />
                  <Image src={StarHalf} alt="star" width={8.79} height={16.72} />
                </div>
                <span className="flex flex-row">
                  <span className="text-sm">4.5/</span>
                  <span className="text-sm opacity-60">5</span>
                </span>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <h5 className="text-2xl font-bold">
                  $260
                </h5>
                <h5 className="text-2xl font-bold opacity-40 line-through">
                  $300
                </h5>
                <span className="w-[58px] h-[28px] bg-[#FF3333]/10 rounded-full text-xs text-[#FF3333] flex justify-center items-center font-medium">
                  -40%
                </span>
              </div>
              <div>
                <p className="opacity-60 text-sm">
                  This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <h6 className="opacity-60 text-sm">
                Select Colors
              </h6>
              <div className="flex flex-row gap-3">
                <div className="w-10 h-10 bg-[#4F4631] rounded-full cursor-pointer flex justify-center items-center">
                  <Image src={CheckIcon} alt="star" width={16.92} height={16.92} />
                </div>
                <div className="w-10 h-10 bg-[#314F4A] rounded-full cursor-pointer flex justify-center items-center"></div>
                <div className="w-10 h-10 bg-[#31344F] rounded-full cursor-pointer flex justify-center items-center"></div>
              </div>
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <h6 className="opacity-60 text-sm">
                Choose Size
              </h6>
              <div className="flex flex-row gap-3">
                <Button variant="secondary" className="bg-[#F0F0F0] text-opacity-60 font-normal rounded-full hover:bg-black hover:text-white">
                  Small
                </Button>
                <Button variant="secondary" className="bg-[#F0F0F0] text-opacity-60 font-normal rounded-full hover:bg-black hover:text-white">
                  Medium
                </Button>
                <Button variant="secondary" className="bg-[#F0F0F0] text-opacity-60 font-normal rounded-full hover:bg-black hover:text-white">
                  Large
                </Button>
                <Button variant="secondary" className="bg-[#F0F0F0] text-opacity-60 font-normal rounded-full hover:bg-black hover:text-white">
                  X-Large
                </Button>
              </div>
            </div>

            <div className="pt-4 grid grid-cols-3 gap-3">
              <div>
                <div className="bg-[#F0F0F0] rounded-full h-11 flex justify-between items-center px-3">
                  <Minus className="cursor-pointer" />
                  <div>
                    <Input 
                      value={quantity} 
                      onChange={handleChange}
                      className="text-sm font-medium border-0 p-0 shadow-none w-4 text-center focus-visible:ring-0" 
                    />
                  </div>
                  <Plus className="cursor-pointer" />
                </div>
              </div>
              <div className="col-span-2">
                <Button className="w-full h-11 rounded-full">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Tabs defaultValue="review" className="w-full">
            <TabsList className="bg-white border-b rounded-none w-full pb-0 justify-between">
              <TabsTrigger value="product" className="px-0">
                Product Details
              </TabsTrigger>
              <TabsTrigger value="review" className="px-0">
                Rating & Reviews
              </TabsTrigger>
              <TabsTrigger value="faqs" className="px-0">
                FAQs
              </TabsTrigger>
            </TabsList>
            <TabsContent value="product">Product</TabsContent>
            <TabsContent value="review">
              <div className="flex flex-col py-3 gap-5">
                <div className="flex justify-between">
                  <div className="flex flex-row items-center gap-2">
                    <h5 className="text-xl font-bold">
                      All Reviews
                    </h5>
                    <h6 className="text-sm opacity-60">
                      (451)
                    </h6>
                  </div>
                  <div className="flex flex-row items-center gap-2 xl:gap-3">
                    <Button variant="secondary" className="rounded-full p-2.5">
                      <SlidersVertical strokeWidth={2.5} />
                    </Button>
                    <Select>
                      <SelectTrigger className="w-[100px] hidden xl:flex bg-[#F0F0F0] border-0 shadow-none rounded-full">
                        <SelectValue placeholder="Latest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="latest">Latest</SelectItem>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="old">Old</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="rounded-full">
                      Write a Review
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {reviewsData.map((data, index) => (
                    <Card key={index} className="min-h-[186px] md:min-h-[240px] shadow-none">
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
                  ))}
                </div>
                <div className="flex justify-center mt-3">
                  <Button variant="outline" className="rounded-full w-[210px] h-[52px] font-medium px-4">
                    View More Reviews
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="faqs">Faqs</TabsContent>
          </Tabs>
        </div>

        <div className="w-full">
          <div className="w-full max-w-xl mx-auto pt-6 px-4 xl:px-0">
            <h3 className={`${integralCF.className} text-[32px] md:text-5xl uppercase text-center`}>
              You might also like
            </h3>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-14 justify-center">
              {mightLikeData.map((data, key) => {
                return (
                  <ProductCard 
                    key={key}
                    data={data} 
                  />
                )
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}