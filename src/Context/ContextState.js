import React, { useEffect, useState } from "react";
import Css from "../classes/Css";
import BaseContext from "./BaseContext";

const ContextState = (props) => {
    const [curSelected, setCurSelected] = useState("");
    const [curCSS, setCurCSS] = useState(new Css());
    const [elements, setElements] = useState([]);

    useEffect(()=>{
        console.log(elements);
    },[elements]);
    
    return (
        <BaseContext.Provider
            value={{
                curSelected, setCurSelected, elements, setElements,curCSS, setCurCSS
            }}
        >
            {props.children}
        </BaseContext.Provider>
    );
};

export default ContextState;