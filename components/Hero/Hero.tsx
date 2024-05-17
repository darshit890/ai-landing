import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'


const Hero = () => {
  return (
    <section className='px-5 mt-52 flex flex-row justify-between max-w-7xl mx-auto'>
        <div className='flex flex-col gap-y-2'>
            <h1 className='tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-[2.5rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b'>Find your AI Tools</h1>
            <h1 className='tracking-tight text-[2.5rem] lg:text-5xl font-semibold pt-2'>For Business.</h1>
            <p className='text-lg  text-muted-foreground pt-2 w-[40rem]'>Streamline Your Workflow with Our List of AI tools - Find Your Perfect Solution!</p>
            <div className='flex flex-row gap-x-2 items-center mt-3'>
              <Input className='w-[22rem]' placeholder="Type to search for over 1500+ tools..." />
              <Button type="submit">Search</Button>
            </div>
            <div className='grid mt-5 grid-cols-2 gap-y-2 w-[32rem]'>
              <div>
                <Link href={'/ai-categories'}>
                  <Button type="submit" >Explore 1500+ AI Tools <ChevronRight /></Button>
                </Link>
              </div>
              <div>
                <Link href={`/ai-categories`}>
                  <Button type="submit">View All Categories <ChevronRight /></Button>
                </Link>
              </div>
            </div>
        </div>
        <Image className='-mt-28' src={'/home.png'} alt='' width={500} height={500} />
    </section>
  )
}

export default Hero