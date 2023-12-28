import React from 'react'

const CompanySection = () => {
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container  py-16 mx-auto">
                    <div className=" mx-auto flex flex-wrap">
                        <div className='lg:w-1/3 pt-4'>
                            <img alt="ecommerce" className="object-cover object-center rounded" src="/about-us.jpeg"/>
                        </div>
                        <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className=" text-3xl title-font font-medium mb-3 about-heading">About Us</h1>
                            <div className=" mb-4 text-justify sm:text-xs md:text-sm">
                            <p className=" ">Simson Chemtech, supplied under the brand name Simsil ®, is widely recognized as a leading and trusted supplier for Laboratory Chemicals, Glassware, Plastic ware, Bench Top Laboratory Instruments, HPLC/GC columns and other Chromatography Consumables.
                            </p>
                            <p>
                                We are an ISO 9001:2015 Quality Systems Certified Organization.
                                Simson Chemtech is a group company of Simson Pharma Limited (SPL). A renowned name in the pharmaceutical sector, SPL has been recognised as a complete solution provider in the contract research arena. We are leading manufacturer and supplier of pharmaceutical Reference materials like Drug working standard, Drug impurity standards, Drug metabolites, and Stable Isotope Labelled compounds.
                            </p>
                            <p>
                                We are the front runner in identifying, synthesizing, and qualifying any Unknown impurities. We have scaled up our operations to make the company a holistic solution provider and would be supplying all reference chemicals and materials for research requirements. In short, we are one-stop solutions for Chemical Development, Formulation development, Analytical development, Regulatory services and Laboratory Consumables.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CompanySection