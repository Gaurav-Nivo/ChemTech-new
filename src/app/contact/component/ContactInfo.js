import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const ContactInfo = () => {
    return (
        <>
            <div className="location-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center location-wrap">
                        <div className="col-sm-6 col-lg-4">
                            <div className="location-item">
                                <i className="icofont-location-pin"><FaLocationDot className="location-item-icon"/></i>
                                <h3>Location</h3>
                                <p>
                                    B-307, Sarita Building, Prabhat Industrial Estate, Western Express Hwy, Dahisar East, Mumbai, Maharashtra 400068                </p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="location-item">
                                <i className="icofont-ui-message"><MdEmail className="location-item-icon"/></i>
                                <h3>Email</h3>
                                <p className="contact-info-p">
                                    info@simsonpharma.com</p>
                                {/* <p>emailexample@name.com</p> */}
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="location-item">
                                <i ><IoMdCall className="location-item-icon"/></i>
                                <h3>Phone</h3>
                                <p className="contact-info-p1">+02240068689</p>
                                {/* <p>+07 5554 3332 322</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactInfo;