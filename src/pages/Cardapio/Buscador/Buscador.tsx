import React from "react";
import { CgSearch } from "react-icons/cg";

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export default function Buscador({ busca, setBusca }: Props) {
  return (
    <div className="flex bg-gray-300 rounded-md items-center h-11 justify-between px-3.5 w-96">
      <input
        className="text-gray-900/100 bg-gray-300 rounded-md text-2xl font-black outline-none w-full placeholder:text-gray-400 "
        value={busca}
        placeholder="Busque uma Receita aqui"
        onChange={(evento) => setBusca(evento.target.value)}
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}
