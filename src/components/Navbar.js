import {Link} from 'react-router-dom';
import {FaBars} from "react-icons/fa6";
import {IconContext} from "react-icons";
import {IoMdSettings, IoMdNotifications} from "react-icons/io";

const Navbar = () => {
    return (
        <div className="w-auto navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <IconContext.Provider value={{color: "#FFFFFF"}}>
                            <FaBars size={28}/>
                        </IconContext.Provider>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 suit">
                        <li className="menu-title">틴에이저코드</li>
                        <li><Link to="/">홈</Link></li>
                        <li><Link to="/dashboard">대시보드</Link></li>
                        <li className="menu-title">Account</li>
                        <li><Link to="/account/login">로그인</Link></li>
                        <li><Link to="/account/logout">로그아웃</Link></li>
                        <li><Link to="/account/register">회원가입</Link></li>
                        <li><Link to="/account/delete">회원탈퇴</Link></li>
                        <li><Link to="/account/findpassword">비밀번호 찾기</Link></li>
                        <li><Link to="/account/settings">설정</Link></li>
                        <li className="menu-title">We are Melotalk Universe</li>
                        <li><a href="https://mtuniverse.vercel.app">멜로톡 유니버스</a></li>
                        <li><a href="https://melotalk.vercel.app">멜로톡</a></li>
                        <li><a href="https://teenagercode.vercel.app">틴에이저코드</a></li>
                        <li><a href="https://devlist-five.vercel.app">데브리스트</a></li>
                        <li><a href="https://governmentplus.vercel.app">정부플러스</a></li>
                        <li><a href="https://toolking.vercel.app">툴킹</a></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-2xl text-white suit">
                    <img src="./icons/white/teenagercode_full.svg" alt="teenagercode icon" width="24" height="24"/>
                    틴에이저코드
                </Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <IconContext.Provider value={{color: "#FFFFFF"}}>
                            <IoMdSettings size={28}/>
                        </IconContext.Provider>
                    </label>
                    <div tabIndex={0} className="dropdown-content z-[1] card card-compact bg-white w-80 border">
                        <div className="card-body ibmplexsans">
                            <p className="text-lg font-bold">모드</p>
                            <p>you can use any element as a dropdown.</p>
                        </div>
                    </div>
                </div>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <IconContext.Provider value={{color: "#FFFFFF"}}>
                            <IoMdNotifications size={28}/>
                        </IconContext.Provider>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;