import React from "react";
import Button from "./Button";
import Div from "./Div";
import Textarea from "./Textarea";
import Image from "./Image";

export default function Container() {
    const move = (e, x, y, addItems)=>{
        addItems.style.left = (e.clientX + x)+"px";
        addItems.style.top = (e.clientY + y)+"px";
    }
    const grabItem = (e)=>{
        const addItems = document.getElementById("addItems");
        var x = addItems.offsetLeft - e.clientX;
        var y = addItems.offsetTop - e.clientY;
        var graber = (e)=>{move(e, x, y, addItems)}
        window.addEventListener("mousemove",graber);
        window.addEventListener('mouseup',()=>{
            window.removeEventListener('mousemove',graber);
        })

    }
    return (
        <div className="addItems" id="addItems">
            <div className="grab" onMouseDown={grabItem}><i className="fas fa-grip-vertical"></i></div>
            <div className="btn-group-vertical">
                <Button />
                <Div />
                <Textarea />
                <Image />
            </div>
        </div>
    );
}
