"use client"
import React, { useEffect } from 'react'
import ProductDescription from './components/ProductDescription'


const page = ({params}) => {
    const productId  = params.productdesc
  return (
    <>
    <ProductDescription productId={productId} />
    </>
  )
}

export default page