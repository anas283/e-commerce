import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "../../../public/logo.svg";
import CartIcon from "../../../public/cart-icon.svg";
import ProfileIcon from "../../../public/profile-icon.svg";
import CloseIcon from "../../../public/close-icon.svg";
import SearchIcon from "../../../public/search-icon.svg";
import SearcBlackIcon from "../../../public/search-black.svg";
import MenuIcon from "../../../public/menu-icon.svg";
// import ChevronDownIcon from "../../../public/chevron-down-icon.svg";
// import { X } from "lucide-react";

export default function Navbar() {
  return (
    <div>

      <div className="bg-black w-full h-[38px]">
        <div className="max-w-xl relative flex justify-center items-center h-full mx-auto">
          <div className="flex flex-row gap-1">
            <h6 className="text-white text-xs md:text-sm">Sign up and get 20% off on your first order.</h6>
            <Link href="" className="text-white underline text-xs md:text-sm font-semibold underline-offset-4">
              Sign Up Now
            </Link>
          </div>
          <Button className="bg-black p-1 absolute top-0 right-0 hidden md:flex">
            <Image src={CloseIcon} alt="close-icon" />
          </Button>
        </div>
      </div>

      <nav className="bg-white h-16 md:h-24 flex items-center px-4 xl:px-0">
        <div className="w-full max-w-xl mx-auto flex justify-between">
          <div className="flex items-center gap-4">
            <Button className="flex md:hidden p-0" variant="ghost">
              <Image src={MenuIcon} alt="close-icon" />
            </Button>
            <Link href="" className="max-w-[126px] md:max-w-none">
              <Image src={LogoImage} alt="logo-image" />
            </Link>
          </div>
          <div className="hidden md:flex justify-between items-center gap-4">
            <Link href="">Shop</Link>
            <Link href="">On Sale</Link>
            <Link href="">New Arrivals</Link>
            <Link href="">Brands</Link>
          </div>
          <div className="hidden lg:flex relative w-full max-w-[40%] xl:max-w-[577px]">
            <Image src={SearchIcon} alt="icon" className="absolute top-3 left-3.5" />
            <Input 
              className="bg-[#F0F0F0] border-0 rounded-full w-full h-12 pl-12 text-base" 
              placeholder="Search for products..." 
              style={{ fontSize: '16px' }}
            />
          </div>
          <div className="flex justify-between items-center gap-1">
            <Button className="flex lg:hidden p-1" variant="ghost">
              <Image src={SearcBlackIcon} alt="search-icon" className="fill-black" />
            </Button>
            <Button className="p-1" variant="ghost">
              <Image src={CartIcon} alt="cart-icon" />
            </Button>
            <Button className="p-1" variant="ghost">
              <Image src={ProfileIcon} alt="profile-icon" />
            </Button>
          </div>
        </div>
      </nav>

    </div>
  )
}