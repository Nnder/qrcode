import {Link} from "react-router-dom";
import logo from '../../assets/barbershop.png';

const Navbar = () => {
    return (
        <div className="flex justify-center items-center mb-14">
            <div>
                <Link to="/">
                    <img src={logo} className="w-24"/>
                </Link>
            </div>
            <div>
                <ul className="flex">
                    <li className="m-6">
                        <Link to="/scan">Сканировать</Link>
                    </li>
                    <li className="m-6">
                        <Link to="/create">Зарегистрировать</Link>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;