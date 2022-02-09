//FOOTER COMPONENT

//IMPORTING
import React from 'react';
import logo from './img/logo.png'

//FOOTER
const Footer = () => {
    return( 
        <>
        <footer className="block py-4 pt-12 mt-16 bg-gray-300 relative">
            <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden footer-alt -mt-20">
                <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                        <img src={logo} alt="logo" />
                        <h5 className="text-base mt-0 mb-2 text-gray-700">Techno Laboratório LTDA</h5>
                        <p className="text-sm mt-6 text-gray-600 font-semibold">CNPJ 55.555.555/0001-55</p>
                        <p className="text-sm mt-6 text-gray-600 font-semibold">Tel.: (11) 3333-3333 | (11) 9 9999-9999</p>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                            <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">Menu</span>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#home" className="text-gray-700 hover:text-gray-900 font-regular block pb-2 text-sm">Home</a>
                                </li>
                                <li>
                                    <a href="#about" className="text-gray-700 hover:text-gray-900 font-regular block pb-2 text-sm">Sobre nós</a>
                                </li>
                                <li>
                                    <a href="#services" className="text-gray-700 hover:text-gray-900 font-regular block pb-2 text-sm">Serviços</a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-gray-700 hover:text-gray-900 font-regular block pb-2 text-sm">Contato</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                        <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">Siga a gente</span>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://facebook.com" rel="noopener noreferrer" target="_blank" className="text-gray-700 hover:text-gray-900 font-regular block pb-2 text-sm">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://instagram.com" rel="noopener noreferrer" target="_blank" className="text-gray-700 hover:text-gray-900 font-regular block pb-2 text-sm">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com" rel="noopener noreferrer" target="_blank" className="text-gray-700 hover:text-gray-900 font-regular block pb-2 text-sm">Linkedin</a>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
                <hr className="my-4 border-gray-400"></hr>
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-gray-600 font-semibold py-1">
                            TECHLAB 2022 ©
                            <a href="https://github.com" className="text-gray-600 hover:text-gray-900"> Todos os direitos reservados</a>
                            .
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;
