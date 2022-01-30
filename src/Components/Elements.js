import React, { useContext } from "react";
import BaseContext from "../Context/BaseContext";

export default function Elements() {
    const context = useContext(BaseContext);
    const updateText = (id) => {
        var label = window.prompt("Enter Label");
        if (label) document.getElementById(id).innerHTML = label;
    };
    const move = (e, x, y, addItems) => {
        addItems.style.left = e.clientX + x + "px";
        addItems.style.top = e.clientY + y + "px";
    };
    const grabItem = (e, id) => {
        const addItems = document.getElementById(id);
        var x = addItems.offsetLeft - e.clientX;
        var y = addItems.offsetTop - e.clientY;
        var graber = (e) => {
            move(e, x, y, addItems);
        };
        window.addEventListener("mousemove", graber);
        window.addEventListener("mouseup", () => {
            window.removeEventListener("mousemove", graber);
        });
    };
    return (
        <>
            {context.elements.map((tag) => {
                if (tag.tag === "img") {
                    return (
                        <div>
                            <div
                                className="grab grabx"
                                onMouseDown={(e) => {
                                    grabItem(e, tag.id);
                                }}
                            >
                                <i className="fas fa-grip-vertical"></i>
                            </div>
                            
                            <img
                                src={tag.src}
                                id={tag.id}
                                className={tag.class}
                                onClick={() => {
                                    context.setCurSelected(tag.id);
                                    context.setCurCSS(tag.style);
                                }}
                                key={tag.id}
                                style={{ position: "absolute" }}
                            />
                        </div>
                    );
                } else if (tag.tag === "textarea") {
                    <div
                        className="grab grabx"
                        onMouseDown={(e) => {
                            grabItem(e, tag.id);
                        }}
                    >
                        <i className="fas fa-grip-vertical"></i>
                    </div>;
                    return (
                        <div>
                            <textarea
                                style={{
                                    width: "200px",
                                    height: "100px",
                                    position: "absolute",
                                    resize: "none",
                                }}
                                id={tag.id}
                                class={tag.class}
                                onClick={() => {
                                    context.setCurSelected(tag.id);
                                    context.setCurCSS(tag.style);
                                }}
                                key={tag.id}
                            />
                        </div>
                    );
                } else if (tag.tag === "button") {
                    return (
                        <button
                            style={{
                                width: "100px",
                                height: "40px",
                                position: "absolute",
                            }}
                            id={tag.id}
                            className={tag.class}
                            onClick={() => {
                                context.setCurSelected(tag.id);
                                context.setCurCSS(tag.style);
                            }}
                            key={tag.id}
                            onDoubleClick={() => {
                                updateText(tag.id);
                            }}
                        >
                            <div
                                className="grab grabx"
                                onMouseDown={(e) => {
                                    grabItem(e, tag.id);
                                }}
                            >
                                <i className="fas fa-grip-vertical"></i>
                            </div>
                            Button
                        </button>
                    );
                } else if (tag.tag === "div") {
                    return (
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                border: "1px solid black",
                                position: "absolute",
                            }}
                            id={tag.id}
                            className={tag.class}
                            onClick={() => {
                                context.setCurSelected(tag.id);
                                context.setCurCSS(tag.style);
                            }}
                            key={tag.id}
                            onDoubleClick={() => {
                                updateText(tag.id);
                            }}
                        >
                            <div
                                className="grab grabx"
                                onMouseDown={(e) => {
                                    grabItem(e, tag.id);
                                }}
                            >
                                <i className="fas fa-grip-vertical"></i>
                            </div>
                            
                        </div>
                    );
                }
            })}
        </>
    );
}
