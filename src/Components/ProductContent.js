import React from 'react'

const ProductContent = () => {
    return (
        <>
            <div className="row " style={{"marginTop":"50px"}}>
                <div className='col-md-6 col-sm-12'>
                    <div className='img-description '>
                        <img src="/image-1.png" alt="12" />
                    </div>
                </div>
                <div className='col-md-6 col-sm-12 '>
                    <div className='mb-4 '>
                        <h6 className='title-chem-desc mt-3 mb-0' >VOLUMETRIC FLASK</h6>
                    </div>
                    <div>
                        <p className='title-chem-para'>Class A, Narrow Mouth, Clear, With
                            Individual Calibration Certificate</p>
                    </div>

                    <ul className='product-content-description ps-4' >
                        <li>Do not use if seal is broken or missing.</li>
                        <li>Each flask is marked with individual serial number and supplied with
                            certificate of calibration traceable to National standards.</li>
                        <li>Amber enamel inscriptions.</li>
                        <li>Calibrated & certified at 27°C.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProductContent