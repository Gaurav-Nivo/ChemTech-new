"use client"
import { useEffect } from "react";
import Capacity from "../../view-all/Components/Filters/Capacity";
import TypeOfBottle from "../../view-all/Components/Filters/TypeOfBottle";
import TypeOfClosure from "../../view-all/Components/Filters/TypeOfClosure";
import TypeOfMouth from "../../view-all/Components/Filters/TypeOfMouth";
import Product from "./components/SelectedProducts";



export default function ProductCategory({params}) {
  let mainCatId = params.productcategory
 let subCateId = params.productgroup

useEffect(()=>{
   
},[])
  return (
    <>
      <div className="ps-page--shop">
        <div className="ps-container mt-5">
          <div className="ps-layout--shop row">
            <div className="ps-layout__left col-sm-12 col-md-3 ">
              {/* <TypeOfBottle />
              <TypeOfClosure /> */}
              <TypeOfMouth />
              <Capacity />
              {/* <WidgetShopFilterByPriceRange /> */}
            </div>
            <div className="ps-layout__right col-sm-12 col-md-9"><Product subCatId={subCateId} mainCatId={mainCatId}  /></div>
          </div>
        </div>
      </div>
    </>
  )
}
