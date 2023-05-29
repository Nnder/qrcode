import {useEffect, useState} from "react";
import {useNavigate, useRouteError} from "react-router-dom";

const ErrorPage = () => {

    interface IErrorRoute {
        statusText : string | null;
        message: string | null;
    }

    const error : IErrorRoute = useRouteError() as IErrorRoute;

    const [timer, setTimer] = useState<number>(5);
    const navigate = useNavigate();


    useEffect(()=>{
        if (timer <= 0){
            navigate("/");
        }

        setTimeout(()=>{
            setTimer(prev => prev-1 )
        }, 1000)

    },[timer])


    return (
        <div>
            <div>Ошибка {error?.statusText || error?.message}</div>
            <div>Вы будете перенаправлены на главную страницу через {timer} секунд</div>
        </div>
    );
};

export default ErrorPage;