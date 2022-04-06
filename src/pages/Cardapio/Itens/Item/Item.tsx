import logo from "../../../../assets/logo.svg";

export default function Item() {
  return (
    <div className=" flex w-auto xl:w-1/2 my-8 ">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className=" pl-4 ">
        <div className="w-full">
          <h2 className=" font-bold text-3xl ">Titulo do item</h2>
          <p className=" font-medium text-xl text-slate-400 ">
            Descricao do item
          </p>
        </div>
        <div className="flex flex-wrap h-6 gap-4 font-semibold text-lg ">
          <div className="">Massa</div>
          <div className="">400g</div>
          <div className="">Serve 2 Pessoas</div>
          <div className="">R$ 50</div>
        </div>
      </div>
    </div>
  );
}
