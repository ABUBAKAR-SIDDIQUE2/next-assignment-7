import React from 'react'
// import Image from 'next/image'

interface Product{
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

async function Home() {

  const res = await fetch('https://fakestoreapi.com/products')
  const products: Product[] = await res.json()

  return (
    <div>

      <h1 className='flex justify-center pt-3 text-8xl text-[#ff7d1a] font-semibold'>FASHION STORE</h1>

      <div className='w-full h-full pl-40 p-16 grid grid-cols-3'>
        {products.map(product => (
          <div key={product.id} className='flex flex-col items-center w-[280px] h-[440px] mb-16 p-4 border border-[#ff7d1a] rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-out hover:shadow-lg hover:shadow-[#ff7d1a]'>
            <img src={product.image} alt="Product Image" className='w-[230px] h-[280px] rounded-2xl shadow-md'/>
            <p className='text-[#ff7d1a] uppercase text-[12px] font-bold mr-auto mt-4'>{product.category}</p>
            <h2 className='w-[250px] h-[30px] text-xl font-semibold mr-auto mt-1 overflow-clip'>{product.title}</h2>
            <p className='text-2xl font-bold text-[#1d2025] mr-auto mt-1'>${product.price}</p>
            <p className='mr-auto font-medium mt-1'>
              <span className='text-yellow-500'>★</span>
              {product.rating.rate} ({product.rating.count})
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Home