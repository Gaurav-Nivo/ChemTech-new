import React from 'react'
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoMdHeart } from "react-icons/io";


const ModuleProductAction = () => {
    return (
        <>
            <ul className="ps-product__actions">
                <li>
                    <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add To Cart"
                        >
                        <HiMiniShoppingBag className='text-xl text-black'/>
                        {/* <i className="icon-bag2"></i> */}
                    </a>
                </li>
                {/* <li>
                    <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Quick View"
                    onClick={handleShowQuickView}>
                    <i className="icon-eye"></i>
                </a>
                    <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View">
                        <i className="icon-eye"></i>
                    </a>
                </li> */}
                <li>
                    <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to wishlist"
                       >
                        {/* <i className="icon-heart"></i> */}
                        <IoMdHeart className='text-xl text-black'/>
                    </a>
                </li>
                {/* <li>
                    <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        >
                        <i className="icon-chart-bars"></i>
                    </a>
                </li> */}
            </ul>
        </>
    )
}

export default ModuleProductAction