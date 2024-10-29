import React from 'react';
import { Fisioterapeuta } from "./../../assets/data/Fisios";
import CartadeFisios from "./../../components/Fisioterapeutas/CartadeFisios";

const Doctores = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center ">
          <h2 className="heading">Encuentra un fisioterapeuta</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#996EE2] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Busca tu fisioterapeuta"
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md">Buscar</button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="heading text-center my-8  text-[23px]">Para contactarte directamente con nuestros especialistas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Fisioterapeuta.map((Fisio) => (
              <CartadeFisios key={Fisio.id} Fisio={Fisio} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctores;
