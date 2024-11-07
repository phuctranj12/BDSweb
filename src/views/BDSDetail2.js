import React from 'react';
import { useLocation } from 'react-router-dom';
import BodyIntro2 from '../components/bdsIntroBody/body2';
import '../styles/bdsDetail.css';
import TuVan from '../components/tuVan/tuVan';
function BDSDetail2() {
    const location = useLocation();
    const property = location.state?.property;

    if (!property) return <p>No property data available</p>;

    return (
        <div>
            <div className='bdsDetail-container'>
                <div className='bdsDetail-main'>
                    <img src={property.imageUrl} alt={property.title} />
                    <h1>{property.title}</h1>
                    <p>Địa chỉ: {property.address}</p>
                    <p>Diện tích: {property.area}</p>
                    <p>Giá thuê: {property.price} triệu/tháng</p>
                    <p>{property.describe}</p>
                    <br></br>
                </div>
            </div>
            <TuVan />
            <BodyIntro2 />
        </div>
    );
}
export default BDSDetail2;