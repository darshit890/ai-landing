"use client";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { getAiToolsDetailById } from "@/lib/GlobalApi";
import BreadCrumb from "@/components/BreadCrumb";
import Image from "next/image";
import ProductBanner from "@/components/ProductBanner";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import ProductDescription from "@/components/ProductDescription";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

const AiToolsPage = ({ params }: any) => {
  return (
    <section className="max-w-7xl mx-auto mt-10">
      <div className="p-5 py-1 px-10 md:px-28">
        {/* <BreadCrumb product={productDetail} /> */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Hello moto</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex flex-col ">
          {/* <ProductBanner product={productDetail} /> */}
          <div className="mt-10">
            <div className="flex flex-row gap-x-4">
              <Image
                src={"/nightfury_3_1024x.webp"}
                unoptimized={true}
                alt=""
                className="w-[56px] h-[56px] rounded-full"
                width={42}
                height={42}
              />
              <div className="flex flex-col">
                <h1 className="tracking-tight font-medium text-2xl line-clamp-1">
                  Hello moto
                </h1>
                <div className="grid grid-cols-4 gap-x-1">
                  <div>
                    <Button variant="small" size="icon1" className="text-xs ">
                      Trending ai tools
                    </Button>
                  </div>
                  <div>
                    <Button variant="small" size="icon1" className="text-xs ">
                      Trending ai tools
                    </Button>
                  </div>
                  <div>
                    <Button variant="small" size="icon1" className="text-xs ">
                      Trending ai tools
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-row justify-between gap-x-10 items-center">
              <Image
                src={"/nightfury_3_1024x.webp"}
                alt=""
                width={500}
                height={500}
                className="rounded-xl w-[500px] h-[300px]"
              />
              <p className="text-lg ">
                Promethean AI is the world&apos;s first artificial intelligence
                that builds virtual worlds. It was developed by a team of
                passionate tinkerers based in Los Angeles, California, who have
                a decade of experience in creating cutting-edge digital
                entertainment. Their goal is to empower creators and stories
                impossible otherwise, and to give every artist the power
              </p>
            </div>
          </div>
          {/* <ProductDescription product={productDetail} /> */}
          <section className="mt-10 flex flex-col gap-y-5 justify-center items-center">
            {/* <Image src={'/nightfury_3_1024x.webp'} alt='' width={500} height={500} /> */}
            <div className="flex flex-col gap-y-5">
              <h1 className=" tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-[2.5rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b text-center">
                Features
              </h1>
              <p className="pt-5">
                Promethean AI: A Revolutionary Tool for Virtual World Creation
                If you are an artist who wants to create stunning virtual
                worlds, you might be interested in Promethean AI, a new
                technology that uses artificial intelligence to assist you in
                the process. Promethean AI is not just a software, but a partner
                that works together with you, learns from your preferences,
                suggests ideas, and handles the tedious and repetitive tasks, so
                you can focus on what&apos;s important: your creativity.
              </p>
            </div>
            <Image
              src={"/nightfury_3_1024x.webp"}
              alt=""
              width={500}
              height={500}
              className="rounded-xl w-[500px] h-[300px] mt-20"
            />
            <div className="flex flex-col gap-y-5">
              <h1 className=" tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-[2.5rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b text-center">
                Benefits
              </h1>
              <p className="pt-5">
                {" "}
                It is a powerful tool that can assist artists in creating
                virtual worlds with artificial intelligence. It can help with
                creative problem solving by suggesting ideas and adapting to
                individual tastes. It can save time and resources by taking on
                mundane and non-creative work. It can empower creators and
                stories that are impossible otherwise. It can be used for
                various purposes such as games, architectural visualization, and
                virtual reality.
              </p>
            </div>
            <Image
              src={"/nightfury_3_1024x.webp"}
              alt=""
              width={500}
              height={500}
              className="rounded-xl w-[500px] h-[300px] mt-20"
            />
            <div className="flex flex-col gap-y-5 mb-10">
              <h1 className=" tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-[2.5rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b text-center">
                Limitations
              </h1>
              <p className="pt-5">
                It is not yet available for personal use and has limited
                functionality in the public version. It may require a lot of
                training and customization to achieve the desired results. It
                may pose ethical and legal challenges regarding the ownership
                and originality of the generated content. It may reduce the
                human involvement and creativity in the artistic process. It may
                have technical limitations and bugs that affect the quality and
                performance of the output.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AiToolsPage;
