import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../../public/logo.svg";
import VisaImage from "../../../public/visa.svg";
import MastercardImage from "../../../public/mastercard.svg";
import PaypalImage from "../../../public/paypal.svg";
import ApplePayImage from "../../../public/apple-pay.svg";
import GooglePayImage from "../../../public/google-pay.svg";
import TwitterLogo from "../../../public/twitter.svg";
import FacebookLogo from "../../../public/facebook.svg";
import InstagramLogo from "../../../public/instagram.svg";
import GitHubLogo from "../../../public/github.svg";
import EmailIcon from "../../../public/email.svg";
import localFont from "next/font/local";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const integralCF = localFont({
  src: "../fonts/integralcf-bold.woff",
});

export default function Footer() {
  return (
    <div className="bg-[#F0F0F0] py-14 mt-40 px-4 xl:px-0">
      <div className="w-full max-w-xl mx-auto">
        <div className="w-full bg-black h-fit md:min-h-[180px] -mt-36 mb-10 rounded-[20px] flex flex-col md:flex-row md:justify-between px-6 py-8 md:py-0 md:px-10 items-center gap-8 md:gap-4 lg:gap-0">
          <div className="lg:max-w-[551px]">
            <h3 className={`${integralCF.className} text-white text-[32px] leading-[35px] lg:text-[40px] uppercase text-left lg:leading-[45px]`}>
              Stay upto date about our latest offers
            </h3>
          </div>
          <div className="w-full md:w-[349px] flex flex-col gap-2.5">
            <div className="relative w-full md:max-w-[577px]">
              <Image src={EmailIcon} alt="icon" className="absolute top-3 left-3.5" />
              <Input
                className="bg-white border-0 rounded-full w-full h-12 pl-12 text-base" 
                placeholder="Enter your email address" 
                style={{ fontSize: '16px' }}
              />
            </div>
            <Button variant="outline" className="rounded-full w-full h-[46px] font-medium px-4 text-base">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap md:justify-between">
          <div className="w-full flex flex-col gap-3 lg:gap-5 lg:max-w-[248px]">
            <Link href="">
              <Image src={LogoImage} alt="logo-image" />
            </Link>
            <p className="text-sm opacity-60">
              We have clothes that suits your style and which you’re proud to wear. From women to men.
            </p>
            <div className="mt-1 md:mt-3 flex flex-row gap-3">
              <div className="w-7 h-7 bg-white rounded-full cursor-pointer border border-gray-300 flex justify-center items-center">
                <Image src={TwitterLogo} alt="twitter-image" />
              </div>
              <div className="w-7 h-7 bg-black rounded-full cursor-pointer border border-gray-300 flex justify-center items-center">
                <Image src={FacebookLogo} alt="facebook-image" />
              </div>
              <div className="w-7 h-7 bg-white rounded-full cursor-pointer border border-gray-300 flex justify-center items-center">
                <Image src={InstagramLogo} alt="instagram-image" />
              </div>
              <div className="w-7 h-7 bg-white rounded-full cursor-pointer border border-gray-300 flex justify-center items-center">
                <Image src={GitHubLogo} alt="github-image" />
              </div>
            </div>
          </div>

          <div className="w-1/2 lg:w-auto flex flex-col gap-3 mt-5 lg:mt-0">
            <h6 className="text-sm md:text-base font-medium uppercase tracking-widest">Company</h6>
            <Link href="" className="opacity-60 text-sm md:text-base">
              About
            </Link>
            <Link href="" className="opacity-60 text-sm md:text-base">
              Features
            </Link>
            <Link href="" className="opacity-60 text-sm md:text-base">
              Works
            </Link>
            <Link href="" className="opacity-60 text-sm md:text-base">
              Career
            </Link>
          </div>

          <div className="w-1/2 lg:w-auto flex flex-col gap-3 mt-5 lg:mt-0">
            <h6 className="text-sm md:text-base font-medium uppercase tracking-widest">Help</h6>
            <Link href="" className="opacity-60 text-sm md:text-base">
              Customer Support
            </Link>
            <Link href="" className="opacity-60 text-sm md:text-base">
              Delivery Details
            </Link>
            <Link href="" className="opacity-60 text-sm md:text-base">
              Terms & Conditions
            </Link>
            <Link href="" className="opacity-60 text-sm md:text-base">
              Privacy Policy
            </Link>
          </div>

          <div className="w-1/2 lg:w-auto flex flex-col gap-3 mt-5 lg:mt-0">
            <h6 className="text-sm md:text-base font-medium uppercase tracking-widest">FAQ</h6>
            <Link href="" className="opacity-60 text-sm md:text-base">
              Account
            </Link>
            <Link href="" className="opacity-60 text-sm md:text-base">
              Manage Deliveries
            </Link>
            <Link href="" className="opacity-60 text-sm md:text-base">
              Orders
            </Link>
            <Link href="" className="opacity-60 text-sm md:text-base">
              Payments
            </Link>
          </div>

          <div className="w-1/2 lg:w-auto flex flex-col gap-3 mt-5 lg:mt-0">
            <h6 className="text-sm md:text-base font-medium uppercase tracking-widest">Resources</h6>
            <Link href="" className="opacity-60 text-sm md:text-base">
              Free eBooks
            </Link>
            <Link href="" className="opacity-60 text-sm md:text-base">
              Development Tutorial
            </Link>
            <Link href="" className="opacity-60 text-sm md:text-base">
              How to - Blog
            </Link>
            <Link href="" className="opacity-60 text-sm md:text-base">
              Youtube Playlist
            </Link>
          </div>
        </div>
        <hr className="mt-10 mb-5" />
        <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0">
          <div>
            <p className="text-sm opacity-60 text-center md:text-left">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
          </div>
          <div className="flex justify-center md:justify-between gap-2.5">
            <div className="p-2 bg-white rounded flex justify-center items-center">
              <Image src={VisaImage} alt="visa" />
            </div>
            <div className="p-2 bg-white rounded flex justify-center items-center">
              <Image src={MastercardImage} alt="mastercard" />
            </div>
            <div className="p-2 bg-white rounded flex justify-center items-center">
              <Image src={PaypalImage} alt="paypal" />
            </div>
            <div className="p-2 bg-white rounded flex justify-center items-center">
              <Image src={ApplePayImage} alt="applepay" />
            </div>
            <div className="p-2 bg-white rounded flex justify-center items-center">
              <Image src={GooglePayImage} alt="googlepay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}