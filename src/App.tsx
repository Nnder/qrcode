import './App.css'

import 'qrcode';
import ReadQr from "./components/ReadQr.tsx";
import CreaterQr from "./components/CreaterQr.tsx";

const App = () =>{



    return (
        <>
            <div>
                <h1>Reader</h1>
                <ReadQr/>
            </div>

            <div>
                <h1>Generate</h1>
                <CreaterQr/>
            </div>
        </>
    );
}

export default App
