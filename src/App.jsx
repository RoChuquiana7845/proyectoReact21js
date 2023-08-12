import { CardsProvider } from "./context/CardsContext";
import Game from "./pages/Game";

function App() { 
    return (
        <>
            <CardsProvider>
                <Game/>
            </CardsProvider>
        </>
    )
}

export default App;