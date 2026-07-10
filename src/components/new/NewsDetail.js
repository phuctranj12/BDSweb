import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/newsDetail.css";

const NewsDetail = () => {
    const { state } = useLocation();
    const { news, newsList } = state || {};
    const [currentNews, setCurrentNews] = useState(news);

    // Swapping articles in place must return the reader to the top.
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, [currentNews?.id]);

    if (!currentNews || !newsList) {
        return (
            <div className="u-container article__missing">
                <h1>Không tìm thấy bài viết</h1>
                <p>
                    Có thể bạn đã mở trực tiếp đường dẫn này hoặc tải lại trang. Hãy quay lại
                    trang tin tức để chọn bài viết.
                </p>
                <Link to="/News" className="u-btn u-btn--primary">
                    Về trang tin tức
                </Link>
            </div>
        );
    }

    const suggestions = newsList.filter((item) => item.id !== currentNews.id);

    return (
        <article className="article">
            <div className="u-container">
                <nav className="article__crumbs" aria-label="Đường dẫn">
                    <Link to="/">Trang chủ</Link>
                    <span aria-hidden="true">/</span>
                    <Link to="/News">Tin tức</Link>
                    <span aria-hidden="true">/</span>
                    <span aria-current="page">{currentNews.title}</span>
                </nav>

                <header className="article__head">
                    <p className="u-eyebrow">Thị trường</p>
                    <h1 className="article__title">{currentNews.title}</h1>
                    <p className="article__meta">
                        <time dateTime="2025-01-01">01/01/2025</time>
                    </p>
                </header>

                <figure className="article__hero u-media">
                    <img
                        src={currentNews.image}
                        alt={currentNews.title}
                        loading="eager"
                        decoding="async"
                    />
                </figure>

                <div className="article__layout">
                    <div className="article__body prose">
                        <p>{currentNews.detail}</p>

                        {currentNews.source && (
                            <p className="article__source">
                                Nguồn:{' '}
                                <a
                                    href={currentNews.source.url}
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                >
                                    {currentNews.source.name}
                                </a>
                            </p>
                        )}
                    </div>

                    <aside className="article__aside">
                        <h2 className="article__aside-title">Tin liên quan</h2>
                        <ul className="article__related">
                            {suggestions.slice(0, 4).map((item) => (
                                <li key={item.id}>
                                    <button type="button" onClick={() => setCurrentNews(item)}>
                                        <span className="article__related-media u-media">
                                            <img
                                                src={item.image}
                                                alt=""
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </span>
                                        <span className="article__related-title">{item.title}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>

                <section className="article__more">
                    <h2 className="article__more-title">Có thể bạn quan tâm</h2>
                    <ul className="article__more-grid">
                        {suggestions.slice(0, 3).map((item) => (
                            <li key={item.id}>
                                <button type="button" className="more-card" onClick={() => setCurrentNews(item)}>
                                    <span className="more-card__media u-media">
                                        <img src={item.image} alt="" loading="lazy" decoding="async" />
                                    </span>
                                    <span className="more-card__title">{item.title}</span>
                                    <span className="more-card__excerpt">{item.content}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </article>
    );
};

export default NewsDetail;
