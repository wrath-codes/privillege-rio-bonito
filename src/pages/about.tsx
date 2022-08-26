import type { NextPage } from "next";
import Image from "next/image";

import apt_modelo_0 from "../../public/img/image0.jpeg";
import apt_modelo_1 from "../../public/img/image1.jpeg";
import apt_modelo_2 from "../../public/img/image2.jpeg";
import apt_modelo_3 from "../../public/img/image3.jpeg";
import apt_modelo_4 from "../../public/img/image4.jpeg";
import apt_modelo_5 from "../../public/img/image5.jpeg";
import apt_modelo_6 from "../../public/img/image6.jpeg";
import apt_modelo_7 from "../../public/img/image7.jpeg";
import Footer from "../components/Footer";
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
          Veja nosso
        </div>
        <section id="apt_modelo" className="flex">
          <div className="container mx-auto mb-5 mt-2 flex max-w-4xl flex-col items-center justify-between gap-4 py-5 px-6 md:py-0">
            <div className="squarepeg mb-2 text-4xl font-semibold">
              Apartamento Modelo
            </div>
            <Image
              className="container mx-auto mb-5 mt-5 flex max-w-2xl rounded-lg shadow-2xl shadow-gray-900"
              src={apt_modelo_0}
              alt="Foto 0"
            />
            <Image
              className="container mx-auto mb-5 mt-5 flex max-w-2xl rounded-lg shadow-2xl shadow-gray-900"
              src={apt_modelo_1}
              alt="Foto 1"
            />
            <Image
              className="container mx-auto mb-5 mt-5 flex max-w-2xl rounded-lg shadow-2xl shadow-gray-900"
              src={apt_modelo_2}
              alt="Foto 2"
            />
            <Image
              className="container mx-auto mb-5 mt-5 flex max-w-2xl rounded-lg shadow-2xl shadow-gray-900"
              src={apt_modelo_3}
              alt="Foto 3"
            />
            <Image
              className="container mx-auto mb-5 mt-5 flex max-w-2xl rounded-lg shadow-2xl shadow-gray-900"
              src={apt_modelo_4}
              alt="Foto 4"
            />
            <Image
              className="container mx-auto mb-5 mt-5 flex max-w-2xl rounded-lg shadow-2xl shadow-gray-900"
              src={apt_modelo_5}
              alt="Foto 5"
            />
            <Image
              className="container mx-auto mb-5 mt-5 flex max-w-2xl rounded-lg shadow-2xl shadow-gray-900"
              src={apt_modelo_6}
              alt="Foto 6"
            />
            <Image
              className="container mx-auto mb-5 mt-5 flex max-w-2xl rounded-lg shadow-2xl shadow-gray-900"
              src={apt_modelo_7}
              alt="Foto 7"
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
