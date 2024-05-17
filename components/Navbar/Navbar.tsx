import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { ModeToggle } from '../theme-toggle'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <section className='flex justify-between items-center h-16 fixed top-0 w-full dark:border-gray-700 border-b px-5 dark:bg-background z-10'>
      <Link href={'/'}>
        <h1 className='text-2xl font-semibold tracking-tight'>Brain<span className='text-primary'>wave</span></h1>
      </Link>
        <div className='flex flex-row justify-between items-center gap-x-10'>
          <div className='hidden lg:flex flex-row items-center gap-x-5'>
            {navItems.map((nav) => (
              <Link key={nav.name} href={nav.link} className='font-medium'>
                {nav.name}
              </Link>
            ))}
          </div>
          <div className='flex flex-row items-center justify-between gap-x-3'>
            <Button>
              Get in Touch
            </Button>
            <ModeToggle />
            <div className='block lg:hidden'>
              <MobileNav />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Navbar

const navItems = [
  {
    name: 'AI Tools Categories',
    link: '/ai-categories',
  },
  {
    name: 'Free Ai Tools',
    link: '/free-ai-tools',
  },
  {
    name: 'Hot Now',
    link: '/hot-now',
  },
  {
    name: 'Submit AI Tools',
    link: '/submit-ai-tools',
  },
]
