import {useEffect, useState} from "react";
import QRCode from 'qrcode'
import ClientData from "../Form/ClientData.tsx";


// useContext
const CreaterQr = () => {
    const [data, setData] = useState("");
    const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);

    async function generate(){
        QRCode.toCanvas(canvas, data, function (error) {
            if (error) console.error(error)
            console.log('success!');
        })
    }

    useEffect(()=>{
        setCanvas(document.querySelector("canvas"));
    },[])

    return (
        <div className="w-full">
            <div className="flex items-center justify-center flex-col">
                <ClientData/>
                <input className="my-4" type="text" value={data} onChange={(el)=>setData(el.target.value)}/>
                <button onClick={generate}>Generate</button>
            </div>
            <div className="flex justify-center m-5">
                <canvas></canvas>
            </div>

        </div>
    );
};

export default CreaterQr;