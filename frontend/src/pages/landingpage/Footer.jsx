import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 dark:bg-slate-900 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
                        <h3 className="text-white text-lg font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M22 5.9c-.7.3-1.5.5-2.4.6a4 4 0 0 0 1.8-2.2c-.8.5-1.6.8-2.6 1a4.1 4.1 0 0 0-6.7 1.2 4 4 0 0 0-.2 2.5 11.7 11.7 0 0 1-8.5-4.3 4 4 0 0 0 1.3 5.4c-.7 0-1.3-.2-1.9-.5a4 4 0 0 0 3.3 4 4.2 4.2 0 0 1-1.9.1 4.1 4.1 0 0 0 3.9 2.8c-1.8 1.3-4 2-6.1 1.7a11.7 11.7 0 0 0 10.7 1A11.5 11.5 0 0 0 20 8.5V8a10 10 0 0 0 2-2.1Z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clipRule="evenodd" />
                                    <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                                <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M13.1 6H15V3h-1.9A4.1 4.1 0 0 0 9 7.1V9H7v3h2v10h3V12h2l.6-3H12V6.6a.6.6 0 0 1 .6-.6h.5Z" clipRule="evenodd" />
                                </svg>

                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M21.7 8c0-.7-.4-1.3-.8-2-.5-.5-1.2-.8-2-.8C16.2 5 12 5 12 5s-4.2 0-7 .2c-.7 0-1.4.3-2 .9-.3.6-.6 1.2-.7 2l-.2 3.1v1.5c0 1.1 0 2.2.2 3.3 0 .7.4 1.3.8 2 .6.5 1.4.8 2.2.8l6.7.2s4.2 0 7-.2c.7 0 1.4-.3 2-.9.3-.5.6-1.2.7-2l.2-3.1v-1.6c0-1 0-2.1-.2-3.2ZM10 14.6V9l5.4 2.8-5.4 2.8Z" clipRule="evenodd" />
                                </svg>

                            </a>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
                        <h3 className="text-white text-lg font-bold mb-4">Address</h3>
                        <p className="text-gray-400 leading-loose">
                            123 Street Name
                            <br />
                            City, State
                            <br />
                            Country
                        </p>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
                        <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;