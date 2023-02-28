import { useEffect, useState } from "react";
function ShoppingCart(props) {
    const total = props.items * props.pricePerItems;
    
    useEffect (() =>console.log(total), []);
    return <h1>Total: {total}</h1>
}

export default function Impure() {
    const [toggle, setToggle] = useState(false);

    const clickHandler = () => {
        setToggle(!toggle);
    }
    useEffect(() => {
        document.title = toggle ? "Welcome To Little Lemon": "Using the useEffect hook"
    }, []);
    return (
        <div>
            <ShoppingCart items={5} pricePerItems={10} />

            <h1>Using the useEffect hook</h1>
            <button onClick={clickHandler}>Toggle message</button>
            {toggle && <h2>Welcome to little Lemon</h2>}

        </div>
        
    );
}