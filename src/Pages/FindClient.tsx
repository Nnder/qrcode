import ClientData from "../components/Form/ClientData.tsx";
import {useEffect, useState} from "react";

const FindClient = () => {
    const [count, setCount] = useState<number>(9);
    const [bonus, setBonus] = useState<boolean>(false);

    function handleClick(btn: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        setCount(num=>num+1)
        btn.currentTarget.disabled = true;
    }

    useEffect(()=>{
        if(count % 10 == 0 && count > 0 ) {
            setBonus(true);
        }
    }, [count])

    return (
        <div className="flex items-center justify-center flex-col">
            Поиск клиента по номеру
            <ClientData/>
            <div>
                Дата регистрации: 25.05.2023
            </div>
            <div className="flex-col">
                <div>Кол-во Посещений {count}</div>
                <button onClick={handleClick}>
                    Посещение +1
                </button>
                {bonus && <div className="m-6 text-xl text-red-900">Бесплатно</div>}
            </div>


        </div>
    );
};

export default FindClient;