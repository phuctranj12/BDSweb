import React from "react";
import { useLocation } from "react-router-dom";
import "../../styles/newsDetail.css";
const NewsDetail = () => {
    const location = useLocation();
    const { state: news } = location;

    if (!news) {
        return <div>Không tìm thấy tin tức!</div>;
    }

    return (
        <div className="news-detail-container">
            <h2>{news.title}</h2>
            <img src={news.image} alt={news.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            <p>{news.detail}</p>
        </div>
    );
};

export default NewsDetail;
