"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
function Header() {
  const { user, isSignedIn } = useUser();
  console.log(isSignedIn);
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center">
        <Image src={"/logo.svg"} alt="logo" width={40} height={25} />
        <span className="text-teal-500  font-bold text-xl">Finata</span>
      </div>
      {isSignedIn ? (
        <div className="flex gap-3  items-center">
          <Link href={"/dashboard"}>
            <Button variant="outline" className="rounded-full">
              Dashboard
            </Button>
          </Link>

          <UserButton />
        </div>
      ) : (
        <div className="flex gap-3  items-center">
          <Link href={"/dashboard"}>
            <Button variant="outline" className="rounded-full">
              Dashboard
            </Button>
          </Link>
          <Link href={"/sign-in"}>
            <Button className="rounded-full bg-teal-600">Get Started</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;