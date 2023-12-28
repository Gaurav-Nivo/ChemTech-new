'use-client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'

const Product = () => {

const[main , setMain] = useState([])
    const img_path = 'http://localhost/chemtech15-12/chemtech/uploads1/maincat/'
    useEffect(()=>{
        axios.get('http://localhost/chemtech15-12/chemtech/Api/local/mainapi.php')
        .then((response)=>{
            setMain(response.data)
        })
    },[])

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-4 mx-auto">
                    <h2 className='product-title'>Products</h2 >
                    <div className="row "style={{"margin": "20px 0px"}}>
                        {main.map((item) => (
                            <div className="col-md-3 col-sm-12 product-main-div-1"  key={item.id}>
                                <Link href={`/${item.id}`} className='no-underline' >
                                    <div className='product-sub-div'>

                                        <div className="product-images-div " >
                                            <Image height={250} width={250}  className="product-images-image" src={`${img_path}${item.m_img}`} />
                                        </div>
                                        {/* <div className=""> */}
                                            <h2 className="product-title-sub-title">{item.name_mcat} </h2>
                                        {/* </div> */}
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className='text-center 'style={{ "padding":"10px"}}>
                        <a href='/view-all'>
                            <button className='product-view-all' >View All Product</button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product