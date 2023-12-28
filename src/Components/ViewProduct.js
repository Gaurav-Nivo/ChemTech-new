"use client"
import { useState } from 'react'
import Rating from './Rating'
import { Pagination } from 'antd';
import Link from 'next/link';

const ViewProduct = () => {
    const data = [
        {
            "title": "Flasks Culture Haffkine 4000ML",
            "sale_price": 120,
            "mrp": 160,
            "id": 1,
            "img": "/image-1.png"
        },
        {
            "title": "Flasks Culture Haffkine 4000ML",
            "sale_price": 120,
            "mrp": 160,
            "id": 2,
            "img": "/image-1.png"
        },
        {
            "title": "Flasks Culture Haffkine 4000ML",
            "sale_price": 120,
            "mrp": 160,
            "id": 3,
            "img": "/image-1.png"
        },
        {
            "title": "Flasks Culture Haffkine 4000ML",
            "sale_price": 120,
            "mrp": 160,
            "id": 4,
            "img": "/image-1.png"
        },
        {
            "title": "Flasks Culture Haffkine 4000ML",
            "sale_price": 120,
            "mrp": 160,
            "id": 5,
            "img": "/image-1.png"
        },

    ]

    const [current, setCurrent] = useState(1);
    const [itemsPerPage] = useState(4);

    const indexOfLastItem = current * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItem = data.slice(indexOfFirstItem, indexOfLastItem);

    const handleChange = (page) => {
        setCurrent(page);
    }



    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -m-4">


                        {currentItem.map((item) => (
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full "key={item.id}>
                                <Link href=" /product-description" className='no-underline	'>
                                    <a className="block relative h-58 rounded overflow-hidden">
                                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.img} />
                                    </a>
                                    <div className="mt-2">
                                        <div className='mx-1'>
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-0 ">CATEGORY</h3>
                                            <h2 className="text-gray-900 title-font text-base font-medium mb-0">{item.title}</h2>
                                            <p className="mt-0 mb-0">₹{item.sale_price}</p>
                                            <Rating />
                                        </div>
                                        <a href='#'>
                                            <button className='view-all-cart-btn'>Add To Cart</button>
                                        </a>
                                    </div>
                                </Link>
                            </div>

                        ))}


                    </div>
                </div>
                <Pagination className='text-right mt-4'
                    current={current}
                    total={data.length}
                    pageSize={itemsPerPage}
                    onChange={handleChange}
                    showSizeChanger={false}
                />
            </section>
        </>
    )
}

export default ViewProduct