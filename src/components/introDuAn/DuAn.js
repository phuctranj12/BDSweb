import '../../styles/duan.css';
import chiaLo from '../assets/image/chiaLo.jpeg';
import DuAn1 from '../assets/image/DuAn1.jpg';
import DuAn2 from '../assets/image/DuAn2.jpg';

function DuAn() {
    return (
        <div className="duAn-container">
            <div className='duAn-header'>
                <h1>Dự án Khu Nhà ở Thôn Đại Vi</h1>
            </div>
            <div className="duAn-img-container">
                <div className="duAn-img-big">
                    <img src={chiaLo} alt="Slide 1" />
                </div>
                <div className="duAn-img-small-container">
                    <img src={DuAn1} alt="Slide 2" />
                    <img src={DuAn2} alt="Slide 3" />
                </div>
            </div>
            <div className='duAn-body'>
                <div className='duAn-body-intro'></div>
            </div>
        </div>
    );
}

export default DuAn;
