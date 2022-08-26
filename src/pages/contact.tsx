import type { NextPage } from "next";
import { useState } from "react";

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
      <div className="container relative mx-auto px-3 py-5 flex-1  p-5 text-center mt-10 h-auto">
        <div className="py-5 mt-2 md:py-0 container mx-auto max-w-4xl px-6 flex flex-col items-center justify-between">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={onComeplete}
          >
            <div className="text-4xl text-gray-700 mb-5 squarepeg font-bold">
              Agende sua visita
            </div>
            <div className="mb-4">
              <label
                htmlFor="from_name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-teal-600 focus:shadow-outline"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="from_email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="from_email"
                id="from_email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-teal-600 focus:shadow-outline"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="from_phone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Celular
              </label>
              <input
                type="text"
                name="from_phone"
                id="from_phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-teal-600 focus:shadow-outline"
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              className="items-center flex mx-auto p-2 justify-between focus:outline-teal-600"
              name="message"
              id="message"
              cols={30}
              rows={10}
              placeholder="Demonstre seu interesse aqui"
              onChange={handleChange}
              required
            />
            <div className="flex items-center justify-around mt-4">
              <button
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
