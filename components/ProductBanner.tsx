import Image from "next/image";
import React from "react";

const ProductBanner = ({ product }: any) => {
  return (
    <div className="mt-10">
      <div className="flex flex-row gap-x-4">
        <Image
          src={
            product[0]?.attributes?.logo.data[0].attributes.formats.thumbnail.url
          }
          unoptimized={true}
          alt=""
          className="w-[56px] h-[56px] rounded-full"
          width={42}
          height={42}
        />
        <h1 className="tracking-tight font-medium text-2xl line-clamp-1">
          {product[0]?.attributes?.Title}
        </h1>
      </div>
      <div className="mt-10">
        <Image
          src={
            product[0]?.attributes?.images?.data[0]?.attributes?.formats?.large
              ?.url
          }
          alt=""
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default ProductBanner;
