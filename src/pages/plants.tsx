import type { NextPage } from "next";
import Image from "next/image";

import plantaCobertura from "../../public/img/planta-cobertura.jpeg";
import plantaPadrao from "../../public/img/planta-padrao.jpeg";
import Header from "../components/Header";

const Plants: NextPage = () => {
  return (
    <>
      <Header />
      <div className="container relative mx-auto mt-10 h-auto flex-1  p-5 px-3 py-5 text-center">
        <div className="squarepeg text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl">
          Plantas
        </div>
        <section className="mt-10 flex">
          <div className="container mx-auto mt-2 flex max-w-4xl flex-col items-center justify-between py-5 px-6 md:py-0">
            <div className="squarepeg text-4xl font-semibold">
              Planta Padrão
            </div>
            <Image
              className="container mx-auto mt-5 flex max-w-2xl rounded-lg shadow-lg shadow-gray-900"
              src={plantaPadrao}
              alt="plantaPadrao"
            />
            <div className="row text-md mt-5 flex justify-between text-left">
              20 Unidades de 98m² <br />
              2 Suítes <br />
              Dependências completas <br />
              Ampla Varanda <br />
              2 Vagas de Garagem <br />
            </div>
          </div>
        </section>
        <section className="mt-15 flex">
          <div className="container mx-auto mt-2 flex max-w-4xl flex-col items-center justify-between py-5 px-6 md:py-0">
            <div className="squarepeg text-4xl font-semibold">
              Planta Duplex
            </div>
            <Image
              className="container mx-auto mt-5 flex max-w-2xl rounded-lg shadow-lg shadow-gray-900"
              src={plantaCobertura}
              alt="plantaCobertura"
            />
            <div className="row text-md mt-5 flex justify-between text-left">
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
