import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Components/Button/Button";

function WinGame() {

    const location = useLocation();

    const playerWin = location.state ?. playerWin;

    const navigate = useNavigate();
    function startNewGame() {
        navigate("/play");
        console.log("new Game")
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-cyan-500 to-blue-500">
            <div className="flex flex-col items-center p-8 font-bold bg-white shadow-xl sm:p-12 shadow-gray-600 rounded-xl">
                <h1 className="text-2xl sm:text-3xl">Congratulations player {playerWin} you Win</h1>
                <Button text="New Game" additionStyle="bg-blue-400 mt-8" onClickHandler={startNewGame} />
            </div>
      </div>
    )
}

export default WinGame;