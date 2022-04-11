import { ReactComponent as Logo } from "assets/logo.svg";
import Buscador from "./Buscador/Buscador";
import { useState } from "react";
import background from "assets/cardapio/header.png";
import Filtros from "./Filtros/Filtros";
import Ordenador from "pages/Ordenador/Ordenador";
import Itens from "./Itens/Itens";

var backgroundImg = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");
  return (
    <main>
      <nav className=" py-3 px-6 lg:px-40 ">
        <Logo />
      </nav>
      <header
        className="flex py-0 px-6 lg:px-40 h-56 lg:h-72 items-center "
        style={backgroundImg}
      >
        <div className=" text-white text-5xl lg:text-7xl  ">
          A casa do código <br /> e da massa
        </div>
      </header>
      <section className=" px-6 lg:px-40 ">
        <h3 className=" text-grey-900 text-5xl py-3 ">Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className="flex flex-wrap my-5 justify-between ">
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>
    </main>
  );
}
