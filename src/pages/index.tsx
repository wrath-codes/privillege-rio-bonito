import type { NextPage } from "next";
import Image from "next/image";

import faixada from "../../public/img/faixada-3d.jpeg";
import recepcao from "../../public/img/foto-recepcao.jpeg";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="container relative mx-auto px-3 py-5 flex-1  p-5 text-center mt-10 h-auto">
        <div className="squarepeg font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          Rio Bonito Privillège
        </div>
        <div className="py-5 mt-5 md:py-0 container mx-auto max-w-4xl px-6 flex items-center justify-between">
          Venha conhecer o mais novo empreendimento da cidade: RIO BONITO
          PRIVILLEGE. Aqui você pode conhecer nossos apartamentos, comodidades e
          serviços.
        </div>
        <Image
          className="rounded-lg mx-auto flex container max-w-2xl shadow-2xl shadow-gray-900 mt-10"
          src={faixada}
          alt="faixada"
        />
        <Image
          className="rounded-lg mx-auto flex container max-w-2xl shadow-2xl shadow-gray-900 mt-10"
          src={recepcao}
          alt="recepcao"
        />
      </div>
    </>
  );
};

export default Home;
