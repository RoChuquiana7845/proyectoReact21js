import "tailwindcss/tailwind.css";
import { useCard } from "../context/CardsContext";

const Table = () => {
  const { deck } = useCard();
  return (
    <div >
        <h2 className="text-center font-serif"> Mazo:{deck}</h2>      
    </div>
  )
}

export default Table
