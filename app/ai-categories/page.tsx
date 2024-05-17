"use client";
import ToolCard from "@/components/ToolCard";
import { Button } from "@/components/ui/button";
import { getAiTools, getCategory } from "@/lib/GlobalApi";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    getCategory().then((resp: { data: { data: any } }) => {
      // Filter the tools list to include only those from the "Productivity" category
      setCategoryList(resp.data.data);
    });
  };

  const [aiToolsList, setAiToolsList] = useState([]);
  useEffect(() => {
    getAiToolsList();
  }, []);

  const getAiToolsList = () => {
    getAiTools().then((resp: { data: { data: any } }) => {
      // Filter the tools list to include only those from the "Productivity" category
      setAiToolsList(resp.data.data);
    });
  };
  return (
    <section className="max-w-7xl mx-auto flex  md:flex-row">
      <aside className="w-[300px]  sticky left-0  py-10 lg:flex lg:flex-col gap-y-10  hidden">
        {categoryList.map((category: any, index) => {
          console.log(category);
          return (
            <Link
              key={index}
              href={`/ai-categories/${category?.attributes?.slug}`}
              className="text-xl font-medium"
            >
              {category?.attributes?.Title}
            </Link>
          );
        })}
      </aside>
      <div className="mb-10 px-5">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-8 mt-10">
          <ToolCard cards={aiToolsList} />
        </div>
      </div>
    </section>
  );
};

export default Page;
