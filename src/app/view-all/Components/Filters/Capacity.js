"use client"

import React, { useEffect, useState } from 'react';

import Link from 'next/link';


const Capacity = () => {

    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(false);

  

    async function getLocation() {
        setLoading(true);
        const shop_location_catalog =

            [
                {
                    "id":1,
                    "text": "5ml",

                },
                {
                    "id":2,
                    "text": "10ml",

                },
                {
                    "id":3,
                    "text": "15ml",
                },
                {
                    "id":4,
                    "text": "20ml",

                },
                {
                    "id":5,
                    "text": "25ml",
                },
                {
                    "id":6,
                    "text": "30ml",

                }
            ]
        setLocation(shop_location_catalog);
        // const responseData = await ProductRepository.getProductCategories();
        // if (responseData) {
        //     setCategories(responseData);
        //     setTimeout(
        //         function () {
        //             setLoading(false);
        //         }.bind(this),
        //         250
        //     );
        // }
    }

    useEffect(() => {
        getLocation();
    }, []);


    // Views
    let locationView;
    // if (!loading) {
    if (location && location.length > 0) {
        const items = location.map((item) => (
            <li key={item.id}>
                   <input type='checkbox' />&nbsp;
                <Link className="location-items"
                href={"#"}>{item.text}</Link>
            </li>
        ));
        locationView = <ul className="ps-list--brands pl-0">{items}</ul>;
    } else {
    }
    // } else {
    //     categoriesView = <p>Loading...</p>;
    // }
    return (
        <aside className="widget widget_shop">
            <h4 className="widget-title">Capacity</h4>
            {locationView}
        </aside>
    );
};

export default  Capacity;