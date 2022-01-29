import "./App.css";
import storage from "./FirebaseInit";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

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

    return <div className="App"></div>;
}

export default App;
