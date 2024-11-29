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
    <div className="bg-[#F0F0F0] py-14 mt-40">
      <div className="w-full max-w-xl mx-auto">
        <div className="w-full bg-black min-h-[180px] -mt-36 mb-10 rounded-[20px] flex justify-between px-10 items-center">
          <div className="max-w-[551px]">
            <h3 className={`${integralCF.className} text-white text-[40px] uppercase text-left leading-[45px]`}>
              Stay upto date about our latest offers
            </h3>
          </div>
          <div className="w-[349px] flex flex-col gap-2.5">
            <div className="relative w-full max-w-[577px]">
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

        <div className="flex justify-between">
          <div className="flex flex-col gap-5 max-w-[248px]">
            <Link href="">
              <Image src={LogoImage} alt="logo-image" />
            </Link>
            <p className="text-sm opacity-60">
              We have clothes that suits your style and which you’re proud to wear. From women to men.
            </p>
            <div className="mt-3 flex flex-row gap-3">
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

          <div className="flex flex-col gap-3">
            <h6 className="text-base font-medium uppercase tracking-widest">Company</h6>
            <Link href="" className="opacity-60">
              About
            </Link>
            <Link href="" className="opacity-60">
              Features
            </Link>
            <Link href="" className="opacity-60">
              Works
            </Link>
            <Link href="" className="opacity-60">
              Career
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h6 className="text-base font-medium uppercase tracking-widest">Help</h6>
            <Link href="" className="opacity-60">
              Customer Support
            </Link>
            <Link href="" className="opacity-60">
              Delivery Details
            </Link>
            <Link href="" className="opacity-60">
              Terms & Conditions
            </Link>
            <Link href="" className="opacity-60">
              Privacy Policy
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h6 className="text-base font-medium uppercase tracking-widest">FAQ</h6>
            <Link href="" className="opacity-60">
              Account
            </Link>
            <Link href="" className="opacity-60">
              Manage Deliveries
            </Link>
            <Link href="" className="opacity-60">
              Orders
            </Link>
            <Link href="" className="opacity-60">
              Payments
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h6 className="text-base font-medium uppercase tracking-widest">Resources</h6>
            <Link href="" className="opacity-60">
              Free eBooks
            </Link>
            <Link href="" className="opacity-60">
              Development Tutorial
            </Link>
            <Link href="" className="opacity-60">
              How to - Blog
            </Link>
            <Link href="" className="opacity-60">
              Youtube Playlist
            </Link>
          </div>
        </div>
        <hr className="mt-10 mb-5" />
        <div className="flex justify-between">
          <div>
            <p className="text-sm opacity-60">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
          </div>
          <div className="flex justify-between gap-2.5">
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