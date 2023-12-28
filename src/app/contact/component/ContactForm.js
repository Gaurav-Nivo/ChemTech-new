"use client"

import React, { useRef, useState } from 'react';
import { MultiSelect } from "react-multi-select-component";

// import axios from "axios";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// const MySwal = withReactContent(Swal);
// import baseUrl from "../../utils/baseUrl";


// const alertContent = () => {
//   MySwal.fire({
//     title: "Congratulations!",
//     text: "Your message was successfully send and will back to you soon",
//     icon: "success",
//     timer: 2000,
//     timerProgressBar: true,
//     showConfirmButton: false,
//   });
// };

// // Form initial state
// const INITIAL_STATE = {
//   name: "",
//   email: "",
//   number: "",
//   subject: "",
//   text: "",
// };
const options = [
    { value: 'ambulance', label: 'Ambulance' },
    { value: 'corporate-wellness', label: 'Corporate Wellness' },
    { value: 'diagnostics', label: 'Diagnostics' },
    { value: 'blood-bank', label: 'Blood Bank' },
    { value: 'home-care', label: 'Home Care' },
    { value: 'employment-check-up', label: 'Employment Check Up' },
    { value: 'OPD/IPD-assistance', label: 'OPD/IPD Assistance' },
    { value: 'customize-health-package', label: 'Customize Health Package' },
    { value: 'health-talks-and-webinars', label: 'Health Talks And Webinars' },
];


const ContactForm = () => {
    const [selectedserv, setSelectedserv] = useState([]);
    let service = selectedserv.map(function (val) {
        return val.label;
    }).join(',');



    const Form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();



    };
    // const [contact, setContact] = useState(INITIAL_STATE);

    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setContact((prevState) => ({ ...prevState, [name]: value }));
    //   console.log(contact)
    // };

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   try {
    //     const url = `${baseUrl}/api/contact`;
    //     const { name, email, number, subject, text } = contact;
    //     const payload = { name, email, number, subject, text };
    //     const response = await axios.post(url, payload);
    //     console.log(response);
    //     setContact(INITIAL_STATE);
    //     alertContent();
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // console.log(selectedOption);





    return (
        <>
            <div className="drop-area">
                <div className="container-fluid ">
                    <div className="row" style={{"color":"#00000012"}}>
                        <div className="col-lg-7 p-0">
                            <div className="drop-item drop-img">
                                <div className="drop-left">
                                    <h2>Drop your message for any info or question</h2>


                                    <form ref={Form} onSubmit={sendEmail} >
                                        <div className='row'>
                                            <div className='col-lg-6 col-md-6'>
                                                <div className='form-group'>
                                                    <input required placeholder="Name" type="text" name="user_name" className="form-control" />
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6'>
                                                <div className='form-group'>
                                                    <input required placeholder="Email" type="email" name="user_email" className="form-control" />
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6'>
                                                <div className='form-group'>
                                                    <input required placeholder="Phone" type="text" name="user_phone" className="form-control" />
                                                    <input required placeholder="service" type="hidden" name="user_serv" className="form-control" value={service} />
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6'>
                                                {/* <div className='from-group'>
                                                    <MultiSelect
                                                        name="user_srv"
                                                        options={options}
                                                        value={selectedserv}
                                                        onChange={setSelectedserv}
                                                        labelledBy="Select "
                                                        className='mulit-select'
                                                        placeholder=" Services"
                                                    />
                                                </div> */}
                                            </div>
                                            <div className='form-group'>
                                                <textarea placeholder=" Message" name="message" cols="30"
                                                    rows="6"
                                                    className="form-control" />
                                            </div>
                                            <div className='col-lg-12 col-md-12 col-sm-12'>
                                                <input type="submit" value="Sumbit" className='drop-btn' />
                                            </div>
                                        </div>
                                    </form>

                                    {/* <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Your name"
                            value={contact.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Your email address"
                            value={contact.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="number"
                            className="form-control"
                            value={contact.number}
                            onChange={handleChange}
                            placeholder="Your Phone"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                        <select>
                        <option value={''}>health</option>
                        <option value={''}>health</option>
                        <option value={''}>health</option>
                        <option value={''}>health</option>
                        <option value={''}>health</option>
                        </select>
                        <input
                            type="text"
                            name="services"
                            className="form-control"
                            placeholder="Services"
                            value={contact.subject}
                            onChange={handleChange}
                            required
                            />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <textarea
                            name="text"
                            cols="30"
                            rows="6"
                            className="form-control"
                            placeholder="Your message..."
                            value={contact.text}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <button type="submit" className="drop-btn">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 p-0">
                            <div className="speciality-item speciality-right speciality-right-two speciality-right-three">
                                <img src="/page-contact-us.png" alt="Contact" />

                                {/* <div className="speciality-emergency">
                  <div className="speciality-icon">
                    <i className="icofont-ui-call"></i>
                  </div>

                  <h3>Emergency Call</h3>
                  <p>+07 554 332 322</p>
                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactForm;