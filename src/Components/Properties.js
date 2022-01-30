import "./styles/Properties.css";
import BaseContext from "../Context/BaseContext"

import React, { useContext, useEffect, useState } from "react";

export default function Properties({ curSelected, setCurSelected }) {
    const [elemState, setElemState] = useState("Normal");
    const context = useContext(BaseContext);

    const trimToNumber = (x, round) => {
        var num = "";
        var n = x.length;
        for (var i = 0; i < n; i++) {
            if (
                (x.charAt(i) >= "0" && x.charAt(i) <= "9") ||
                x.charAt(i) == "."
            )
                num += x.charAt(i);
            else break;
        }
        // console.log(num);
        if (round) return Math.round(num);
        else return num;
    };

    function RGBToHex(r, g, b) {
        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);

        if (r.length == 1) r = "0" + r;
        if (g.length == 1) g = "0" + g;
        if (b.length == 1) b = "0" + b;
        return "#" + r + g + b;
    }

    const getShadow = (sh) => {
        if (!sh || sh == "none") return [0, 0, 0, "#000000"];
        // console.log("first", !sh);
        var color = "";
        var n = sh.length;
        var append = false;
        for (var i = 0; i < n; i++) {
            if (sh.charAt(i) == ")") break;
            if (append) color += sh.charAt(i);
            else if (sh.charAt(i) == "(") append = true;
        }
        sh = sh.substr(i + 2);
        sh = sh.split(" ");
        color = color.split(", ");
        return [
            trimToNumber(sh[0]),
            trimToNumber(sh[1]),
            trimToNumber(sh[2]),
            RGBToHex(
                parseInt(color[0]),
                parseInt(color[1]),
                parseInt(color[2])
            ),
        ];
    };

    const splitColor = (sh) => {
        var color = "";
        var n = sh.length;
        var append = false;
        for (var i = 0; i < n; i++) {
            if (sh.charAt(i) == ")") break;
            if (append) color += sh.charAt(i);
            else if (sh.charAt(i) == "(") append = true;
        }
        return color.split(", ");
    };

    const resetProps = (e) => {
        document.getElementById("width").value = trimToNumber(e["width"], true);
        document.getElementById("height").value = trimToNumber(
            e["height"],
            true
        );
        document.getElementById("xpos").value = trimToNumber(e["left"], true);
        document.getElementById("ypos").value = trimToNumber(e["top"], true);
        var s = getShadow(e["box-shadow"]);
        var x = s[0];
        var y = s[1];
        var b = s[2];
        var c = s[3];
        console.log(x, y, b, c);
        document.getElementById("xboxshadow").value = x;
        document.getElementById("yboxshadow").value = y;
        document.getElementById("boxblurshadow").value = b;
        document.getElementById("boxShadowColor").value = c;
        document.getElementById("topradius").value = trimToNumber(
            e["border-top-left-radius"]
        );
        document.getElementById("rightradius").value = trimToNumber(
            e["border-top-right-radius"]
        );
        document.getElementById("bottomradius").value = trimToNumber(
            e["border-bottom-left-radius"]
        );
        document.getElementById("leftradius").value = trimToNumber(
            e["border-bottom-right-radius"]
        );
        document.getElementById("opacity").value = trimToNumber(e["opacity"]);
        console.log(e["transition"]);
        document.getElementById("transition").value = trimToNumber(
            e["transition"].split(" ")[1]
        );

        s = getShadow(e["text-shadow"]);
        x = s[0];
        y = s[1];
        b = s[2];
        c = s[3];
        // console.log(x,y,b,c);
        document.getElementById("xshadow").value = x;
        document.getElementById("yshadow").value = y;
        document.getElementById("blurshadow").value = b;
        document.getElementById("textShadowColor").value = c;
        s = splitColor(e["color"]);
        document.getElementById("fontColor").value = RGBToHex(
            parseInt(s[0]),
            parseInt(s[1]),
            parseInt(s[2])
        );
        s = splitColor(e["background-color"]);
        // console.log("background", s,e["background-color"]);
        document.getElementById("backgroundColor").value = RGBToHex(
            parseInt(s[0]),
            parseInt(s[1]),
            parseInt(s[2])
        );

        document.getElementById("paddingTop").value = trimToNumber(e["padding-top"]);
        document.getElementById("paddingRight").value = trimToNumber(e["padding-right"]);
        document.getElementById("paddingBottom").value = trimToNumber(e["padding-bottom"]);
        document.getElementById("paddingLeft").value = trimToNumber(e["padding-left"]);

    };

    const updateWidth = () => {
        document.getElementById(curSelected).style.width =
            document.getElementById("width").value + "px";
    };
    const updateHeight = () => {
        document.getElementById(curSelected).style.height =
            document.getElementById("height").value + "px";
    };

    const updateLeft = () => {
        document.getElementById(curSelected).style.left =
            document.getElementById("xpos").value + "px";
    };

    const updateTop = () => {
        document.getElementById(curSelected).style.top =
            document.getElementById("ypos").value + "px";
    };

    const updateBackground = () => {
        document.getElementById(curSelected).style.backgroundColor =
            document.getElementById("backgroundColor").value;
    };

    const updateBoxShadow = () => {
        document.getElementById(curSelected).style.boxShadow = `${
            document.getElementById("xboxshadow").value
        }px ${document.getElementById("yboxshadow").value}px ${
            document.getElementById("boxblurshadow").value
        }px ${document.getElementById("boxShadowColor").value}`;
    };

    const updateBorderRaduis = () => {
        document.getElementById(curSelected).style.borderRadius = `${
            document.getElementById("topradius").value
        }px ${document.getElementById("rightradius").value}px ${
            document.getElementById("leftradius").value
        }px ${document.getElementById("bottomradius").value}px`;
    };

    const updateColor = () => {
        document.getElementById(curSelected).style.color =
            document.getElementById("fontColor").value;
    };

    const updateFontfamiliy = () => {
        document.getElementById(curSelected).style.fontFamily =
            document.getElementById("fontFamily").value;
    };

    const updateFontSize = () => {
        document.getElementById(curSelected).style.fontSize =
            document.getElementById("fontSize").value + "px";
    };

    const updateTextShadow = () => {
        document.getElementById(curSelected).style.textShadow = `${
            document.getElementById("xshadow").value
        }px ${document.getElementById("yshadow").value}px ${
            document.getElementById("blurshadow").value
        }px ${document.getElementById("textShadowColor").value}`;
    };

    const changeOpacity = () => {
        // console.log(document.getElementById("opacity").value);
        document.getElementById(curSelected).style.opacity =
            document.getElementById("opacity").value;
    };

    const changeTransition = () => {
        console.log("all " + document.getElementById("transition").value + "s");
        document.getElementById(curSelected).style.transition =
            "all " + document.getElementById("transition").value + "s";
    };

    const updatePadding = () => {
        document.getElementById(curSelected).style.padding = `${
            document.getElementById("paddingTop").value
        }px ${document.getElementById("paddingRight").value}px ${
            document.getElementById("paddingBottom").value
        }px ${document.getElementById("paddingLeft").value}px`;
    };

    const getProps = () => {
        var elem = document.getElementById(curSelected);
        console.log(elem);
        if (!elem) return;
        var styles;
        if (elemState === "Normal") {
            styles = context.curCSS.normal;
            styles = window.getComputedStyle(elem);
        } else if (elemState === "Active") {
            styles = context.curCSS.active;
            console.log("Active");
        } else {
            styles = context.curCSS.hover;
            console.log("Hover");
        }
        resetProps(styles);
    };

    useEffect(() => {
        console.log("fdsfasd");
        getProps();
    }, [curSelected, elemState]);

    const move = (e, x, y, addItems)=>{
        addItems.style.left = (e.clientX + x)+"px";
        addItems.style.top = (e.clientY + y)+"px";
    }
    const grabItem = (e)=>{
        const addItems = document.getElementById("propsContainer");
        var x = addItems.offsetLeft - e.clientX;
        var y = addItems.offsetTop - e.clientY;
        var graber = (e)=>{move(e, x, y, addItems)}
        window.addEventListener("mousemove",graber);
        window.addEventListener('mouseup',()=>{
            window.removeEventListener('mousemove',graber);
        })

    }


    return (
        <div id="propsContainer">
            <div className="grab grabprops" onMouseDown={grabItem}><i className="fas fa-grip-vertical"></i></div>

            <div className="statecontainer">
                Box State
                <select
                    id="elemState"
                    className="elemState"
                    onChange={(e) => {
                        setElemState(e.target.value);
                    }}
                >
                    <option>Normal</option>
                    <option>Hover</option>
                    <option>Active</option>
                </select>
            </div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Box
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <div
                                className="fontShadow"
                                style={{ marginTop: "10px" }}
                            >
                                <div>Box Properties</div>
                                <div>
                                    <div>
                                        <div>
                                            Width{" "}
                                            <input
                                                type="text"
                                                id="width"
                                                className="shadowInp"
                                                defaultValue="0"
                                                onChange={updateWidth}
                                            />
                                        </div>
                                        <div>
                                            Height{" "}
                                            <input
                                                type="text"
                                                id="height"
                                                className="shadowInp"
                                                defaultValue="0"
                                                onChange={updateHeight}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            X{" "}
                                            <input
                                                type="text"
                                                id="xpos"
                                                className="shadowInp"
                                                defaultValue="0"
                                                onChange={updateLeft}
                                            />
                                        </div>
                                        <div>
                                            Y{" "}
                                            <input
                                                type="text"
                                                id="ypos"
                                                className="shadowInp"
                                                defaultValue="0"
                                                onChange={updateTop}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="backgroundColor">
                                Background Color
                                <input
                                    type="color"
                                    id="backgroundColor"
                                    className="shadowInp"
                                    className="border-0"
                                    onChange={updateBackground}
                                />
                            </div>

                            <div className="fontShadow">
                                <div>Box Shadow</div>
                                <div>
                                    <div>
                                        <div>
                                            X{" "}
                                            <input
                                                type="text"
                                                id="xboxshadow"
                                                className="shadowInp"
                                                defaultValue="0"
                                                onChange={updateBoxShadow}
                                            />
                                        </div>
                                        <div>
                                            Y{" "}
                                            <input
                                                type="text"
                                                id="yboxshadow"
                                                className="shadowInp"
                                                onChange={updateBoxShadow}
                                                defaultValue="0"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            Blue{" "}
                                            <input
                                                type="text"
                                                id="boxblurshadow"
                                                className="shadowInp"
                                                onChange={updateBoxShadow}
                                                defaultValue="0"
                                            />
                                        </div>
                                        <div>
                                            Color
                                            <input
                                                type="color"
                                                id="boxShadowColor"
                                                className="shadowInp"
                                                onChange={updateBoxShadow}
                                                className="border-0"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="fontShadow">
                                <div>Border Radius</div>
                                <div>
                                    <div>
                                        <div>
                                            T-Left{" "}
                                            <input
                                                type="text"
                                                id="topradius"
                                                className="shadowInp"
                                                defaultValue="0"
                                                onChange={updateBorderRaduis}
                                            />
                                        </div>
                                        <div>
                                            T-Rig{" "}
                                            <input
                                                type="text"
                                                id="rightradius"
                                                className="shadowInp"
                                                onChange={updateBorderRaduis}
                                                defaultValue="0"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            B-Left{" "}
                                            <input
                                                type="text"
                                                id="bottomradius"
                                                className="shadowInp"
                                                onChange={updateBorderRaduis}
                                                defaultValue="0"
                                            />
                                        </div>
                                        <div>
                                            B-Rig{" "}
                                            <input
                                                type="text"
                                                id="leftradius"
                                                className="shadowInp"
                                                onChange={updateBorderRaduis}
                                                defaultValue="0"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Fonts
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <div className="input-group" className="fontProps">
                                <div className="proprow1 w-100-mid">
                                    <div className="fontSize">
                                        Size
                                        <select
                                            id="fontSize"
                                            className="fontSizeSelect"
                                            onChange={updateFontSize}
                                        >
                                            <option>8</option>
                                            <option>10</option>
                                            <option>12</option>
                                            <option>14</option>
                                            <option selected={true}>16</option>
                                            <option>18</option>
                                            <option>20</option>
                                            <option>22</option>
                                            <option>24</option>
                                            <option>26</option>
                                            <option>28</option>
                                            <option>30</option>
                                        </select>
                                    </div>
                                    <div className="fontColor">
                                        Color{" "}
                                        <input
                                            type="color"
                                            id="fontColor"
                                            className="border-0"
                                            onChange={updateColor}
                                        />
                                    </div>
                                </div>
                                <div className="fontFamily">
                                    Font-Family :
                                    <select
                                        id="fontFamily"
                                        className="fontFamilySelect"
                                        onChange={updateFontfamiliy}
                                    >
                                        <option>
                                            'Architects Daughter', cursive
                                        </option>
                                        <option>'Comforter', cursive</option>
                                        <option>'Cookie', cursive</option>
                                        <option>
                                            'Dancing Script', cursive
                                        </option>
                                        <option>
                                            'IBM Plex Sans Thai
                                            Looped',sans-serif
                                        </option>
                                        <option>
                                            'Josefin Sans', sans-serif
                                        </option>
                                        <option>
                                            'Mochiy Pop P One', sans-serif
                                        </option>
                                        <option>'Sarabun', sans-serif</option>
                                        <option selected={true}>
                                            'Satisfy', cursive
                                        </option>
                                        <option>
                                            'Supermercado One', cursive
                                        </option>
                                    </select>
                                </div>

                                <div className="fontShadow">
                                    <div>Text Shadow</div>
                                    <div>
                                        <div>
                                            <div>
                                                X{" "}
                                                <input
                                                    type="text"
                                                    id="xshadow"
                                                    className="shadowInp"
                                                    onChange={updateTextShadow}
                                                    defaultValue="0"
                                                />
                                            </div>
                                            <div>
                                                Y{" "}
                                                <input
                                                    type="text"
                                                    id="yshadow"
                                                    onChange={updateTextShadow}
                                                    className="shadowInp"
                                                    defaultValue="0"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                Blue{" "}
                                                <input
                                                    type="text"
                                                    id="blurshadow"
                                                    className="shadowInp"
                                                    onChange={updateTextShadow}
                                                    defaultValue="0"
                                                />
                                            </div>
                                            <div>
                                                Color
                                                <input
                                                    type="color"
                                                    id="textShadowColor"
                                                    className="border-0"
                                                    style={{ border: "none" }}
                                                    onChange={updateTextShadow}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Propeties
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <div
                                className="otherProps"
                                style={{ marginTop: "10px" }}
                            >
                                <div>
                                        <div>Opacity (0-1)</div>{" "}
                                        <input
                                            type="text"
                                            id="opacity"
                                            className="otherinp"
                                            defaultValue="1"
                                            onChange={changeOpacity}
                                        />
                                </div>
                                <div>
                                        <div>Transition (s)</div>{" "}
                                        <input
                                            type="text"
                                            id="transition"
                                            className="otherinp"
                                            defaultValue="0"
                                            onChange={changeTransition}
                                        />
                                </div>
                                <div
                                    className="padding"
                                    style={{
                                        marginTop: "10px",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <div>Padding</div>
                                    <div className="paddingBox">
                                        <div>
                                            <div className="paddingsubcont">
                                                P-Top{" "}
                                                <input
                                                    type="text"
                                                    id="paddingTop"
                                                    className="otherinp"
                                                    defaultValue="0"
                                                    onChange={updatePadding}
                                                />
                                            </div>
                                            <div className="paddingsubcont">
                                                P-Rig{" "}
                                                <input
                                                    type="text"
                                                    id="paddingRight"
                                                    className="otherinp"
                                                    defaultValue="0"
                                                    onChange={updatePadding}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="paddingsubcont">
                                                P-Bott{" "}
                                                <input
                                                    type="text"
                                                    id="paddingBottom"
                                                    className="otherinp"
                                                    defaultValue="0"
                                                    onChange={updatePadding}
                                                />
                                            </div>
                                            <div className="paddingsubcont">
                                                P-Left{" "}
                                                <input
                                                    type="text"
                                                    id="paddingLeft"
                                                    className="otherinp"
                                                    defaultValue="0"
                                                    onChange={updatePadding}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="padding"
                                    style={{
                                        marginTop: "10px",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <div>Others</div>
                                    <div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
