//ARTICLES COMPONENT

//IMPORTING
import React from "react";

//ARTICLES
const Articles = () => {
  return (
    <>
      <section id="services" className="bg-gray-100">
        <div className="body-font container px-5 py-24 mx-auto flex flex-wrap border-t border-gray-200">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <div className="text-4xl lg:text-4xl font-bold title-font mb-2 text-gray-900">
              Nosso Blog
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-base text-gray-800">
              Veja os artigos com informações interessantes sobre exames e análises clínicas.
            </p>
          </div>
          <div className="grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {/*FIRST POST*/}
            <div className="flex flex-col rounded-lg border shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm leading-5 font-medium text-blue-500">
                    <a href="#link" className="hover:underline">
                      Blog
                    </a>
                  </p>
                  <a href="#link" className="block">
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      É necessário realizar exames de sangue periodicamente?
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-500">
                      Os exames de sangue são muito importantes para diagnosticar doenças e problemas graves de saúde, evitando
                      problemas futuros e diagnosticando prematuramente os riscos de agravamento das mesmas.
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#link">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm leading-5 font-medium text-gray-900">
                      <a href="#link" className="hover:underline">
                        Dra. Márcia Yamato
                      </a>
                    </p>
                    <div className="flex text-sm leading-5 text-gray-500">
                      <time dateTime="2020-03-16">Nov 25, 2022</time>
                      <span className="mx-1">&middot;</span>
                      <span>15 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*SECOND POST*/}
            <div className="flex flex-col rounded-lg border shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm leading-5 font-medium text-blue-500">
                    <a href="#link" className="hover:underline">
                      Blog
                    </a>
                  </p>
                  <a href="#link" className="block">
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      É necessário realizar exames de sangue periodicamente?
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-500">
                      Os exames de sangue são muito importantes para diagnosticar doenças e problemas graves de saúde, evitando
                      problemas futuros e diagnosticando prematuramente os riscos de agravamento das mesmas.
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#link">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm leading-5 font-medium text-gray-900">
                      <a href="#link" className="hover:underline">
                        Dra. Márcia Yamato
                      </a>
                    </p>
                    <div className="flex text-sm leading-5 text-gray-500">
                      <time dateTime="2020-03-16">Nov 25, 2022</time>
                      <span className="mx-1">&middot;</span>
                      <span>15 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*THIRD POST*/}
            <div className="flex flex-col rounded-lg border shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm leading-5 font-medium text-blue-500">
                    <a href="#link" className="hover:underline">
                      Blog
                    </a>
                  </p>
                  <a href="#link" className="block">
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      É necessário realizar exames de sangue periodicamente?
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-500">
                      Os exames de sangue são muito importantes para diagnosticar doenças e problemas graves de saúde, evitando
                      problemas futuros e diagnosticando prematuramente os riscos de agravamento das mesmas.
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#link">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm leading-5 font-medium text-gray-900">
                      <a href="#link" className="hover:underline">
                        Dra. Márcia Yamato
                      </a>
                    </p>
                    <div className="flex text-sm leading-5 text-gray-500">
                      <time dateTime="2020-03-16">Nov 25, 2022</time>
                      <span className="mx-1">&middot;</span>
                      <span>15 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
