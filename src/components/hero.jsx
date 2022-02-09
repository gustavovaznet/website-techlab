//HERO COMPONENT

//IMPORTING
import React from 'react';
import HeroImg from './img/heroimg.jpg';

//HERO
const Hero = () => {
    return(
        <div id="home" className="flex bg-white h-700">
          <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
              <h2 className="text-6xl lg:text-6xl font-bold leading-tight text-left">
                Tecnologia em Análises Clínicas.
              </h2>
              <div className="w-20 h-2 bg-blue-600 my-4"></div>
              <p className="mt-6 text-sm text-gray-500 md:text-base text-left">
                Usamos o que está disponível de mais moderno no mercado em termos de tecnologia para aplicação em exames laboratorias,
                ainda contamos com com os melhores e mais completos profissionais do mercado com vasta experiência.
              </p>
              <div className="flex justify-start mt-6">
                <a
                  href={"#about"}
                  className="px-4 py-3 bg-blue-600 text-gray-200 text-s font-semibold rounded hover:bg-blue-800"
                >
                  Saiba Mais
                </a>
                <a
                  href={"#services"}
                  className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-s font-semibold rounded hover:bg-gray-400"
                >
                  Nosso Blog
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2 polygon">
            <div
              className="h-full object-cover"
              style={{
                backgroundImage: `url(${HeroImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="h-full bg-black opacity-25"></div>
            </div>
          </div>
        </div>
    )
}

export default Hero;
