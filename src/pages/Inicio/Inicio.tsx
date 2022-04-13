import cardapio from "data/cardapio.json";

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <section>
      <h3 className="text-grey-900 text-5xl py-3">Recomendações da Cozinha</h3>
      <div className=" flex flex-wrap justify-between gap-7 ">
        {pratosRecomendados.map((item) => (
          <div key={item.id} className=" mx-5 ">
            <div className=" w-72 mt-3 ">
              <img
                src={item.photo}
                alt={item.title}
                className=" rounded w-full "
              />
            </div>
            <button className="border-none rounded shadow-md h-10 font-normal text-white bg-orange-600 px-2 text-lg w-full mt-3 hover:cursor-pointer">
              Ver Mais
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
