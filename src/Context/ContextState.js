import React, { useState } from "react";
import BaseContext from "./BaseContext";

const ContextState = (props) => {
    const [curSelected, setCurSelected] = useState("");
    const [curCSS, setCurCSS] = useState(null);
    
    return (
        <BaseContext.Provider
            value={{
                curSelected, setCurSelected,curCSS, setCurCSS
            }}
        >
            {props.children}
        </BaseContext.Provider>
    );
};

export default ContextState;