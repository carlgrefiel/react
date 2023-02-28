import { useEffect, useState } from "react";

const DataFetcher = ({ render, url}) => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        if (url.includes("desserts")) {
            setData(["cake", "ice cream", "pie", "brownie"]);
        }else {
            setData(["water", "soda", "juice" ,"coke", "pepsi"]);
        }
    }, [url]);
    return render(data);
};

const DessertsCounts =() => {
    return (
        <DataFetcher 
        url="https://littlelemon/desserts "
        render={(data) => <p>{data.length} desserts</p>} 
        />
    );
};

const DrinksCount = () => {
    return (
        <DataFetcher 
        url="https://littlelemon/drinks"
        render={(data) => <h3>{data.length} drinks</h3>} 
        />
    );
};

export default function RenderProps() {
    return (
        <div >
            <header>Little Lemon Restaurant</header>
            <DessertsCounts />
            <DrinksCount />
        </div>
    );
};