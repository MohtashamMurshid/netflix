import Image from "next/image";
import React from "react";
import Hero from "@/public/images/hero.jpg";
import Logo from "@/public/images/Netflix_Logo_RGB.png";
import Input from "../components/Input";
import Button from "../components/Button";

const page = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="relative w-full  min-h-screen ">
        <Image
          src={Hero}
          alt="Hero image description"
          layout="fill"
          objectFit="cover"
          className="w-full h-full "
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black lg:bg-opacity-50 ">
          <Image
            src={Logo}
            alt="Netflix Logo"
            width={200}
            height={200}
            className=""
          ></Image>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center ">
          <nav className="bg-black/70 px-16 py-16 w-1/3 rounded-sm  flex flex-col gap-4">
            <h1 className="text-3xl font-bold mb-4">Sign In</h1>

            <Input type="email" placeholder="Email"></Input>
            <Input type="password" placeholder="Password"></Input>

            <Button label={"Sign In"} color={"red"}></Button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default page;
