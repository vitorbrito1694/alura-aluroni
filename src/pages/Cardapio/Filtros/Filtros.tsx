import React from "react";
import filtros from "./filtros.json";

type IOpcao = typeof filtros[0];

// Uma outra forma para tipar
// interface Opcao {
//     id: number;
//     label: string;
// }

type IProps = {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function Filtros({ filtro, setFiltro }: IProps) {
  function selecionarFiltro(opcao: IOpcao) {
    if (filtro === opcao.id) return setFiltro(null);
    return setFiltro(opcao.id);
  }

  return (
    <div className=" flex items-center gap-6 ">
      {filtros.map((opcao) => (
        <button
          key={opcao.id}
          className={`bg-slate-300 border-none rounded h-10 font-bold px-2 text-lg hover:cursor-pointer ${
            filtro === opcao.id ? "bg-blue-600 text-white" : ""
          }`}
          onClick={() => selecionarFiltro(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
}
