import type { NextPage } from "next";
import Image from "next/image";

import piscina from "../../public/img/piscina-3d.jpeg";
import Header from "../components/Header";

const About: NextPage = () => {
  return (
    <>
      <Header />
      <div className="container relative mx-auto mt-10 h-auto flex-1  p-5 px-3 py-5 text-center">
        <section>
          <div className="squarepeg text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl">
            Um pouco mais sobre o empreendimento
          </div>
          <div className="container mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between py-5 px-6 md:py-0">
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
        <div className="squarepeg mt-5 text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl">
          Serviços
        </div>
        <section id="piscina" className="flex">
          <div className="container mx-auto mt-2 flex max-w-4xl flex-col items-center justify-between py-5 px-6 md:py-0">
            <div className="squarepeg text-4xl font-semibold">Piscina</div>
            <Image
              className="container mx-auto mt-5 flex max-w-2xl rounded-lg shadow-2xl shadow-gray-900"
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
