"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { ThemeToggle } from "../themeToogle";


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 
        backdrop-blur-md bg-black/20 border-b border-white/10 rounded-2xl mt-2">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white flex items-center gap-x-2">
        <img src="./logo_1.png" alt="" className="w-10 h-10 object-cover" />
          <span>Tutor Stack</span>
        </Link>

        {/* Nav links (desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <Link href="#features" className="hover:text-purple-400">Features</Link>
          <Link href="#courses" className="hover:text-purple-400">Courses</Link>
          <Link href="#pricing" className="hover:text-purple-400">Pricing</Link>
          <Link href="#contact" className="hover:text-purple-400">Contact</Link>
        </nav>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center gap-3">
            <Link href={"/login"}>
          <Button
            className="hover:text-purple-700 cursor-pointer"
            >
            Sign In
          </Button>
              </Link>
              <Link href={"/signup"}>
          <Button  className="bg-purple-600 hover:bg-purple-700 text-white">
            Get Started
          </Button>
              </Link>
              <ThemeToggle/>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg p-6 text-center space-y-4">
          <Link href="#features" className="block text-white">Features</Link>
          <Link href="#courses" className="block text-white">Courses</Link>
          <Link href="#pricing" className="block text-white">Pricing</Link>
          <Link href="#contact" className="block text-white">Contact</Link>
          <div className="flex flex-col gap-3 mt-4">
            <Link href={"/login"}>
            <Button variant="outline" className="border-white/20 text-white">Sign In</Button>
            </Link>
            <Link href={"/signup"}>
            <Button className="bg-purple-600 text-white">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
