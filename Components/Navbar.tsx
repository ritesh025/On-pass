"use client";
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import toast from "react-hot-toast";

import { Button } from "@/Components/ui/button";
import { SignIn, SignInButton } from "@clerk/nextjs";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    toast.success("Theme Changed");
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <nav className="flex justify-between items-center px-4 h-16 bg-primary tracking-wide">
      <span className="font-bold text-3xl subpixel-antialiased font-stretch-expanded text-primary-foreground ">
        On-Pass
      </span>
      <ul className="flex gap-5 items-center justify-start text-primary-foreground ">
        <li className="font-bold text-lg tracking-wider ">Home</li>
        <br />
        <li className="font-bold text-lg">About</li>
        <br />
        <li className="font-bold text-lg">Services</li>
      </ul>
      <div className="flex gap-2 justify-center items-center">
        <Button variant="outline" size="icon" onClick={toggleTheme}>
          {theme === "dark" ? (
            <Moon className="h-[1.2rem] w-[1.2rem] text-white-500" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>

        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
