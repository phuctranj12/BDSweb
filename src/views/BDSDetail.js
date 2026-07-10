import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/bdsDetail.css';
import TuVan from '../components/tuVan/tuVan';
import News from '../components/new/News';

function BDSDetail() {
    const location = useLocation();
    const property = location.state?.property;

    // Reached by deep link or refresh — state is gone, so offer a way back
    // instead of the old bare "No property data available".
    if (!property) {
        return (
            <div className="u-container detail__missing">
                <h1>Không tìm thấy thông tin lô đất</h1>
                <p>
                    Có thể bạn đã mở trực tiếp đường dẫn này hoặc tải lại trang. Hãy quay lại
                    trang dự án để chọn phân khu bạn quan tâm.
                </p>
                <Link to="/DuAn" className="u-btn u-btn--primary">
                    Về trang dự án
                </Link>
            </div>
        );
    }

    return (
        <>
            <article className="detail">
                <div className="u-container">
                    <nav className="detail__crumbs" aria-label="Đường dẫn">
                        <Link to="/">Trang chủ</Link>
                        <span aria-hidden="true">/</span>
                        <Link to="/DuAn">Dự án Đại Vi</Link>
                        <span aria-hidden="true">/</span>
                        <span aria-current="page">Liền kề {property.stt}</span>
                    </nav>

                    <header className="detail__head">
                        <div>
                            <p className="u-eyebrow">Ô đất quy hoạch</p>
                            <h1 className="detail__title">Liền kề {property.stt}</h1>
                            <p className="detail__address">
                                <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                </svg>
                                {property.address}
                            </p>
                        </div>

                        <dl className="detail__stats">
                            <div>
                                <dt>Tổng diện tích</dt>
                                <dd className="tabular">{property.area}</dd>
                            </div>
                            <div>
                                <dt>Số lô đất</dt>
                                <dd className="tabular">{property.soLo}</dd>
                            </div>
                        </dl>
                    </header>

                    <figure className="detail__hero u-media">
                        <img
                            src={property.imageUrl3}
                            alt={`Bản đồ quy hoạch chia lô, phân khu Liền kề ${property.stt}`}
                            loading="eager"
                            decoding="async"
                        />
                    </figure>

                    <div className="detail__layout">
                        <div className="detail__prose prose">
                            <h2>Mô tả phân khu</h2>
                            <p>{property.describe}</p>
                        </div>

                        <aside className="detail__aside">
                            <figure className="detail__plan u-media">
                                <img
                                    src={property.imageUrl2}
                                    alt={`Sơ đồ chi tiết từng lô đất của Liền kề ${property.stt}`}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </figure>
                            <figcaption className="detail__plan-cap">
                                Sơ đồ chi tiết phân lô — Liền kề {property.stt}
                            </figcaption>

                            <div className="detail__actions">
                                <Link to="/LienHe" className="u-btn u-btn--accent">
                                    Đặt lịch xem đất
                                </Link>
                                <Link to="/DuAn" className="u-btn u-btn--outline">
                                    Xem thông tin dự án
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>

            <TuVan />
            <News />
        </>
    );
}

export default BDSDetail;
