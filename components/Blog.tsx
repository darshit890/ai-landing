'use client'
import { getBLog } from '@/lib/GlobalApi';
import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';

const Blog = () => {
    const [aiToolsList, setAiToolsList] = useState([]);
    useEffect(() => {
      getAiToolsList();
    }, []);
  
    const getAiToolsList = () => {
      getBLog().then((resp: { data: { data: any} }) => {
        // Filter the tools list to include only those from the "Productivity" category
        setAiToolsList(resp.data.data);
      });
    };
  return (
    <section className='max-w-7xl mx-auto mt-40 z-0'>
        <div className='flex flex-col'>
            <h1 className="text-[2.5rem] lg:text-5xl font-medium tracking-tighter text-center ">
            Trending{" "}
            <span className=" from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b">
                Blogs
            </span>
            </h1>
            <div className='grid grid-cols-4 gap-x-4 mt-20 gap-y-10'>
                <BlogCard blog={aiToolsList} />
            </div>
        </div>
    </section>
  )
}

export default Blog