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

  return (
    <section className='max-w-7xl mx-auto mt-10'>
      <div className='p-5 py-1 px-10 md:px-28'>
        <div className='flex flex-col '>
          {/* <BlogDetail product={productDetail} /> */}
          <section className='flex flex-col my-10'>
        <h1 className='text-4xl tracking-tighter font-medium text-center'>heklll</h1>
        <Image src={`/l.jpg`} alt='' width={1280} height={500} className='w-[1280px] h-[500px] mt-10 rounded-xl' />
        <p className='text-xl font-normal mt-10'> It is not yet available for personal use and has limited functionality in the public version.
 It may require a lot of training and customization to achieve the desired results.
 It may pose ethical and legal challenges regarding the ownership and originality of the generated content.
 It may reduce the human involvement and creativity in the artistic process.
 It may have technical limitations and bugs that affect the quality and performance of the output.</p>
    </section>
        </div>
      </div>
    </section>
  )
}

export default AiToolsPage