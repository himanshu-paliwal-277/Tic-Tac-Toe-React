import TicTacToeBoard from "../Components/TicTacToeBoard/TicTacToeBoard";
// import { ResetGameHandler } from "../Components/TicTacToeCell/TicTacToeCellContainer";

function PlayGame() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-cyan-500 to-blue-500">
            <h1 className="mb-8 text-4xl font-bold text-white">Tic Tac Toe</h1>
            <TicTacToeBoard />
      </div>
    )
}

export default PlayGame;