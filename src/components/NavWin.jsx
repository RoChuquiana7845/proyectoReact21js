import { useCard } from '../context/CardsContext';

// eslint-disable-next-line react/prop-types
const NavWin = ({ user }) => {
  const { user1CounterWin, user2CounterWin } = useCard();
  return (
    <div className="bg-green-500 text-white font-bold py-5 px-5 rounded mt-4 mx-3">
      <h1 className='text-6xl'>{ user == 1 ? user1CounterWin : user2CounterWin}</h1>
    </div>
  )
}

export default NavWin;
