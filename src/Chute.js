
import { useState } from 'react';

const Chute = (props) => {
    const [inputtext, setInputText] = useState("");
      
    function conferencia(e){
        e.preventDefault();
            let palavra = props.palavra.join("");
            if(inputtext != palavra){
                props.setLose("perdeu");
                props.setAcertadas([...props.palavra])
                props.setCounter(6);
            }
            else{
               props.setLose("venceu");
               props.setAcertadas([...props.palavra])
            }
      
    }

    function mudança(e){
        let str = e.target.value;
        let parsed = str.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
        parsed = parsed.toUpperCase();
        setInputText(parsed);
    }


    return(
        <form onSubmit={conferencia}>
            <label htmlFor="palavra">
                <span>Já sei a palavra!</span>
                <input type="text" id="palavra" onChange={mudança}></input>
            </label>
            <button className="done" disabled={(props.lose === "venceu" || props.lose === "perdeu" || props.lose==="naocomeçou")? true : false}>Chutar</button>
        </form>
    )
}

export default Chute;