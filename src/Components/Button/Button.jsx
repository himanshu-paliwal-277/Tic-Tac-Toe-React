function Button({text, additionStyle = "", onClickHandler}) {
    return (
        <button 
            className={`px-6 py-2 duration-200 text-xl text-white rounded-lg hover:scale-105 active:scale-100 ${additionStyle}`}
            onClick={onClickHandler}
            >
            {text}
        </button>
    )
}

export default Button;