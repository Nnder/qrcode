import {Link} from "react-router-dom";
import logo from '../../assets/barbershop.png';

const Navbar = () => {
    return (
        <div className="flex justify-center items-start flex-col mb-5 min-[450px]:flex-row min-[450px]:items-center">
            <div className="">
                <Link to="/" className="flex items-center justify-center w-full text-slate-500  hover:text-slate-600 sm:w-32">
                    <img src={logo} alt="logo" className="w-14 sm:w-32"/>
                    <div className="text-4xl pl-3  min-[450px]:hidden">Барбершоп</div>
                </Link>
            </div>
            <div className="w-full pr-1">
                <ul className="flex flex-col min-[450px]:flex-row text-3xl min-[450px]:text-xl">
                    <li className="ml-1 pt-2 text-neutral-200 min-[450px]:ml-3 min-[450px]:pt-0">
                        <Link to="/scan">Сканировать</Link>
                        <hr className="min-[450px]:hidden"/>
                    </li>
                    <li className="ml-1 pt-2 text-neutral-200 min-[450px]:ml-3 min-[450px]:pt-0">
                        <Link to="/create">Зарегистрировать</Link>
                        <hr className="min-[450px]:hidden"/>
                    </li>

                    <li className="ml-1 pt-2 text-neutral-200 min-[450px]:ml-3 min-[450px]:pt-0">
                        <Link to="/fiend">Найти</Link>
                        <hr className="min-[450px]:hidden"/>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;