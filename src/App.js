const [counter, setCounter] = useState(0);
const [acertadas, setAcertadas] = useState([]);
const [lose, setLose] = useState("naocomeçou");
const [clicadas, setClicadas] = useState([]);

    function selecionarletra(e){
        let verify = 0;
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
        if(!acertadas.includes(e.target.textContent) && verify == 0){
            setAcertadas([...acertadas, e.target.textContent]);
        }
       };
    }

    useEffect(() => {
        let win = [];
        for(const i of palavra){
            if(acertadas.includes(i) && counter <6){
                 win.push(i);
            }
        }
        if(win.length === palavra.length && lose !=="naocomeçou"){
            setLose("venceu");
        }
    }, [acertadas])