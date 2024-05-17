import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Need = () => {
  return (
    <section className="max-w-7xl mx-auto mt-40 z-0 border dark:border-gray-700 border-gray-300 rounded-lg ">
      <div className="flex flex-row px-10  mt-5 gap-x-10">
        <Image
          src={"/logo.webp"}
          alt=""
          width={500}
          height={500}
          className="w-[200px] h-[200px] mt-5"
        />
        <div className="mt-10 gap-y-2 flex flex-col">
          <h1 className="font-medium text-3xl tracking-tight">
            Discover the latest trends in the AI world
          </h1>
          <p>
            Discover, save, and stay updated with FindMyAITool - your ultimate
            platform for exploring and managing AI tools. Create an account to
            personalize your experience, store your favorite tools, and receive
            the latest AI updates. Unleash the power of artificial intelligence
            with ease and efficiency
          </p>
          <div className="flex flex-row my-5 px-10 gap-x-16">
            <Link href={`/blog`}>
              <Button className="px-20">Blog</Button>
            </Link>
            <Link href={`/`}>
              <Button className="px-20">News</Button>
            </Link>
            <Link href={"/"}>
              <Button className="px-20">E-Book</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Need;
