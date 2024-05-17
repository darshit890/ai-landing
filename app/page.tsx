import BestTools from "@/components/BestTools";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero/Hero";
import Need from "@/components/Need";
import NewTools from "@/components/NewTools";
import TrendingTools from "@/components/TrendingTools";
import Accordion from "@/components/accordion";
import Image from "next/image";




export default async function Home() {
  return (
    <>
      <Hero />
      <BestTools />
      <TrendingTools />
      <Need />
      <NewTools />
      <Blog />
      <Accordion />
    </>
  );
}
