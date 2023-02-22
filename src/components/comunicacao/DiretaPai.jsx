import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho texto="RTX" numero={4090} bool={true}/>
            <DiretaFilho texto="RTX" numero={4050} bool={false}/>
        </div>
    )
}