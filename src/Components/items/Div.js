import React, { useContext } from "react";
import Css from "../../classes/Css";
import BaseContext from "../../Context/BaseContext";

export default function Div() {
    const context = useContext(BaseContext);

    const createButton = () => {
        const elem = {
            tag: "div",
            id: `div${document.getElementsByClassName("div").length}`,
            class: "div",
            style: new Css(100, 100),
        };
        context.setElements(context.elements.concat([elem]));
    };
    return (
            <button
                className="btn btn-dark textarea-btn"
                onClick={createButton}
            >
                Rectangle
            </button>
    );
}
