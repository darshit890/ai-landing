import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

const BlogCard = ({ blog }: any) => {
    console.log("duck",blog)
    console.log("first", blog[0])
  return (
    <Link href={`/blogs/helo-moto`}>
                
              <Card className="w-[277x] h-[425x] ">
                <CardHeader className="p-3">
                  <Image
                    src={
                      blog[0]?.attributes?.FeaturedImage?.data[0]?.attributes?.formats
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
                  <h1>{blog[0]?.attributes?.Title}</h1>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground line-clamp-5">
                    {blog[0]?.attributes?.Content}
                  </p>
                </CardFooter>
              </Card>
              </Link>
  )
}

export default BlogCard