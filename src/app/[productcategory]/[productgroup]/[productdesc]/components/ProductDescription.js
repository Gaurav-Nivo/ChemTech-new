import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TableProductDesc from './TableProductDesc'
import PopUp from './Popup'
import Link from 'next/link';

function ProductDescription({ productId }) {
    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pCode , setPCode] = useState()
    const [mainCat , setMainCat] = useState('')
    const [subCat , setSubCat] = useState('')
    const imgPath = 'http://localhost/chemtech15-12/chemtech/uploads1/product/'

    useEffect(() => {
        axios.get(`http://localhost/chemtech15-12/chemtech/Api/local/productapi.php?id=${productId}`)
            .then((response) => {
                console.log(response.data , "line 18")
                setProductData(response.data);
                const code = response.data.map(item=>item.p_code)
                setPCode(code)
                const m_cat = response.data.map(item=>item.name_mcat)
                setMainCat(m_cat)
                const s_cat = response.data.map(item=>item.sub_cname)
                setSubCat(s_cat)
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching product data:', error);
                setLoading(false);
            });
    }, [productId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!productData) {
        return <p>Error loading product data.</p>;
    }
    return (
        <>
        <div className='container'>
            <span><strong><Link href='/'>HOME </Link>/ {mainCat}  {subCat ? `/ ${subCat}` : ''}/ {pCode}</strong></span>
        </div>
            <div className='mx-4 mb-2'>
                <div className='row mt-4'>
                    <div className="col-md-12 col-sm-12  ">
                        {loading ? (
                            <h2>Loading...</h2>
                        ) : (
                            <>
                                {
                                    productData.map((item) => (
                                        <div className="row " style={{ "marginTop": "50px" }} key={item.id}>
                                            <div className='col-md-5 col-sm-12 product-desc-image-box'>
                                                <div className='img-description'>
                                                    <img src={`${imgPath}${item.img}`} className='image-description' alt="12" style={{height:'100%'}} />
                                                </div>
                                            </div>
                                            <div className='col-md-7 col-sm-12 '>
                                                <div className='mb-3'>
                                                    <h6 className='title-chem-desc'>{item.sub_cname} - {item.p_code}</h6>
                                                </div>
                                                <div className='mb-4 '>
                                                    <h6 className='title-chem-desc mt-3 mb-0'>{item.heading}</h6>
                                                </div>
                                                <div>
                                                    <p ><strong className='title-chem-desc'>Summary :</strong></p>
                                                    <p className='title-chem-para'>{item.desc}</p>
                                                </div>

                                                {/* <ul className='product-content-description ps-4' >
                                                    <li>Do not use if seal is broken or missing.</li>
                                                    <li>Each flask is marked with an individual serial number and supplied with
                                                        a certificate of calibration traceable to National standards.</li>
                                                    <li>Amber enamel inscriptions.</li>
                                                    <li>Calibrated & certified at 27°C.</li>
                                                </ul> */}
                                            </div>
                                        </div>
                                    ))
                                }
                            </>
                        )
                        }
                    </div>
                    <div className='col-md-12 col-sm-12 mt-5'>
                        <TableProductDesc pCode = {pCode}/>
                        <div className='enquire-div'>
                            <PopUp />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDescription