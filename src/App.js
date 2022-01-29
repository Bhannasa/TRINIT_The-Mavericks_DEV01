import "./App.css";
import Image from './Image';
import Textarea from "./Textarea";

function App() {

    return (
        <div className="App">
            <Image position="relative" height="250px"/>
            <Textarea height="100px" width="100px" border="1px solid black" color="red" position= "relative"/>
        </div>
    );
}

export default App;
