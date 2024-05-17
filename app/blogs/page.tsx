'use client'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { getBLog } from '@/lib/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [aiToolsList, setAiToolsList] = useState([]);
  useEffect(() => {
    getAiToolsList();
  }, []);

  const getAiToolsList = () => {
    getBLog().then((resp: { data: { data: any } }) => {
      // Filter the tools list to include only those from the "Productivity" category
      setAiToolsList(resp.data.data);
    });
  };
  return (
    <section className='max-w-7xl mx-auto flex flex-col'>
        <h1 className='from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b text-center mt-10 text-5xl font-semibold tracking-tight'>Blogs</h1>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-4 lg:gap-x-8 my-20">
            {aiToolsList.map((blog: any, index) => {
                return <Link key={index} href={`/blogs/helo-moto`}>
                
                <Card className="w-[277x] h-[425x] ">
                  <CardHeader className="p-3">
                    <Image
                      src={
                        blog?.attributes?.FeaturedImage?.data[0]?.attributes?.formats
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
                    <h1>{blog?.attributes?.Title}</h1>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-muted-foreground line-clamp-5">
                      {blog?.attributes?.Content}
                    </p>
                  </CardFooter>
                </Card>
                </Link>
            })}
        </div>  
    </section>
  )
}

export default Page