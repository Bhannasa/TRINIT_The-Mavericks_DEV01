import "./App.css";
import storage from "./FirebaseInit";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Properties from "./Components/Properties";
import { useState } from "react";

function App() {
    const upload = async (type, elemId) => {
        elemId = document.getElementById(elemId);
        const file = elemId.files[0];
        var fileRef = ref(storage, file.name);
        const metadata = {
            contentType: type,
        };

        await uploadBytesResumable(fileRef, file, metadata);

        const url = await getDownloadURL(fileRef);

        return url;
    };

    return (
      <div>
        <Properties curSelected={curSelected} setCurSelected={setCurSelected} />
        <div className="box" id="box" onClick={()=>{setCurSelected("box")}} style={{borderRadius:"30px"}}>
          Hello World
        </div>
        <div className="box" id="box2" onClick={()=>{setCurSelected("box2")}} style={{borderRadius:"30px"}}>
          Hello World
        </div>
      </div>
    );
}

export default App;
