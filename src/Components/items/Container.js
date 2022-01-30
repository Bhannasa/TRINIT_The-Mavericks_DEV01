import React from "react";
import Button from "./Button";
import Div from "./Div";
import Textarea from "./Textarea";
import Image from "./Image";

export default function Container() {
    return (
        <div className="addItems">
            <div class="btn-group-vertical">
                <Button />
                <Div />
                <Textarea />
                <Image />
            </div>
        </div>
    );
}
