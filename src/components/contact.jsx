//CONTACT COMPONENT

//IMPORTING
import React from 'react';

//CONTACT
const Contact = () => {
    const iframe = '<iframe style="filter: grayscale(1) contrast(1.2) Opacity(0.6);" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467689.7972713145!2d-46.87550344709628!3d-23.682160367497804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1620579910699!5m2!1spt-BR!2sbr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
    function Iframe(props) {
        return (<div className="absolute inset-0 bg-gray-300" dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
      }
    return(
        <section id="contact" className="text-gray-700 body-font relative">
            <Iframe iframe={iframe} />
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-lg border-gray-200 border">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contato</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Envie sua mensagem</p>
                    <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2 mb-4" placeholder="*Nome" type="name"/>
                    <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2 mb-4" placeholder="*Email" type="email"/>
                    <textarea className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-blue-500 text-base px-4 py-2 mb-4 resize-none" placeholder="*Messagem..."></textarea>
                    <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Enviar</button>
                    <p className="text-xs text-gray-500 mt-3">*Campos obrigatórios.</p>
                </div>
            </div>
    </section>
    )
}

export default Contact;
