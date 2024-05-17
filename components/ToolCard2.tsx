import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import Link from 'next/link'

const ToolCard2 = ({ cards }: any) => {
  return (
    <>
    <Link href={`/ai-tools/${cards?.data?.attributes?.slug}`}>
        <Card className="w-[277x] h-[425x] ">
          <CardHeader className="p-3">
            <Image
              src={
                cards?.attributes?.images?.data[0]?.attributes?.formats
                  ?.large?.url
              }
              unoptimized={true}
              alt=""
              width={300}
              height={100}
              className="rounded-lg w-[800] h-[500] aspect-[16/11]"
            />
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div className="flex flex-row gap-x-5 items-center">
              <Image
                src={
                  cards?.attributes?.logo.data[0]?.attributes.formats
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
                  {cards?.data.attributes?.Title}
                </h1>
                <div className="grid grid-cols-2 gap-x-1">
                  {cards?.data.attributes?.categories.data.map(
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
              {cards?.data.attributes?.Description}
            </p>
          </CardFooter>
        </Card>
      </Link>
              </>
  )
}

export default ToolCard2