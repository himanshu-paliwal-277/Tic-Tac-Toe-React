import { useState } from "react";
import TicTacToeCell from "./TicTacToeCell";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import clickSound from "../../assets/clickSound.mp3"


function TicTacToeCellContainer() {
    const navigate = useNavigate();

    let TicTacToeCells = [];
    const [board, setBoard] = useState(new Array(9).fill(null));
    const [playerChance, setPlayerChance] = useState("X");
    const [winner, setWinner] = useState(null);

    function onClickHandler(index) {
        if(board[index] || winner) return;
        const newBoard = [...board];
        newBoard[index] = playerChance;
        playerChance === "X" ? setPlayerChance("O") : setPlayerChance("X");
        setBoard(newBoard);
        if(checkWin(newBoard)) {
            setWinner(playerChance);
            console.log(`Player ${playerChance} is WON the Game`);
            setTimeout(() => {
                navigate("/win", {state: {playerWin: playerChance}});
            }, 1000);
        }
    }

    const resetGame = () => {
        if(!winner) {
            setBoard(Array(9).fill(null));
            setPlayerChance("X");
            setWinner(null);
        }
      };

    function checkWin(GameBoard) {
        const winConditions = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
      
        let win = winConditions.some((condition) =>
          condition.every((index) => GameBoard[index] === playerChance)
        );
        return win;
      }

    for(let i = 0; i < 9; i++) {
        TicTacToeCells.push(<TicTacToeCell key={i} text={board[i]} onClickHandler={() => {
            onClickHandler(i);
            const sound = new Audio(clickSound);
            sound.play();
        }} />);
    }
    
    return (
        <>
            <div className="grid grid-cols-3 gap-[6px] p-4 text-3xl font-semibold text-green-500 rounded-lg ">
                {TicTacToeCells}
            </div> 
            <Button 
                text="Reset" 
                additionStyle="bg-red-400 mt-6" 
                onClickHandler={resetGame}
            />
        </>
    )
}

export default TicTacToeCellContainer;