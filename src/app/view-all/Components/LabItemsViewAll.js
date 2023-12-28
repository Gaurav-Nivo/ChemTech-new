"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import ModuleProductAction from '../../../Components/ModuleProductAction';
import Rating from '../../../Components/Rating';
import Image from 'next/image';

const LabItems = () => {
    const [productItems, setProductItems] = useState([]);
    const [loadingData, setLoading] = useState(false);
    const [listView, setListView] = useState(true);
    const [classes, setClasses] = useState(
        'col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6'
    );

    function handleSetColumns() {
        switch (columns) {
            case 2:
                setClasses('col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6');
                return 3;
                break;
            case 4:
                setClasses('col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6');
                return 4;
                break;
            case 6:
                setClasses('col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6');
                return 6;
                break;

            default:
                setClasses('col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6');
        }
    }


    useEffect(() => {
        getProduct();
    }, []);

    async function getProduct() {
        const responseData = [
            {
                id: "1",
                images: "/image-1.png",
                title: "Gummy",
                product_name: "Flasks Culture Haffkine 4000ML",
                mrp: "499",
                sales_price: "399"
            },
            {
                id: "2",
                images: "/image-1.png ",
                title: "Piles Care",
                product_name: "Dr Vaidya's Piles",
                mrp: "699",
                sales_price: "399"
            },
            {
                id: "3",
                images: "/image-3.jpg",
                product_name: "Heart Tone",
                mrp: "899",
                sales_price: "399"
            },
            {
                id: "4",
                images: "/image-4.jpg",
                title: "Thyroid Tablet",
                product_name: "Ayurvedic Medicine",
                mrp: "399",
                sales_price: "299"

            },
            {
                id: "5",
                images: "/image-1.png",
                title: "Ayurvedic Supplement",
                product_name: "Gynoveda Liver Detox",
                mrp: "999",
                sales_price: "899"
            },
            // {
            //     id: "6",
            //     images: " /image-1.png",
            //     title: "Ayurvedic Medicine",
            //     product_name: "Maharishi Ayurveda",
            //     mrp: "599",
            //     sales_price: "499"
            // },
            // {
            //     id: "7",
            //     images: " /image-1.png",
            //     title: "Sleep & Refresh - 30",
            //     product_name: "Centrum",
            //     mrp: "799",
            //     sales_price: "699"
            // },
            // {
            //     id: "8",
            //     images: " /image-1.png",
            //     title: "INC Swarnaprashan Drops",
            //     product_name: "Swarnaprashan Drops",
            //     mrp: "799",
            //     sales_price: "599"
            // },
            // {
            //     id: "9",
            //     images: " /image-1.png",
            //     title: "24CT Gold Enriched Immunity Booster Drop",
            //     product_name: "Babyorgan",
            //     mrp: "799",
            //     sales_price: "599"
            // },
            // {
            //     id: "10",
            //     images: " /image-1.png",
            //     title: "High Blood Pressure Capsule",
            //     product_name: "Sheopals Hyper Care",
            //     mrp: "799",
            //     sales_price: "599"
            // },
            // {
            //     id: "11",
            //     images: " /image-1.png",
            //     title: "Fish Oil 1000mg",
            //     product_name: "Blackmores Odourless Omega 3",
            //     mrp: "1000",
            //     sales_price: "900"
            // },
            // {
            //     id: "12",
            //     images: " /image-1.png",
            //     title: "Himalaya Arjuna",
            //     product_name: "Arjuna",
            //     mrp: "200",
            //     sales_price: "119"
            // }
        ];
        // debugger;
        setLoading(true);
        if (responseData) {
            setProductItems(responseData);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    let productItemsView;
    // if (!loading) {
    if (productItems && productItems.length > 0) {
        if (listView) {
            const items = productItems.map(( item) => (
                <div className={classes} key={item.id} >
                    <div className="ps-product">
                        <div className="ps-product__thumbnail">
                            <Link href="/product-description">
                                {/* <a>{thumbnailImage(product.main_image_path + product.main_image)}</a> */}
                                <p><img alt='product' src={item.images} /></p>
                            </Link>

                            {/* {badge(product)} */}
                            <ModuleProductAction product={item} />
                        </div>
                        <div className="ps-product__container">
                            <Link href="/product-description" className='no-underline'>
                                <p className="ps-product__vendor">{item.product_name}</p>
                            </Link>
                            <div className="ps-product__content">
                                <Link href="/product-description" className='no-underline' >
                                    <p className="ps-product__title">{item.title}</p>
                                </Link>
                                {/* {title(product)} */}
                                <div className="ps-product__rating d-flex items-center ">
                                    <Rating />
                         
                                </div>
                                <p className="ps-product__price sale">
                                    <span>₹</span>
                                    {(item.sales_price)}
                                    <del className="ml-2">
                                        <span>₹</span>
                                        {(item.mrp)}
                                    </del>
                                </p>
                                {/* {price(product)} */}
                            </div>
                            <div className="ps-product__content hover">
                                {/* {item.product_name} */}

                                <p className="ps-product__price sale">
                                    <span>₹</span>
                                    {(item.sales_price)}
                                    <del className="ml-2">
                                        <span>₹</span>
                                        {(item.mrp)}
                                    </del>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            ));
            productItemsView = (
                <div className="ps-shop-items">
                    <div className="row">{items}</div>
                </div>
            );
        } else {
            productItemsView = productItems.map((item) => (
                <>
                <div key={item.id}>
                1
                </div>
                </>
            ));
        }
    } else {
        productItemsView = <p>No product found.</p>;
    }
    return (
        <div>
            <div className="ps-shopping__content">{productItemsView}</div>

        </div>
    )
}

export default LabItems