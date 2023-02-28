import { useRef, useState,} from "react";


function Calcu(){
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    const plus =(e) => {
        e.preventDefault();
        setResult((result) => result + Number(inputRef.current.value));
    };
    const minus =(e) => {
        e.preventDefault();
        setResult((result) => result - Number(inputRef.current.value));
    };
    const divide =(e) => {
        e.preventDefault();
        setResult((result) => result / Number(inputRef.current.value));
    };
    const multiply =(e) => {
        e.preventDefault();
        setResult((result) => result * Number(inputRef.current.value));
    };
    const resetInput = (e) => {
        e.preventDefault();
        inputRef.current.value = 0;
    };
    const resetResult = (e) => {
        e.preventDefault();
        setResult((prevVal) => prevVal * 0);
    };

    return(
        <div>
            <div>
                <h1>Simplest Working Calculator</h1>
            </div>
            <form>
                <p ref={resultRef}>{result}</p>
                <input pattern="[0-9]" ref={inputRef} type="number" placeholder="Input a number" />
                <div>
                <button onClick={plus}>Add</button>
                <button onClick={minus}>Minus</button>
                <button onClick={divide}>Divide</button>
                <button onClick={multiply}>Multiply</button>
                <button onClick={resetInput}>Reset Input</button>
                <button onClick={resetResult}>Reset Result</button>
                </div>
            </form>
        </div>

    );

}
export default Calcu;