import { Navbar } from "../components/Navbar";
import Table from "./../components/Table";
import CardUser from "./../components/CardUser";
import MazoCarta from "./../components/MazoCarta";

const Game = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <MazoCarta />
      <div>
        <Table />
        <CardUser />
      </div>
    </div>
  );
};

export default Game;
