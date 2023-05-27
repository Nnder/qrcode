import QrScanner from "qr-scanner";
import {useEffect, useState} from "react";
const ReadQr = () => {
    const [data, setData] = useState("");
    let qrScanner

    useEffect(()=>{
        const videoElem = document.querySelector('video');
        qrScanner = new QrScanner(
            videoElem,
            result => {
                setData(result.data);
                alert(result.data);
            },
            {
                onDecodeError: (e)=>{
                    //alert(e);
                },
                maxScansPerSecond: 5,
                highlightScanRegion: true,
                returnDetailedScanResult: true
            }

        );

    },[])

    async function read(){
      await qrScanner.start();
    }



    return (
        <div>
            <video style={{width: '100%', height: '100%', maxHeight: '400px', maxWidth:'400px'}}></video>
            <button onClick={read}>Scan</button>
            <div>{data}</div>
        </div>
    );
};

export default ReadQr;