import React, { useEffect, useState } from 'react'

const QuantityCount = () => {

    const [quantity, setQuantity] = useState(1); // Initialize quantity with 1

    const handleIncrement = () => {
        // Increase the quantity by 1
        setQuantity(quantity + 1);

    };

    const handleDecrement = () => {
        // Decrease the quantity by 1, but ensure it doesn't go below 1
        if (quantity >= 1) {
            setQuantity(quantity - 1);
        }
    };

    
    return (
        <div className='d-flex gap-2' >
            <div className="quantity">
                <a href="#" className="quantity__minus" onClick={handleDecrement} ><span>-</span></a>
                <input name="quantity" type="text" className="quantity__input" value={quantity} />
                <a href="#" className="quantity__plus" onClick={handleIncrement}><span>+</span></a>
            </div>
            

        </div>
    )
}

export default QuantityCount