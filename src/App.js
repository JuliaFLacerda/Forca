import { useEffect, useState } from 'react';
import Chute from './Chute';
import Letras from './Letras';
import Jogo from './Jogo';


export default function App(){

const [counter, setCounter] = useState(0);
const [acertadas, setAcertadas] = useState([]);
const [lose, setLose] = useState("naocomeçou");
const [clicadas, setClicadas] = useState([]);
const [palavra, setPalavra] = useState([]);

    function selecionarletra(e){
        let verify = counter;
        let newacertadas = [...acertadas];
        if(!clicadas.includes(e.target.textContent)){
            setClicadas([...clicadas, e.target.textContent])
            console.log(clicadas);
        }
        //for in if value 
        if(!palavra.includes(e.target.textContent)){
           verify = counter + 1;
           if(verify === 6){
            setAcertadas([...palavra]);
            setLose("perdeu");
           }
           else{
            setCounter(counter + 1);
           }
       }
       else{
        if(!acertadas.includes(e.target.textContent) && verify == counter){
            setAcertadas([...acertadas, e.target.textContent]);
            newacertadas = [...acertadas, e.target.textContent];
        }
       };

       let win = [];
       for(const i of palavra){
        if(newacertadas.includes(i) && verify <6){
             win.push(i);
        }
        if(win.length === palavra.length && lose !=="naocomeçou"){
            setLose("venceu");
        }
    }
    }

return(
    <>
    <Jogo palavra={palavra} setPalavra={setPalavra} counter={counter} setAcertadas ={setAcertadas} setLose={setLose} setCounter={setCounter} setClicadas={setClicadas} lose={lose}/>
    <Letras funçao={selecionarletra} clicadas={clicadas} lose={lose}/>
    <Chute palavra={palavra} lose={lose} setLose={setLose} setAcertadas={setAcertadas} acertadas={acertadas} setCounter={setCounter}/>
    </>
)

}