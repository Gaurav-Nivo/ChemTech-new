"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const TypeOfBottle = () => {
    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(false);


    async function getCategories() {
        setLoading(true);
        const shop_categories_catalog =

            [
                {
                    "text": "Aspirator Bottle",
                    "id": 1
                },
                {
                    "text": "Reagent Bottle",
                    "id": 2
                },
                {
                    "text": "Solution Bottle (Tooled neck)",
                    "id": 3

                },
                {
                    "text": "Relative Density Bottle",
                    "id": 4
                },
                {
                    "text": "Specific Gravity Bottle",
                    "id": 5
                },
                {
                    "text": "Weighing Bottle",
                    "id": 6

                }
            ]
        setCategories(shop_categories_catalog);
        
    }

    useEffect(() => {
        getCategories();
    }, []);


    let categoriesView;
    if (categories && categories.length > 0) {
        const items = categories.map((item) => (
            <li
                key={item.id}
                ><input type='checkbox' />&nbsp;
                <Link  className="location-items" href={"#"}>{item.text}</Link>
            </li>
        ));
        categoriesView = <ul className="ps-list--brands pl-0">{items}</ul>;
    } else {
    }

    return (
        <aside className="widget widget_shop">
            <h4 className="widget-title">Type Of Bottle</h4>
            {categoriesView}
        </aside>
    );  
};

export default TypeOfBottle;