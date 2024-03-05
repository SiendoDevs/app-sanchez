import React from 'react';

export default function HeroSection() {
  
  return (
    <div className=" bg-[#fff7ed]">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-28">
          <div className='pb-8'>
            <img
              className="mx-auto h-48 lg:h-80 w-auto"
              src="/assets/Logo-Sanchez.svg"
              alt="Sanchez Logo"
            />
          </div>
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-[#31231E] ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Encontrá aquí más información sobre nuestros cortes.{' '}
              <a href="#" className="font-semibold text-[#31231E]">
                <span className="absolute inset-0" aria-hidden="true" />
                Ver Catálogo<span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-[#31231E] sm:text-6xl">
              Carne de Res <br></br> Argentina
            </h1>
            <p className="mt-6 text-lg leading-6 text-[#31231E]">
              Productores y abastecedores de carne vacuna en la provincia de Buenos Aires.
              Atendemos a supermercados, carnicerías, cámaras de distribuidores, mayoristas y minoristas desde 1994.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#31231E] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#4C362F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contactanos
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Ver Productos <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
