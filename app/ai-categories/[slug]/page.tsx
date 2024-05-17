'use client'
import ToolCard from '@/components/ToolCard';
import ToolCard2 from '@/components/ToolCard2';
import { Button } from '@/components/ui/button';
import { getAiTools, getCategory, getCategoryDetailById } from '@/lib/GlobalApi';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Page = ({ params }: any) => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    getCategory().then((resp: { data: { data: any} }) => {
      // Filter the tools list to include only those from the "Productivity" category
      setCategoryList(resp.data.data);
    });
  };

  const [aiToolsList, setAiToolsList] = useState([]);
useEffect(() => {
  params?.slug&&getAiToolsList();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [params?.slug]);

const getAiToolsList = () => {
  getCategoryDetailById(params?.slug).then((resp: { data: { data: any} }) => {
    // Filter the tools list to include only those from the "Productivity" category
    setAiToolsList(resp.data.data);
  });
};
    
  return (
    <section className='max-w-7xl mx-auto px-6 flex  md:flex-row'>
        <aside className='w-[300px]  sticky left-0 px-6 py-10 lg:flex lg:flex-col gap-y-10  hidden'>
            {categoryList.map((category: any, index) => {
                console.log("dc",category)
                return <Button key={index}>
                <Link href={`/ai-categories/${category?.attributes?.slug}`} className='text-xl font-medium' >{category?.attributes?.Title}</Link>
                </Button>
            })}
        </aside>
        <div className='    '>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-8 mt-10">
              {categoryList.map((category: any, index) => {
                console.log("category",category)
                return  <ToolCard2 key={index} cards={category.attributes.ai_tool} />
              })}
              
          </div>
        </div>
    </section>
  )
}

export default Page
  