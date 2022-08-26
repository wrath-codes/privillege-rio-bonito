import type { NextPage } from "next";
import Image from "next/image";

import piscina from "../../public/img/piscina-3d.jpeg";
import Header from "../components/Header";

const About: NextPage = () => {
  return (
    <>
      <Header />
      <div className="container relative mx-auto px-3 py-5 flex-1  p-5 text-center mt-10 h-auto">
        <section>
          <div className="squarepeg font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Um pouco mais sobre o empreendimento
          </div>
          <div className="py-5 mt-10 md:py-0 container mx-auto max-w-4xl px-6 flex flex-col items-center justify-between">
            <span className="font-bold">Nosso empreedimento conta com:</span>
            <ul className="">
              <li>
                <a href="#piscina">Piscina adulto com raia </a>
              </li>
              <li>Piscina infantil</li>
              <li>Churrasqueira</li>
              <li>Amplo espaço de lazer</li>
              <li>Salão de festas</li>
            </ul>
          </div>
        </section>
        <div className="squarepeg font-bold text-5xl mt-5 sm:text-6xl md:text-7xl lg:text-8xl">
          Serviços
        </div>
        <section id="piscina" className="flex">
          <div className="py-5 mt-2 md:py-0 container mx-auto max-w-4xl px-6 flex flex-col items-center justify-between">
            <div className="text-4xl squarepeg font-semibold">Piscina</div>
            <Image
              className="rounded-lg mx-auto flex container max-w-2xl shadow-2xl shadow-gray-900 mt-5"
              src={piscina}
              alt="piscina"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
