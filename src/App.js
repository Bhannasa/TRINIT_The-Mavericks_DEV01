import "./App.css";
import storage from "./FirebaseInit";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Properties from "./Components/Properties";
import { useState } from "react";
import Image from './Image';
import Textarea from "./Textarea";

function App() {
    return (
      <div>
        <Properties curSelected={curSelected} setCurSelected={setCurSelected} />
        <div className="box" id="box" onClick={()=>{setCurSelected("box")}} style={{borderRadius:"30px"}}>
          Hello World
        </div>
        <div className="box" id="box2" onClick={()=>{setCurSelected("box2")}} style={{borderRadius:"30px"}}>
          Hello World
        </div>
        <Image position="relative" height="250px"/>
        <Textarea height="100px" width="100px" border="1px solid black" color="red" position= "relative" />  
         {/* calling Image and Textarea component  */}
      </div>
    );
}

export default App;













// import "./App.css";
// import Image from './Image';
// import Textarea from "./Textarea";
// import storage from "./FirebaseInit";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import Properties from "./Components/Properties";
// import { useState } from "react";

// function App() {
//     return (
//       <div>
//         <Properties curSelected={curSelected} setCurSelected={setCurSelected} />
//         <div className="box" id="box" onClick={()=>{setCurSelected("box")}} style={{borderRadius:"30px"}}>
//           Hello World
//         </div>
//         <div className="box" id="box2" onClick={()=>{setCurSelected("box2")}} style={{borderRadius:"30px"}}>
//           Hello World
//         </div>
//         <Image position="relative" height="250px"/>
//         <Textarea height="100px" width="100px" border="1px solid black" color="red" position= "relative"/>
//       </div>
//     );
// }

// export default App;
