
import { Link } from 'react-router-dom';
import '../../styles/header.css';

function Header() {
    return (
        <div className="navbar2">

            <h2 className="logo">
                <Link to="/" className="logo-link">TRƯỜNG PHÁT</Link>
            </h2>


            <div className="menu">
                <ul>
                    <li><Link to="/DuAn" className="menu-link">BẤT ĐỘNG SẢN</Link></li>
                    <li><Link to="/TuVan" className="menu-link">TƯ VẤN</Link></li>
                    <li><Link to="/DichVu" className="menu-link">DỊCH VỤ</Link></li>
                    <li><Link to="/LienHe" className="menu-link">LIÊN HỆ</Link></li>
                </ul>
            </div>

            <div className="search">
                <input className="srch" type="search" placeholder="" />
                <button className="btn">Tìm kiếm</button>
            </div>
        </div>
    );
}

export default Header;
