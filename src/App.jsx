import { Route, Routes } from "react-router-dom"
import PlayGame from "./Pages/PlayGame"
import WinGame from "./Pages/WinGame"
import Home from "./Pages/Home"

function App() {
  
  return (
    <>
      {/* <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
        <h1 className="mb-8 text-4xl font-bold text-blue-400">Tic Tac Toe Game</h1>
        <TicTacToeBoard />
        </div> */}
      <Routes>
        <Route path="/play" element={<PlayGame />} />
        <Route path="/win" element={<WinGame />} />
        <Route path="*" element={<Home />} />
    </Routes>
    </>
  )
}

export default App
