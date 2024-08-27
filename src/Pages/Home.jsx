import { useNavigate } from "react-router-dom";
import Button from "../Components/Button/Button";

function Home() {

    const navigate = useNavigate();

    function handleClick() {
        navigate("./play");
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-sky-400 to-blue-500">
                <h1 className="mb-6 text-2xl font-bold text-white sm:text-4xl">Welcome to Tic Tac Toe</h1>
                <Button text="Play" additionStyle="bg-green-400 font-bold" onClickHandler={handleClick} />
            </div>
        </>
    )
}

export default Home;