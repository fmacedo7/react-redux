import React from "react";
import FamiliaMembro from "./FamiliaMembro"

export default props => {

    return (
        <div>
            <FamiliaMembro nome="Ágata" sobrenome="Montenegro"></FamiliaMembro>
            <FamiliaMembro nome="Felipe" {...props} ></FamiliaMembro>
            <FamiliaMembro nome="Joana" sobrenome="Natal"></FamiliaMembro>
        </div>
    )
}