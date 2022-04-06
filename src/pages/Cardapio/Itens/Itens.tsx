import cardapio from "./itens.json";
import Item from "./Item/Item";

export default function Itens() {
  return (
    <div className=" flex flex-wrap w-full pt-8 ">
      {cardapio.map((item, index) => (
        <Item key={index} />
      ))}
    </div>
  );
}
