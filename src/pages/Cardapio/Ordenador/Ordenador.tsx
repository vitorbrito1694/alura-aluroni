import React, { useState } from "react";
import opcoes from "./opcoes.json";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

type Props = {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
};

export default function Ordenador({ ordenador, setOrdenador }: Props) {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador =
    ordenador && opcoes.find((opcao) => opcao.value === ordenador)?.nome;
  return (
    <button
      className={`flex items-center  border-0 rounded-tr shadow-md rounded-tl text-base font-bold h-10 justify-between w-60 px-10 relative mt-4 md:mt-0 ${
        ordenador !== "" ? "bg-blue-600 text-white" : "bg-slate-300"
      }`}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>{nomeOrdenador || "Ordenar Por"}</span>
      {aberto ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={` absolute left-0 flex-col top-full w-full active:flex ${
          aberto ? "flex" : "hidden"
        } `}
      >
        {opcoes.map((opcao) => (
          <div
            className=" items-center bg-slate-300 border-t-2 box-border text-black flex h-10 justify-center active:bg-blue-600 active:cursor-pointer active:text-white hover:bg-blue-600 hover:text-white "
            onClick={() => setOrdenador(opcao.value)}
            key={opcao.value}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
