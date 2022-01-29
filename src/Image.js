import React , {useState}  from 'react';
import storage from "./FirebaseInit";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function Image(props) {
    const [image, setImage] = useState(null);
    const styleImage = `height: ${props.height};
        position: ${props.position};`
    const Change = (e) => {
        if (e.target.files[0])
        {
            setImage(e.target.files[0]);
        }
    }
    const upload = async (type, elemId) => 
    {
        elemId = document.getElementById(elemId);
        const file = elemId.files[0];
        var fileRef = ref(storage, file.name);
        const metadata = {
            contentType: type,
        };
        await uploadBytesResumable(fileRef, file, metadata);

        const url = await getDownloadURL(fileRef);
        const root = document.getElementById("root");
        const img= document.createElement("img");
        img.classList.add("images");
        img.setAttribute("src",url);
        img.style = styleImage;
        root.append(img);
        return url;
    };

    return (
        <div id="img-div">
            <input type="file" className = "my-3" onChange={Change} id="img-upload"/>
            {/* <button className='btn btn-dark' onClick={()=> props.upload(image.type,"img-upload")}>Upload Image</button> */}
            <button className='btn btn-dark' onClick={()=> upload(image.type,"img-upload")}>Upload Image</button>
        </div>
    )
}
