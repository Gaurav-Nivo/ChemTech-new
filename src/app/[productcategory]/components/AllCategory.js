"use client"
import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { RiH1 } from 'react-icons/ri';
import Product from '../[productgroup]/components/SelectedProducts';
import TypeOfMouth from '../../view-all/Components/Filters/TypeOfMouth';
import Capacity from '../../view-all/Components/Filters/Capacity';

export const AllCategory = (pCatId) => {
    const catid = pCatId[0];
    const [subCat, setSubcat] = useState([])
    const [mainCat, setMainCat] = useState([])
    const [subCatId, setSubCatId] = useState([])
    const [loading, setLoading] = useState(true);

    const img_path = 'http://localhost/chemtech15-12/chemtech/uploads1/subcat/'

    useEffect(() => {
        // console.log(pCatId , "line 16")
        // this api is for calling the sub category  it call with the main category id aka catId
        axios.get(`http://localhost/chemtech15-12/chemtech/Api/local/subapi.php?mcat=${catid}`)
            .then((response) => {
                // console.log(response)
                setSubcat(response.data)
                const subCatIds = response.data.map(item => item.sub_cname);
                setSubCatId(subCatIds);
                setLoading(false);
            })
    }, [])
    // useEffect(() => {
    //     console.log(subCat, "line 25");
    //     console.log(subCatId, "line 27")
    // }, [subCat]);
    useEffect(() => {
        // this api is for calling the main category it is done for displaying some information of main category on sub category page
        axios.get(`http://localhost/chemtech15-12/chemtech/Api/local/mainapi.php?id=${catid}`)    // 
            .then((response) => {
                // console.log(response.data , "line 25")
                setMainCat(response.data)
            })
    }, [])

    return (
        <>

            <section className="text-gray-600 body-font">
                {
                    mainCat.map((item) => (
                        <>
                            <div className='banner-section'>
                                <div className='banner-image'>
                                    <img src={item.bimg} />
                                </div>
                                <div className='container'>
                                    <div className='border-bottom'>
                                        <h2>{item.name_mcat}</h2>
                                    </div>
                                    <div>
                                        <span><strong>{item.m_desc}</strong></span>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }
                {/* <div className="container px-5 py-24 mx-auto"> */}
                    {loading ? (
                        <h2>Loading...</h2>
                    ) : subCatId.length === 0 ? (
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
                                        <div className="ps-layout__right col-sm-12 col-md-9"><Product subCatId={0} mainCatId={catid} /></div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="container px-5 py-24 mx-auto">
                             <div className="flex flex-wrap -m-4">
                            {subCat.map((item) => (
                                <div key={item.id} className="p-4 lg:w-1/4 md:w-1/2 subCategory-box">
                                    <Link className='no-underline' href={`/${catid}/${item.id}`}>
                                        <div className="h-full flex flex-col items-center text-center subcategory-box-img">
                                            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={`${img_path}${item.img}`} />
                                            <div className="w-full">
                                                <h4 className="text-black subcategory-font font-semibold mb-3">{item.sub_cname}</h4>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        </div>
                       
                    )}
                {/* </div> */}
            </section>
        </>
    )
}
