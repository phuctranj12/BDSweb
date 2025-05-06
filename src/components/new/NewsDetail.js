import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/newsDetail.css";

const NewsDetail = () => {
    const location = useLocation();
    const { state } = location;
    const { news, newsList } = state || {};

    const [rating, setRating] = useState(0);
    const [userRating, setUserRating] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [currentNews, setCurrentNews] = useState(news); // state cho tin hiện tại

    if (!currentNews || !newsList) {
        return <div>Không tìm thấy tin tức!</div>;
    }

    // Loại bỏ tin đang xem ra khỏi danh sách gợi ý và liên quan
    const suggestions = newsList.filter(item => item.id !== currentNews.id);

    const handleRating = (value) => {
        setUserRating(value);
        // Cập nhật trung bình đánh giá (giả lập)
        setRating(((rating * comments.length + value) / (comments.length + 1)).toFixed(1));
    };

    const handleCommentSubmit = () => {
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    };

    // Hàm xử lý khi click vào tin gợi ý hoặc tin liên quan
    const handleSuggestionClick = (suggestedNews) => {
        setCurrentNews(suggestedNews);  // Cập nhật tin chi tiết mới
        setComments([]);  // Xóa bình luận cũ khi chuyển sang tin mới
        setNewComment(""); // Xóa bình luận mới khi chuyển sang tin mới
    };

    return (
        <div className="news-detail-wrapper">

            {/* Phần trái - Tin chính */}
            <div className="news-main" style={{ flex: 3 }}>
                <h2>{currentNews.title}</h2>
                <p><strong>Ngày đăng:</strong> {currentNews.date || "01/01/2025"}</p>
                <p><strong>Lượt xem:</strong> {currentNews.views || Math.floor(Math.random() * 1000)}</p>
                <img
                    src={currentNews.image}
                    alt={currentNews.title}
                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
                <p style={{ marginTop: "20px" }}>{currentNews.detail}</p>

                {/* Phần đánh giá */}
                <div className="rating-section" style={{ marginTop: "30px" }}>
                    <h4>Đánh giá bài viết:</h4>
                    {[1, 2, 3, 4, 5].map(num => (
                        <span
                            key={num}
                            onClick={() => handleRating(num)}
                            style={{
                                fontSize: "24px",
                                cursor: "pointer",
                                color: userRating >= num ? "gold" : "gray",
                            }}
                        >
                            ★
                        </span>
                    ))}
                    <p>Đánh giá trung bình: {rating || "Chưa có"} ⭐</p>
                </div>

                {/* Phần bình luận */}
                <div className="comment-section" style={{ marginTop: "30px" }}>
                    <h4>Bình luận bài viết:</h4>
                    <textarea
                        rows="3"
                        placeholder="Nhập bình luận..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
                    ></textarea>
                    <button onClick={handleCommentSubmit}>Gửi bình luận</button>

                    <ul style={{ marginTop: "20px" }}>
                        {comments.map((cmt, idx) => (
                            <li key={idx} style={{ padding: "5px 0", borderBottom: "1px solid #ccc" }}>{cmt}</li>
                        ))}
                    </ul>
                </div>

                {/* Gợi ý dưới */}
                <div className="related-articles" style={{ marginTop: "40px" }}>
                    <h3>Có thể bạn quan tâm</h3>
                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                        {suggestions.slice(0, 3).map(sug => (
                            <div key={sug.id} style={{ width: "30%", border: "1px solid #eee", borderRadius: "8px", padding: "10px", cursor: "pointer" }} onClick={() => handleSuggestionClick(sug)}>
                                <img src={sug.image} alt={sug.title} style={{ width: "100%", height: "auto" }} />
                                <h5>{sug.title}</h5>
                                <p style={{ fontSize: "14px" }}>{sug.summary || sug.detail.slice(0, 60) + "..."}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Phần phải - Tin liên quan */}
            <div className="news-suggestions" style={{ flex: 1, borderLeft: "1px solid #ccc", paddingLeft: "20px" }}>
                <h3>Tin liên quan</h3>
                {suggestions.slice(0, 5).map(sug => (
                    <div key={sug.id} style={{ marginBottom: "20px", cursor: "pointer" }} onClick={() => handleSuggestionClick(sug)}>
                        <img src={sug.image} alt={sug.title} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }} />
                        <p style={{ margin: "5px 0" }}>{sug.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsDetail;
