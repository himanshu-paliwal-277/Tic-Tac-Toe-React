function TicTacToeCell({text, onClickHandler}) {
    
    return (
        <div 
            className="flex items-center justify-center w-20 h-20 bg-white rounded-lg cursor-pointer bg-opacity-90 hover:bg-opacity-100 active:bg-opacity-90"
            onClick={onClickHandler}
        >
            {text}
        </div>
    )
}

export default TicTacToeCell;