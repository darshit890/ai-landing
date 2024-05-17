'use client'
import Image from 'next/image'
import React from 'react'

const BlogDetail = ({ product }:any) => {
  console.log("heyyyy",product)
  return (
    <section className='flex flex-col my-10'>
        <h1 className='text-4xl tracking-tighter font-medium text-center'>{product[0]?.attributes?.Title}</h1>
        <Image src={
            product[0]?.attributes?.
            FeaturedImage?.data[0]?.attributes?.formats?.large
              ?.url} alt='' width={1280} height={500} className='w-[1280px] h-[500px] mt-10' />
        <p className='text-xl font-normal'>{product[0]?.attributes?.Content}</p>
    </section>
  )
}

export default BlogDetail