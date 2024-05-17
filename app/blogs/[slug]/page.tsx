'use client'
import React from 'react'
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getAiToolsDetailById, getBlogDetailById } from '@/lib/GlobalApi';
import BreadCrumb from '@/components/BreadCrumb';
import Image from 'next/image';
import ProductBanner from '@/components/ProductBanner';
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import ProductDescription from '@/components/ProductDescription';
import BlogDetail from '@/components/BlogDetail';


const AiToolsPage = ({ params }: any) => {

  const [productDetail, setProductDetail] = useState()

  useEffect(() => {
    console.log(params?.slug)
    params?.slug&&AiToolsDetailById();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.slug])

  const AiToolsDetailById = () => {
    getBlogDetailById(params?.slug).then((resp: { data: { data: any; }; })=>{
      console.log("helllo", resp.data.data)
      setProductDetail(resp.data.data)
    })
  }
  return (
    <section className='max-w-7xl mx-auto mt-10'>
      <div className='p-5 py-1 px-10 md:px-28'>
        <div className='flex flex-col '>
          <BlogDetail product={productDetail} />
        </div>
      </div>
    </section>
  )
}

export default AiToolsPage