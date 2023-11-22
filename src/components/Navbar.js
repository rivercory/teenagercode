import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { IoMdSettings, IoMdNotifications } from "react-icons/io";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <FaBars size={22} />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 suit">
                        <li><Link to="/">홈</Link></li>
                        <li><Link to="/dashboard">대시보드</Link></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl text-primary pretendard">틴에이저코드</Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <IoMdSettings size={22} />
                    </label>
                    <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-80 border">
                        <div className="card-body ibmplexsans">
                            <p className="text-lg font-bold">모드</p>
                            <p>you can use any element as a dropdown.</p>
                        </div>
                    </div>
                </div>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <IoMdNotifications size={22} />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;