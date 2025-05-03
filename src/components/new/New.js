import React, { useState } from "react";
import "../../styles/News.css"; // Import file CSS riêng

const newsList = [
    {
        id: 1,
        title: "Thị trường BĐS 2025 khởi sắc",
        image: "/images/news1.jpg",
        content:
            "Năm 2025 được kỳ vọng là năm bùng nổ trở lại của thị trường bất động sản nhờ chính sách tài chính và pháp lý hỗ trợ...",
    },
    {
        id: 2,
        title: "Giá nhà TP.HCM tăng mạnh",
        image: "/images/news2.jpg",
        content:
            "Giá đất nền và căn hộ tại TP.HCM đang tăng trở lại do tín hiệu tích cực từ thị trường và quy hoạch mới...",
    },
];

const News = () => {
    const [selectedNews, setSelectedNews] = useState(null);

    return (
        <div className="news-container">
            {!selectedNews ? (
                <>
                    <h2 className="news-title">Tin Thị Trường Bất Động Sản</h2>
                    <div className="news-list">
                        {newsList.map((item) => (
                            <div
                                key={item.id}
                                className="news-card"
                                onClick={() => setSelectedNews(item)}
                            >
                                <img src={item.image} alt={item.title} />
                                <h3>{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="news-detail">
                    <button onClick={() => setSelectedNews(null)} className="back-btn">
                        ← Quay lại
                    </button>
                    <h2>{selectedNews.title}</h2>
                    <img src={selectedNews.image} alt={selectedNews.title} />
                    <p>{selectedNews.content}</p>
                </div>
            )}
        </div>
    );
};

export default News;
