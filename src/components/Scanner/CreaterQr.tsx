import {useEffect, useState} from "react";
import QRCode from 'qrcode'

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
        <div>
            <div>
                <input type="text" value={data} onChange={(el)=>setData(el.target.value)}/>
                <button onClick={generate}>Generate</button>
            </div>
            <canvas>

            </canvas>
        </div>
    );
};

export default CreaterQr;