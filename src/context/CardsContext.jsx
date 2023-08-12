import { createContext, useContext, useState } from "react";
import { getNameDeck, getInfoCard } from "../services/card";

const cardContext = createContext();

export const useCard = () => {
  const context = useContext(cardContext);
  if (!context) {
    throw new Error("there is not a context in cards");
  }
  return context;
};

// eslint-disable-next-line react/prop-types
export const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState("");
  const [cardphoto, setCardphoto] = useState([]);
  const [cardUser1, setCardUser1] = useState([]);
  const [cardUser2, setCardUser2] = useState([]);
  const [user1points, setUser1Points] = useState(0);
  const [user2points, setUser2Points] = useState(0);
  const [user1CounterWin, setuser1CounterWin] = useState(0);
  const [user2CounterWin, setuser2CounterWin] = useState(0);

  const nameDeck = async () => {
    try {
      const response = await getNameDeck();
      const deck = response.data.deck_id;
      setDeck(deck);
    } catch (error) {
      console.error(error);
    }
  };

  const ValueCard = (value) => { 
    if (value == 'KING' || value == 'JACK' || value =='QUEEN' ) {
      return 10;
    } else if (value == 'ACE') { 
      return 1;
    } else { 
      return Number(value)
    }
  };

  const SumValue = (array) => { 
    const valor = array.reduce((acumulador, actual)=> {
      return acumulador +ValueCard(actual.cardValue);
    }, 0);
    return valor;
  };

  const getCard = async (deck, plantarse=false, numcard=2, init = false) => {
    try {
      const response = await getInfoCard(deck, numcard);
        const cardsImg = [];
        const cartas = [];
        response.data.cards.forEach(card => {
          cardsImg.push(card.image);
          cartas.push({
            cardImg: card.image,
            cardSuit: card.suit,
            cardValue: card.value
          })
        })
        const result = cardsImg.every(img => cardphoto.includes(img));
        if (!result) {
          setCards([...cards, ...cartas]);
          setCardphoto([...cardphoto, ...cardsImg]);
          const carduser2 = cartas.filter((element, index) => { 
            if (index%2 == 0)  {
              return element;
            }
          }) 
          const carduser1 = cartas.filter((element, index)=> { 
            if(index%2 != 0 ) { 
              return element;
            }
          })
          const jugar = Math.floor(Math.random()*3);
          
          if (init || jugar == 2) { 
            setCardUser2([...cardUser2, ...carduser2]);
            const valor = carduser2.reduce((acumulador, actual)=> {
              return acumulador +ValueCard(actual.cardValue);
            }, 0);
            console.log(valor);
            setUser2Points(user2points+valor);
          } 
          if (!plantarse) { 
              setCardUser1([...cardUser1, ...carduser1]);
              setUser1Points(user1points+SumValue(carduser1));
        } else {
          getCard(deck);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const CleanState = () => { 
    setCards([]);
    setCardUser1([]);
    setCardUser2([]);
    setCardphoto([]);
    setUser1Points(0);
    setUser2Points(0);
  }

  const Winner = () => { 
    if (user1points >=21 && user2points >= 21) {
      alert("Empate");
    } else if (user1points >= 21) { 
      alert('Gano el usuario 2');
      setuser2CounterWin(user2CounterWin+1);
      CleanState();
      return;
    } else if (user2points >= 21) { 
      alert('Gano el usuario 1');
      setuser1CounterWin(user1CounterWin+1);
      CleanState();
      return;
    }
}

  const Reiniciar = () => { 
    CleanState();
    setuser1CounterWin(0);
    setuser2CounterWin(0);
  }
  
  return (
    <cardContext.Provider value={{ cards, cardUser1, cardUser2, deck, user1points, user2points, user1CounterWin, user2CounterWin, nameDeck, getCard, Winner, Reiniciar }}>
      {children}
    </cardContext.Provider>
  );
};
