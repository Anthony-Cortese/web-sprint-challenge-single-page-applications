import React from "react";
import { useHistory } from 'react-router-dom'

export default function Home() {
    const history = useHistory();

    const routeToPizza = () => {
        console.log(history);
        history.push("./Form");
    }

    return (
        <div className="home-wrapper">
            <button onClick={routeToPizza} className="md-button shop-button">
                ORDER PIZZA NOW!
            </button>
        </div>
    )
}
