import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import Image from 'next/image';

const ProductDescription = ({ product }: any) => {
    // console.log(product.attributes.Description)
  return (
    <section className='mt-10 flex flex-col gap-y-5'>
        <p className='pt-5'>{product[0]?.attributes?.Description}</p>
        <Image src={
            product[0]?.attributes?.images?.data[1]?.attributes?.formats?.large
              ?.url} alt='' width={500} height={500} />
        <div className='flex flex-col gap-y-5'>
            <h1 className=' tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-[2.5rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b'>Features</h1>
            <p className='pt-5'>{product[0]?.attributes?.Features}</p>
        </div>
        <Image src={
            product[0]?.attributes?.images?.data[2]?.attributes?.formats?.large
              ?.url} alt='' width={500} height={500} />
        <div className='flex flex-col gap-y-5'>
            <h1 className=' tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-[2.5rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b'>Benefits</h1>
            <p className='pt-5'>{product[0]?.attributes?.Benefits}</p>
        </div>
        <Image src={
            product[0]?.attributes?.images?.data[3]?.attributes?.formats?.large
              ?.url} alt='' width={500} height={500} />
        <div className='flex flex-col gap-y-5 mb-10'>
            <h1 className=' tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-[2.5rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b'>Limitations</h1>
            <p className='pt-5'>{product[0]?.attributes?.Limitations}</p>
        </div>
    </section>
  )
}

export default ProductDescription