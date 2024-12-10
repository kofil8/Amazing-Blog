import { useState } from 'react';
import Image from "./Image";
import { FaWindowClose } from "react-icons/fa";
import { IoLogInSharp } from 'react-icons/io5';
import { ImMenu } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/clerk-react';
const NavBar = () => {
    const [open, setOpen] = useState(false)
    const location = useLocation()
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" w={40} h={40} alt="logo" />
        <span>AmazingBlog</span>
      </Link>
      {/* MOBILE MENU */}
      <div className="flex md:hidden">
        {/* MOBILE MENU ICON */}
        <div className="cursor-pointer text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FaWindowClose /> : <ImMenu />}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen md:h-auto flex flex-col justify-center items-center absolute top-16 transition-all ease-in-out duration-500 gap-8 font-semibold text-xl bg-gray-500 bg-opacity-90
                ${open ? 'left-0' : 'left-[100%]'}`}
        >
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/trending" className="">
            Trending
          </Link>
          <Link to="/most-popular" className="">
            Most Popular
          </Link>
          <Link to="/about" className="">
            About
          </Link>
          <Link
            to={location.pathname === '/register' ? '/login' : '/register'}
            className=""
          >
            <button className="px-4 py-2 rounded-md bg-[#1E40AF] text-white">
              {location.pathname === '/register' ? 'Login' : 'Register'}{' '}
              <IoLogInSharp className="inline ml-2" />
            </button>
          </Link>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-semibold">
        <Link to="/" className="">
          Home
        </Link>
        <Link to="/trending" className="">
          Trending
        </Link>
        <Link to="/most-popular" className="">
          Most Popular
        </Link>
        <Link to="/about" className="">
          About
        </Link>

        <SignedOut>
          <Link
            to={location.pathname === '/register' ? '/login' : '/register'}
            className="text-white"
          >
            <button className="px-4 py-2 rounded-md bg-[#1E40AF] hover:bg-[#2E59A3] transition duration-200">
              {location.pathname === '/register' ? 'Login' : 'Register'}{' '}
              <IoLogInSharp className="inline ml-2" />
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default NavBar


