import "./App.css";
// import storage from "./FirebaseInit";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Image from './Image';
import Textarea from "./Textarea";

function App() {
    // let src = null;
    // const upload = async (type, elemId) => 
    // {
    //     elemId = document.getElementById(elemId);
    //     const file = elemId.files[0];
    //     var fileRef = ref(storage, file.name);
    //     const metadata = {
    //         contentType: type,
    //     };
    //     await uploadBytesResumable(fileRef, file, metadata);

    //     const url = await getDownloadURL(fileRef);
    //     const root = document.getElementById("root");
    //     const img= document.createElement("img");
    //     img.setAttribute("src",url);
    //     img.setAttribute("style", "position:relative;height: 250px;"); 
    //     if (src != null)
    //     {
    //         root.removeChild(root.lastChild);
    //     }
    //     root.append(img);
    //     src = url;
    //     return url;
    
    // };

    return (
        <div className="App">
            <Image position="relative" height="250px"/>
            {/* <Textarea height="100px" width="100px" border="1px solid black" color="red" position= "relative"/> */}
        </div>
        );
}

export default App;
