import QrScanner from "qr-scanner";
import {useEffect, useState} from "react";
import Error from "../Error.tsx";
const ReadQr = () => {
    const [data, setData] = useState<string>("");
    const [error, setError] = useState<string>("");

    let qrScanner : QrScanner;

    useEffect(()=>{
        const videoElem : HTMLVideoElement = document.querySelector('video') as HTMLVideoElement;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore

        qrScanner = new QrScanner(videoElem, (result: QrScanner.ScanResult): void => {
            setData(result.data);
        }, {
            onDecodeError: (e : Error)=>{
                setError(e.message);
            },
            maxScansPerSecond: 5,
            highlightScanRegion: true,
            returnDetailedScanResult: true
        });
    },[])

    useEffect(()=>{
        setTimeout(()=>{
            setError("");
        },4000)
    },[error])

    async function read(){
        try {
            await qrScanner.start();
        } catch (e){
            console.log((e as Error).message)
            setError("Ошибка камеры")
        }
    }



    return (
        <div className="flex flex-col content-center items-center mb-10">
            <video className="w-4/5 h-4/5 bg-black"></video>
            <button onClick={read} className="w-32 mt-2">Scan</button>
            <div>{data}</div>
            {error && <Error message={error}/>}
            {/*<ErrorPage/>*/}
        </div>
    );
};

export default ReadQr;