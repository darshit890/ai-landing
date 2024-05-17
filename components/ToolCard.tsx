import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Link from "next/link";

const ToolCard = ({ cards }: any) => {
  console.log("cards", cards);
  return (
    <>
      {cards.map((card: any, index: number) => {
        console.log("bcs", card);
        return (
          <Link key={index} href={`/ai-tools/${card?.attributes?.slug}`}>
                <Card className="w-[277x] h-[425x] ">
                  <CardHeader className="p-3">
                    <Image
                      src={
                        card?.attributes?.images?.data[0]?.attributes?.formats
                          ?.thumbnail?.url
                      }
                      unoptimized={true}
                      alt=""
                      width={300}
                      height={100}
                      className="rounded-lg w-[800] h-[500] aspect-[16/11]"
                    />
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-row gap-x-5 items-center">
                      <Image
                        src={
                          card?.attributes?.logo?.data?.attributes?.formats
                            ?.thumbnail?.url
                        }
                        unoptimized={true}
                        alt=""
                        className="w-[42px] h-[42px] rounded-full"
                        width={42}
                        height={42}
                      />
                      <div className="flex flex-col">
                        <h1 className="tracking-tight font-medium text-2xl line-clamp-1">
                          {card?.attributes?.Title}
                        </h1>
                        <div className="grid grid-cols-2 gap-x-10">
                          {card?.attributes?.categories.data.map(
                            (card: any) => (
                                  <div key={card.attributes?.id}>
                                    <Button
                                      variant="small"
                                      size="icon1"
                                      className="text-xs "
                                    >
                                      {card.attributes?.Title}
                                    </Button>
                                  </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-muted-foreground line-clamp-5">
                      {card?.attributes?.Description}
                    </p>
                  </CardFooter>
                </Card>
                </Link>
        );
      })}
    </>
  );
};

export default ToolCard;
