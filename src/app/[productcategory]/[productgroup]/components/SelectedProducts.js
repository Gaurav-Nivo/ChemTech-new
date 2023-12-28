"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import ModuleProductAction from '../../../../Components/ModuleProductAction';
import Rating from '../../../../Components/Rating';
import Image from 'next/image';
import axios from 'axios';
import { Card } from 'react-bootstrap';

const Product = ({ subCatId, mainCatId }) => {
    const imgPath = 'http://localhost/chemtech15-12/chemtech/uploads1/product/'
    const [productItems, setProductItems] = useState([]);
    const [loadingData, setLoading] = useState(false);
    const [listView, setListView] = useState(true);
    // const [classes, setClasses] = useState(
    //     'col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6'
    // );

    // function handleSetColumns() {
    //     switch (columns) {
    //         case 2:
    //             setClasses('col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6');
    //             return 3;
    //             break;
    //         case 4:
    //             setClasses('col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6');
    //             return 4;
    //             break;
    //         case 6:
    //             setClasses('col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6');
    //             return 6;
    //             break;

    //         default:
    //             setClasses('col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6');
    //     }
    // }


    useEffect(() => {
        getProduct();

    }, []);

    async function getProduct() {
        try {
            const response = await axios.get(`http://localhost/chemtech15-12/chemtech/Api/local/productapi.php?mcat=${mainCatId}&subcat=${subCatId}`);
            const responseData = response.data;

            // debugger;
            setLoading(true);
            if (responseData && responseData.length > 0) {
                setProductItems(responseData);
            } else {
                setProductItems([]);
            }

            setLoading(false);
        } catch (error) {
            console.error('Error fetching product:', error);
            setLoading(false);
            setProductItems([]);
        }
    }


    // let productItemsView;
    // // if (!loading) {
    // if (productItems && productItems.length > 0) {
    //     if (listView) {
    //         const items = productItems.map(( item) => (
    //             <div className={classes} key={item.id} >
    //                 <div className="ps-product">
    //                     <div className="ps-product__thumbnail">
    //                         <Link href={`/${mainCatId}/${subCatId}/${item.id}`}>
    //                             {/* <a>{thumbnailImage(product.main_image_path + product.main_image)}</a> */}
    //                             <p><img alt='product' className='product_image' src={`${imgPath}${item.img}`} /></p>
    //                         </Link>

    //                         {/* {badge(product)} */}
    //                         {/* <ModuleProductAction product={item} /> */}
    //                     </div>
    //                     <div className="ps-product__container">
    //                         <Link href="/product-description" className='no-underline'>
    //                             <p className="ps-product__vendor">{item.heading}</p>
    //                         </Link>
    //                         <div className="ps-product__content">
    //                             {/* <Link href="/product-description" className='no-underline' >
    //                                 <p className="ps-product__title">{item.heading}</p>
    //                             </Link> */}
    //                             {/* {title(product)} */}
    //                             <div className="ps-product__rating d-flex items-center ">
    //                                 {/* <Rating /> */}

    //                             </div>
    //                             {/* {price(product)} */}
    //                         </div>
    //                         <div className="ps-product__content hover">
    //                             {/* {item.product_name} */}



    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         ));
    //         productItemsView = (
    //             <div className="ps-shop-items">
    //                 <div className="row">{items}</div>
    //             </div>
    //         );
    //     } else {
    //         productItemsView = productItems.map((item) => (
    //             <>
    //             <div key={item.id}>
    //             1
    //             </div>
    //             </>
    //         ));
    //     }
    // } else {
    //     productItemsView = <p>No product found.</p>;
    // }
    return (
        // <div>
        //     <div className="ps-shopping__content">{productItemsView}</div>

        // </div>
        <>
            <div className='container'>
                <div className='row'>
                    {
                        productItems.map((items) => (
                            <>
                                <div className='col-md-4 col-sm-6 mb-3'>
                                    <Link href={`/${mainCatId}/${subCatId}/${items.id}`} style={{ textDecoration: 'none' }}>
                                        <Card className="card-container  product-display" border="info">
                                            <div className='wrapper-div mt-2'>                                     
                                            <Card.Img className="card-img" variant="top" src={`${imgPath}${items.img}`} />
                                            </div>
                                            <Card.Body className="card-body">
                                                <Card.Text className="card-text">{items.heading}</Card.Text>
                                                <button className="btn btn-outline-info btn-view">View</button>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Product