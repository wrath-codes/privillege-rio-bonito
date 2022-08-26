import type { NextPage } from "next";
import Image from "next/image";

import plantaCobertura from "../../public/img/planta-cobertura.jpeg";
import plantaPadrao from "../../public/img/planta-padrao.jpeg";
import Header from "../components/Header";

const Plants: NextPage = () => {
  return (
    <>
      <Header />
      <div className="container relative mx-auto px-3 py-5 flex-1  p-5 text-center mt-10 h-auto">
        <div className="squarepeg font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          Plantas
        </div>
        <section className="flex mt-10">
          <div className="py-5 mt-2 md:py-0 container mx-auto max-w-4xl px-6 flex flex-col items-center justify-between">
            <div className="text-4xl squarepeg font-semibold">
              Planta Padrão
            </div>
            <Image
              className="rounded-lg mx-auto flex container max-w-2xl shadow-lg shadow-gray-900 mt-5"
              src={plantaPadrao}
              alt="plantaPadrao"
            />
            <div className="flex row justify-between mt-5 text-left text-md">
              20 Unidades de 98m² <br />
              2 Suítes <br />
              Dependências completas <br />
              Ampla Varanda <br />
              2 Vagas de Garagem <br />
            </div>
          </div>
        </section>
        <section className="flex mt-15">
          <div className="py-5 mt-2 md:py-0 container mx-auto max-w-4xl px-6 flex flex-col items-center justify-between">
            <div className="text-4xl squarepeg font-semibold">
              Planta Duplex
            </div>
            <Image
              className="rounded-lg mx-auto flex container max-w-2xl shadow-lg shadow-gray-900 mt-5"
              src={plantaCobertura}
              alt="plantaCobertura"
            />
            <div className="flex row justify-between mt-5 text-left text-md">
              4 Unidades Duplex de 220m² <br />
              3 suítes <br />
              Terraço com espaço para piscina e cozinha gourmet <br />
              3 Vagas de Garagem <br />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Plants;
