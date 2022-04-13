// import logo from "../../../../assets/logo.svg";
import cardapio from "data/cardapio.json";

type Props = typeof cardapio[0];

export default function Item(props: Props) {
  const { title, description, category, price, serving, size, photo } = props;

  return (
    <div className=" flex w-auto xl:w-1/2 my-8 align-middle divide-y-blue ">
      <div className=" w-32 min-w-max ">
        <img className=" rounded-lg " src={photo} alt={title} />
      </div>
      <div className=" pl-4 align-middle h-40 ">
        <div className="w-full">
          <h2 className=" font-bold text-3xl ">{title}</h2>
          <p className=" font-medium text-xl text-slate-400 ">{description}</p>
        </div>
        <div className="flex flex-wrap h-6 gap-4 font-semibold text-lg ">
          <div
            className={`px-1 py-0.5 text-white ${
              category.label === "Massas"
                ? "bg-red-500 "
                : "bg-white" && category.label === "Carnes"
                  ? "bg-gray-700 "
                  : "bg-white" && category.label === "Veganos"
                    ? "bg-green-600 "
                    : "bg-white" && category.label === "Combos"
                      ? "bg-yellow-600 "
                      : "bg-white"
            }
            `}
          >
            {category.label}
          </div>
          <div className="">{size}g</div>
          <div className="">
            Serve {serving} pessoa{serving === 1 ? "" : "s"}
          </div>
          <div className="">R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
