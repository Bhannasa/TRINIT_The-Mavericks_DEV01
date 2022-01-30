import React, { useContext } from "react";
import Css from "../../classes/Css";
import BaseContext from "../../Context/BaseContext";

export default function Button() {
    const context = useContext(BaseContext);

    const createButton = () => {
        const elem = {
            tag: "button",
            id: `button${document.getElementsByClassName("button").length}`,
            class: "button",
            style: new Css(40, 100),
        };
        context.setElements(context.elements.concat([elem]));
    };
    return (
            <button
                className="btn btn-dark textarea-btn"
                onClick={createButton}
            >
                Button
            </button>
        
    );
}
