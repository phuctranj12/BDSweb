// import '../../styles/header.css';

// function Header({ setActiveSection }) {
//     return (
//         <div className="navbar">
//             <div className="icon">
//                 <h2 className="logo" onClick={() => setActiveSection('TRANGCHU')}>BDS</h2>
//             </div>

//             <div className="menu">
//                 <ul>
//                     <li><a href="#" onClick={() => setActiveSection('BDS')}>BẤT ĐỘNG SẢN</a></li>
//                     <li><a href="#" onClick={() => setActiveSection('TUVAN')}>TƯ VẤN</a></li>
//                     <li><a href="#" onClick={() => setActiveSection('DICHVU')}>DỊCH VỤ</a></li>
//                     <li><a href="#" onClick={() => setActiveSection('LIENHE')}>LIÊN HỆ</a></li>
//                 </ul>
//             </div>

//             <div className="search">
//                 <input className="srch" type="search" placeholder="Type To text" />
//                 <button className="btn">Search</button>
//             </div>
//         </div>
//     );
// }

// export default Header;
import { Link } from 'react-router-dom';
import '../../styles/header.css';

function Header() {
    return (
        <div className="navbar">
            <div className="icon">
                <h2 className="logo">
                    <Link to="/" className="logo-link">TRƯỜNG PHÁT</Link>
                </h2>
            </div>

            <div className="menu">
                <ul>
                    <li><Link to="/BDS" className="menu-link">BẤT ĐỘNG SẢN</Link></li>
                    <li><Link to="/TuVan" className="menu-link">TƯ VẤN</Link></li>
                    <li><Link to="/DichVu" className="menu-link">DỊCH VỤ</Link></li>
                    <li><Link to="/LienHe" className="menu-link">LIÊN HỆ</Link></li>
                </ul>
            </div>

            <div className="search">
                <input className="srch" type="search" placeholder="Type To text" />
                <button className="btn">Search</button>
            </div>
        </div>
    );
}

export default Header;
