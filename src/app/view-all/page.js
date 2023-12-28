"use client"
import React, { useEffect, useState } from 'react'
import TypeOfBottle from '../view-all/Components/Filters/TypeOfBottle'
import TypeOfClosure from '../view-all/Components/Filters/TypeOfClosure'
import TypeOfMouth from '../view-all/Components/Filters/TypeOfMouth'
import Capacity from '../view-all/Components/Filters/Capacity'
import LabItems from '../view-all/Components/LabItemsViewAll'


const ViewAll = () => {
    const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }
    return (
        <>
            <div className="ps-page--shop">
                <div className="ps-container mt-5">
                    <div className="ps-layout--shop row">
                        <div className="ps-layout__left col-sm-12 col-md-3 ">
                            <TypeOfBottle />
                            <TypeOfClosure />
                            <TypeOfMouth />
                            <Capacity />
                            {/* <WidgetShopFilterByPriceRange /> */}
                        </div>   
                        <div className="ps-layout__right col-sm-12 col-md-9">
                            <LabItems/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewAll