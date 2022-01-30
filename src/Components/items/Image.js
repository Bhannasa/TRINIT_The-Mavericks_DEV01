import React, { useContext, useState } from "react";
import storage from "../../FirebaseInit";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import BaseContext from "../../Context/BaseContext";
import Css from "../../classes/Css";

export default function Image(props) {
    const [image, setImage] = useState(null);
    const context = useContext(BaseContext);

    const Change = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            upload(e.target.files[0].type, "img-upload");
        }
    };
    const upload = async (type, elemId) => {
        elemId = document.getElementById(elemId);
        const file = elemId.files[0];
        var fileRef = ref(storage, file.name);
        const metadata = {
            contentType: type,
        };
        await uploadBytesResumable(fileRef, file, metadata);

        const url = await getDownloadURL(fileRef);
        
        const elem = {
            tag: "img",
            src: url,
            id: "image" + document.getElementsByClassName("images").length,
            class: image,
            style: new Css(200, 200),
        };
        console.log(elemId.files[0]);
        context.setElements(context.elements.concat([elem]));

    };

    return (
        <div id="img-div" className="btn btn-dark">
            <input
                type="file"
                onChange={Change}
                id="img-upload"
                style={{ display: "none" }}
            />
            <label className="w-100 h-100" htmlFor="img-upload">
                Image
            </label>
        </div>
    );
}
