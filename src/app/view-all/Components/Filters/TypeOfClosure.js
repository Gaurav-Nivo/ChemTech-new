"use client"

import React, { useEffect, useState } from 'react';

import Link from 'next/link';


const TypeOfClosure = () => {

    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(false);

  

    async function getLocation() {
        setLoading(true);
        const shop_location_catalog =

            [
                {
                    "id":1,
                    "text": "Screw Cap",

                },
                {
                    "id":2,
                    "text": "Glass Stopper",

                },
                {
                    "id":3,
                    "text": "No closure",
                },
                {
                    "id":4,
                    "text": "I/C Stopper",

                },
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
            <h4 className="widget-title">Type Of Closure</h4>
            {locationView}
        </aside>
    );
};

export default TypeOfClosure;