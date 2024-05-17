"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { getAiTools } from "@/lib/GlobalApi";

const BestTools = () => {
  const [aiToolsList, setAiToolsList] = useState([]);
  useEffect(() => {
    getAiToolsList();
  }, []);

  const getAiToolsList = () => {
    getAiTools().then((resp) => {
      // Filter the tools list to include only those from the "Productivity" category
      const filteredTools = resp.data.data.filter(
        (tool: { attributes: { categories: { data: any[] } } }) =>
          tool.attributes.categories.data.some(
            (category) => category.attributes.Title.toLowerCase() === "best ai tools"
          )
      );
      setAiToolsList(filteredTools);
    });
  };
  return (
    <section className="max-w-7xl mx-auto mt-40 z-0">
      <div className="flex flex-col">
        <h1 className="text-[2.5rem] lg:text-5xl font-medium tracking-tighter text-center ">
          Worlds Best{" "}
          <span className=" from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b">
            AI Tools
          </span>
        </h1>
        <Carousel className="w-full max-w-7xl mx-auto mt-20">
          <CarouselContent className="-ml-1 gap-x-3">
            {aiToolsList.map((item: any, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/4"
              >
                <Link href={`/ai-tools/helo-moto`}>
                <Card className="w-[277x] h-[425x] ">
                  <CardHeader className="p-3">
                    <Image
                      src={
                        item?.attributes?.images?.data[0]?.attributes?.formats
                          ?.thumbnail?.url
                      }
                      unoptimized={true}
                      alt=""
                      width={300}
                      height={100}
                      className="rounded-lg w-[800] h-[500] aspect-[16/11]"
                    />
                  </CardHeader>
                  <CardContent className="flex items-center justify-between">
                  <div className="flex flex-row gap-x-5 items-center justify-between">
                    <Image
                      src={
                        item?.attributes?.logo.data.attributes.formats
                          .thumbnail.url
                      }
                      unoptimized={true}
                      alt=""
                      className="w-[56px] h-[56px] rounded-full"
                      width={42}
                      height={42}
                    />
                    <div className="flex flex-col">
                      <h1 className="tracking-tight font-medium text-2xl line-clamp-1">
                        {item?.attributes?.Title}
                      </h1>
                      <div className="grid grid-cols-2 gap-x-1">
                        {item?.attributes?.categories.data.map(
                          (item: any) => (
                            <>
                              {item.attributes?.Title === "best ai tools" || item.attributes?.Title === "new ai tools"  || item.attributes?.Title === "Trending Ai Tools" ? (
                                ""
                              ) : (
                                <div key={item.attributes?.id}>
                                  <Button
                                    variant="small"
                                    size="icon1"
                                    className="text-xs "
                                  >
                                    {item.attributes?.Title ===
                                    "new ai tools"
                                      ? ""
                                      : item.attributes?.Title}
                                  </Button>
                                </div>
                              )}
                            </>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
                  <CardFooter>
                    <p className="text-sm text-muted-foreground line-clamp-5">
                      {item?.attributes?.Description}
                    </p>
                  </CardFooter>
                </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default BestTools;

const carousel = [
  {
    title: "Tabextend",
    des: "is more than just a tab manager.",
    tag1: "Productiivty",
    tag2: "Browser Extension",
    img: "/65548610c42c83269ac74f39_20231115T0844-fde1baf6-85db-427f-be66-efad85918703.webp",
  },
  {
    title: "Tabextend",
    des: "is more than just a tab manager.",
    tag1: "Productiivty",
    tag2: "Browser Extension",
    img: "/65548610c42c83269ac74f39_20231115T0844-fde1baf6-85db-427f-be66-efad85918703.webp",
  },
  {
    title: "Tabextend",
    des: "is more than just a tab manager.",
    tag1: "Productiivty",
    tag2: "Browser Extension",
    img: "/65548610c42c83269ac74f39_20231115T0844-fde1baf6-85db-427f-be66-efad85918703.webp",
  },
  {
    title: "Tabextend",
    des: "is more than just a tab manager.",
    tag1: "Productiivty",
    tag2: "Browser Extension",
    img: "/65548610c42c83269ac74f39_20231115T0844-fde1baf6-85db-427f-be66-efad85918703.webp",
  },
  {
    title: "Tabextend",
    des: "is more than just a tab manager.",
    tag1: "Productiivty",
    tag2: "Browser Extension",
    img: "/65548610c42c83269ac74f39_20231115T0844-fde1baf6-85db-427f-be66-efad85918703.webp",
  },
];
