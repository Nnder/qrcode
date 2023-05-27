import QrScanner from "qr-scanner";
import {useEffect, useState} from "react";
const ReadQr = () => {
    const [data, setData] = useState("");
    let qrScanner

    useEffect(()=>{
        const videoElem = document.querySelector('video');
        qrScanner = new QrScanner(
            videoElem,
            result => console.log('decoded qr code:', result),

        );

    },[])

    function read(){
      qrScanner.start();
    }



    return (
        <div>
            <video style={{width: '100%', height: '100%'}}></video>
            <button onClick={read}>Scan</button>
        </div>
    );
};

export default ReadQr;