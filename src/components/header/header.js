
// import { Link } from 'react-router-dom';
// import '../../styles/header.css';

// function Header() {
//     return (
//         <div className="navbar2">
//             <div className="icon">
//                 <h2 className="logo">
//                     <Link to="/" className="logo-link">TRƯỜNG PHÁT</Link>
//                 </h2>
//             </div>

//             <div className="menu">
//                 <ul>
//                     <li><Link to="/DuAn" className="menu-link">BẤT ĐỘNG SẢN</Link></li>
//                     <li><Link to="/TuVan" className="menu-link">TƯ VẤN</Link></li>
//                     <li><Link to="/DichVu" className="menu-link">DỊCH VỤ</Link></li>
//                     <li><Link to="/LienHe" className="menu-link">LIÊN HỆ</Link></li>
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
import { NavLink } from 'react-router-dom';
import '../../styles/header.css';

function Header() {
    return (
        <div className="navbar2">
            <div className="icon">
                <h2 className="logo">
                    <NavLink to="/" className="logo-link">TRƯỜNG PHÁT</NavLink>
                </h2>
            </div>

            <div className="menu">
                <ul>
                    <li><NavLink to="/DuAn" className="menu-link" activeClassName="active">BẤT ĐỘNG SẢN</NavLink></li>
                    <li><NavLink to="/TuVan" className="menu-link" activeClassName="active">TƯ VẤN</NavLink></li>
                    <li><NavLink to="/DichVu" className="menu-link" activeClassName="active">DỊCH VỤ</NavLink></li>
                    <li><NavLink to="/LienHe" className="menu-link" activeClassName="active">LIÊN HỆ</NavLink></li>
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
