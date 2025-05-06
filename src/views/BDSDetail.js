import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/bdsDetail.css';
import TuVan from '../components/tuVan/tuVan';
import News from "../components/new/News";
function BDSDetail() {
    const location = useLocation();
    const property = location.state?.property;

    if (!property) return <p>No property data available</p>;

    return (
        <div>
            <div className='bdsDetail-container'>
                <div className='bdsDetail-main'>
                    <img src={property.imageUrl3} alt={property.title} />
                    <div className="bdsDetail-header">Ô Đất Quy Hoạch LK{property.stt}</div>
                    <p>Địa chỉ: {property.address}</p>
                    <p>Tổng diện tích: {property.area}</p>
                    <p>Số lượng lô đất : {property.soLo}</p>
                    <img className='img-bdsDetail' src={property.imageUrl2} />
                    <p>{property.describe}</p>
                    <a href='/DuAn'><button className='btn-bdsDetail'>Xem thông tin dự án</button></a>
                    <br></br>
                </div>
            </div>
            <TuVan />
            <News />
        </div>
    );
}
export default BDSDetail;