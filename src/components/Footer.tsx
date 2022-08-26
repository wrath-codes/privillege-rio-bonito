import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer footer-center bg-gray-300  pb-5 pt-5 text-slate-800 shadow-md">
          <div className="grid grid-cols-1 py-3 text-center">
            <div className="text-center">
              {" "}
              Contato: <IoLogoWhatsapp size={20} className="ml-2 inline" /> +55
              (21)99921-1119 ou mande uma{" "}
              <Link href="/contact" className="font-semibold text-slate-600">
                mensagem
              </Link>
            </div>
            <p>
              2022 - Copyright &copy; Bem Morar&reg; | Desenvolvido por{" "}
              <span>
                <a
                  className="font-semibold"
                  href="https://github.com/wrath-codes"
                >
                  wrath
                </a>
              </span>
            </p>
            <div className="text-sm text-gray-500">
              Av. Sete de Maio, 348 - Centro, Rio Bonito - RJ, 28800-000
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
