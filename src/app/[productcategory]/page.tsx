"use client"
import { useEffect } from "react";
import { AllCategory } from "./components/AllCategory"

export default function ProductCategory({ params }) {
  let pCatId=params.productcategory;
  useEffect(()=>{
    
  }, [])
  return (
    <>
      <div>
        <AllCategory {...pCatId=pCatId} />
      </div>
    </>
  )
}
