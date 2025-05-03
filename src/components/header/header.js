
import { Link } from 'react-router-dom';
import '../../styles/header.css';
import logo from '../assets/image/logo.png';
function Header() {
    return (
        <div className="navbar2">

            <div className="logo">
                <img src={logo} />
            </div>


            <div className="menu">
                <ul>
                    <li><Link to="/DuAn" className="menu-link">BẤT ĐỘNG SẢN</Link></li>
                    <li><Link to="/TuVan" className="menu-link">TƯ VẤN</Link></li>
                    <li><Link to="/DichVu" className="menu-link">DỊCH VỤ</Link></li>
                    <li><Link to="/LienHe" className="menu-link">LIÊN HỆ</Link></li>
                </ul>
            </div>

            {/* <div className="search">
                <input className="srch" type="search" placeholder="" />
                <button className="btn">Tìm kiếm</button>
            </div> */}
        </div>
    );
}

export default Header;
