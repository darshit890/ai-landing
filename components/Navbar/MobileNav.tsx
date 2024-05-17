import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/" className="cursor-pointer flex items-center">
          <h1 className='text-2xl font-semibold tracking-tight'>Brain<span className='text-primary'>wave</span></h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                  {sidebarLinks.map((item) => {
                return (
                  <SheetClose asChild key={item.link}>
                    <Link href={item.link} key={item.label}
                    >
                      <p className={cn("text-16 font-semibold text-black-2")}>
                        {item.label}
                      </p>
                    </Link>
                  </SheetClose>
                )
              })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;


const sidebarLinks = [
    {
        label: 'AI Tools Categories',
        link: '/ai-categories',
      },
      {
        label: 'Free Ai Tools',
        link: '/free-ai-tools',
      },
      {
        label: 'Hot Now',
        link: '/hot-now',
      },
      {
        label: 'Submit AI Tools',
        link: '/submit-ai-tools',
      },
]