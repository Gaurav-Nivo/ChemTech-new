import React from 'react'
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";


const Footer = () => {
    return (
        <div className='main-footer'>
            <footer className="text-gray-600 body-font">
                <div className="container footer-main-div">
                    <div className="footer-image">
                        <a href='/'>
                            <img src='/chemtech-logo.svg'></img>
                        </a>
                    </div>
                    <div className="footer-quick-link-main">
                        <div className="footer-quick-link">
                            <h2 className="footer-quick-link-h2">Quick Links</h2>
                            <nav className="footer-quick-link-nav">
                                <hr className='footer-horizontal-line' />
                                <li>
                                    <a href="/" className="main-footer-links">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="main-footer-links">Product</a>
                                </li>
                                <li>
                                    <a href="/about" className="main-footer-links">About</a>
                                </li>
                                <li>
                                    <a href="/contact" className="main-footer-links">Contact Us</a>
                                </li>
                                <li>
                                    <a href="/download-pdf" className="main-footer-links">Download</a>
                                </li>
                                <li>
                                    <a href="/blog" className="main-footer-links">Blog</a>
                                </li>
                                <li>
                                    <a href="/application" className="main-footer-links">Application</a>
                                </li>
                            </nav>
                        </div>

                        <div className="footer-quick-link ">
                            <div className='text-left'>
                                <h2 className="footer-quick-link-h2">Categories</h2>
                                <nav className="footer-quick-link-nav">
                                    <hr className='footer-horizontal-line' />
                                    <li>
                                        <a href='https://www.simsonpharma.com/research-chemicals' className="main-footer-links">Research Chemicals</a>
                                    </li>
                                    <li>
                                        <a href='https://www.simsonpharma.com/new-synthesized-products' className="main-footer-links">New Synthesized Products</a>
                                    </li>
                                </nav>
                            </div>
                            <div className='text-left'>
                                <h2 className="footer-quick-link-h2">Group Companies</h2>
                                <nav className="footer-quick-link-nav">
                                    <hr className='footer-horizontal-line' />
                                    <li>
                                        <a href='https://www.simsonpharma.com/' className="main-footer-links">SimSon Pharma</a>
                                    </li>
                                    <li>
                                        <a href='https://www.simsonchemie.com/' className="main-footer-links">SimSon Chemie</a>
                                    </li>
                                    <li>
                                        <a href='http://www.simsonlabs.com/' className="main-footer-links">SimSon Pharma Services</a>
                                    </li>
                                </nav>
                            </div>
                        </div>
                        <div className="footer-quick-link text-left">
                            <h2 className="footer-quick-link-h2">Legal</h2>
                            <nav className="footer-quick-link-nav">
                                <hr className='footer-horizontal-line' />
                                <li>
                                    <div className='pb-3'>
                                        <p className='main-footer-legal-headers'>Domestic</p>
                                        <div className='d-flex items-center'>
                                            <MdCall className=" footer-icons" />+91-7045543302
                                        </div>
                                        <div className='d-flex items-center'>
                                            <MdEmail className='footer-icons' />info@simsonpharma.com
                                        </div>
                                    </div>
                                </li>
                                <li>
                                <div className='pb-3'>
                                        <p className='main-footer-legal-headers'>International</p>
                                        <div className='d-flex items-center'>
                                            <MdCall className='footer-icons'/>+91-9920862389
                                        </div>
                                        <div className='d-flex items-center'>
                                            <MdEmail className='footer-icons' />exports@simsonpharma.com
                                        </div>
                                    </div>
                                </li>
                                <li>
                                <div className='pb-3'>
                                        <p className='main-footer-legal-headers'>CRO</p>
                                        <div className='d-flex items-center'>
                                            <MdCall className='footer-icons'/>+91-9920862983,<br/>+91-9920862181
                                        </div>
                                        <div className='d-flex items-center'>
                                            <MdEmail className='footer-icons' />cro@simsonpharma.com
                                        </div>
                                    </div>
                                </li>
                                <li>
                                <div className='pb-3'>
                                        <p className='main-footer-legal-headers'>Landline</p>
                                        <div className='d-flex items-center'>
                                            <MdCall className='footer-icons'/>+91-22-40068689 / 40148689
                                        </div>
                                    </div>
                                </li>
                            </nav>
                        </div>

                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">Copyright © 2023 Design & Developed by
                            <a href="https://www.nivotime.com/" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@NivoTimes</a>
                        </p>
                        <div className="footer-social-icons">
                            <a className="text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer