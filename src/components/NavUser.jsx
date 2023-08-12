// eslint-disable-next-line react/prop-types
const NavUser = ({ position }) => {
  return (
    <div
      className={`px-10 ${
        position == 1 ? "last:flex justify-end" : "fex justify-start"
      }`}
    >
      <div>
        <img
          className="w-[90px] h-[90px] rounded-full"
          src={position ? "/img/Logos-partidas1.png" : "img/foto-usuario.jpeg"}
          alt="Logo User"
        />
      </div>
      <div>
        <h2 className={`text-center p.normal text-white text-[30px]`}>
          {"User"}
        </h2>
      </div>
    </div>
  );
};

export default NavUser;
