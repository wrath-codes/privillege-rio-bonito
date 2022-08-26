import type { NextPage } from "next";
import Image from "next/image";

import faixada from "../../public/img/faixada-3d.jpeg";
import recepcao from "../../public/img/foto-recepcao.jpeg";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="container relative mx-auto mt-10 h-auto flex-1 p-5 px-3 py-5 text-center">
        <div className="squarepeg text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl">
          Rio Bonito Privillège
        </div>
        <div className="container mx-auto mt-5 flex max-w-4xl items-center justify-between py-5 px-6 md:py-0">
          Venha conhecer o mais novo empreendimento da cidade: RIO BONITO
          PRIVILLEGE. Aqui você pode conhecer nossos apartamentos, comodidades e
          serviços.
        </div>
        <Image
          className="container mx-auto mt-10 flex max-w-2xl rounded-lg shadow-2xl shadow-gray-900"
          src={faixada}
          alt="faixada"
        />
        <Image
          className="container mx-auto mt-10 flex max-w-2xl rounded-lg shadow-2xl shadow-gray-900"
          src={recepcao}
          alt="recepcao"
        />
      </div>
    </>
  );
};

export default Home;
