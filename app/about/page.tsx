import React from 'react'
import Image from 'next/image'
import thumb from "@/public/thumb-img.png";

export default function About() {
  return (
    <div className='text-amber-500 text-center text-6'>
          <h1 className="text-green-800 text-6xl text-center"> 
            This is about Page
          </h1>

          <Image placeholder='blur' src={thumb} alt="thumb img" />
        </div>
  )
}
