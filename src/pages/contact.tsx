import type { NextPage } from "next";
import { useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_phone: "",
    message: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onComeplete = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);

    await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    setFormData({
      from_name: "",
      from_email: "",
      from_phone: "",
      message: "",
    });
  };
  return (
    <>
      <Header />
      <div className="container relative mx-auto mt-10 h-auto flex-1  p-5 px-3 py-5 text-center">
        <div className="container mx-auto mt-2 flex max-w-4xl flex-col items-center justify-between py-5 px-6 md:py-0">
          <form
            className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md"
            onSubmit={onComeplete}
          >
            <div className="squarepeg mb-5 text-4xl font-bold text-gray-700">
              Agende sua visita
            </div>
            <div className="mb-4">
              <label
                htmlFor="from_name"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Nome
              </label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-teal-600"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="from_email"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="from_email"
                id="from_email"
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-teal-600"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="from_phone"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Celular
              </label>
              <input
                type="text"
                name="from_phone"
                id="from_phone"
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-teal-600"
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              className="mx-auto flex items-center justify-between p-2 focus:outline-teal-600"
              name="message"
              id="message"
              cols={30}
              rows={10}
              placeholder="Demonstre seu interesse aqui"
              onChange={handleChange}
              required
            />
            <div className="mt-4 flex items-center justify-around">
              <button
                className="focus:shadow-outline rounded bg-teal-500 py-2 px-4 font-bold text-white hover:bg-teal-700 focus:outline-none"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
