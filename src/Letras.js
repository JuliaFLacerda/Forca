

const Letras = (props) => {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return(
        <div className="letrascontainer">
            {alfabeto.map((letra) => {
                return(
                    <button 
                    className={props.clicadas.includes(letra.toUpperCase())? "letra clicada" : "letra"} 
                    onClick={props.funçao} 
                    disabled={(props.lose === "venceu" || props.lose === "perdeu" || props.lose==="naocomeçou")?
                true : (props.clicadas.includes(letra.toUpperCase())? true : false)}
                    >{letra.toUpperCase()}</button>
                )
            })}
        </div>
    )
}

export default Letras;