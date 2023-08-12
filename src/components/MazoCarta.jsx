const MazoCarta = () => {
  return (
    <div className="relative w-32 h-48 bg-gray-200 rounded-lg mt-4">
      <div className="absolute inset-0 bg-green-500 opacity-25 rounded-lg"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white w-24 h-35 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <img src="/img/carta boca abajo.png" alt="Mazo" className=" h-36 rounded-[8%]"></img>
        </div>
      </div>
    </div>
  );
};

export default MazoCarta;
