import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/bdsDetail.css';
import { LOT_TABLES, formatArea } from '../data/lots';
import TuVan from '../components/tuVan/tuVan';
import News from '../components/new/News';

function BDSDetail() {
    const location = useLocation();
    const property = location.state?.property;
    const table = property ? LOT_TABLES[property.stt] : null;

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
                                <dd className="tabular">
                                    {table ? `${formatArea(table.totalArea)} m²` : property.area}
                                </dd>
                            </div>
                            <div>
                                <dt>Số lô đất</dt>
                                <dd className="tabular">{table ? table.totalCount : property.soLo}</dd>
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
                        <div className="detail__main">
                            <div className="detail__prose prose">
                                <h2>Mô tả phân khu</h2>
                                <p>{property.describe}</p>
                            </div>

                            {table && (
                                <section className="lot-table__section">
                                    <h2 className="lot-table__heading">Bảng phân lô</h2>

                                    <div className="lot-table__scroll">
                                        <table className="lot-table">
                                            <caption className="u-sr-only">
                                                Bảng phân lô chi tiết Liền kề {property.stt}: {table.totalCount} lô,
                                                tổng diện tích {formatArea(table.totalArea)} mét vuông.
                                            </caption>
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="lot-table__num">TT</th>
                                                    <th scope="col">Lô đất</th>
                                                    <th scope="col" className="lot-table__right">Diện tích lô (m²)</th>
                                                    <th scope="col" className="lot-table__right">Số lượng (lô)</th>
                                                    <th scope="col" className="lot-table__right">Diện tích (m²)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {table.rows.map((row, i) => (
                                                    <tr key={row.lots}>
                                                        <td className="lot-table__num tabular">{i + 1}</td>
                                                        <td className="lot-table__lots">{row.lots}</td>
                                                        <td className="lot-table__right tabular">{formatArea(row.area)}</td>
                                                        <td className="lot-table__right tabular">{row.count}</td>
                                                        <td className="lot-table__right tabular">{formatArea(row.total)}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td colSpan={3}>Tổng</td>
                                                    <td className="lot-table__right tabular">{table.totalCount}</td>
                                                    <td className="lot-table__right tabular">{formatArea(table.totalArea)}</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                    <p className="lot-table__note">
                                        Số liệu trích từ bản vẽ quy hoạch chi tiết tỉ lệ 1/500 đã được phê duyệt.
                                    </p>
                                </section>
                            )}
                        </div>

                        <aside className="detail__aside">
                            <div className="detail__summary">
                                <h2 className="detail__summary-title">Liền kề {property.stt}</h2>
                                <dl>
                                    <div>
                                        <dt>Số lô đất</dt>
                                        <dd className="tabular">{property.soLo}</dd>
                                    </div>
                                    <div>
                                        <dt>Tổng diện tích</dt>
                                        {/* Prefer the verified table total over the free-text
                                            `area` string, which was wrong for LK3. */}
                                        <dd className="tabular">
                                            {table ? `${formatArea(table.totalArea)} m²` : property.area}
                                        </dd>
                                    </div>
                                    {table && (
                                        <div>
                                            <dt>Diện tích lô</dt>
                                            <dd className="tabular">
                                                {formatArea(Math.min(...table.rows.map((r) => r.area)))} –{' '}
                                                {formatArea(Math.max(...table.rows.map((r) => r.area)))} m²
                                            </dd>
                                        </div>
                                    )}
                                </dl>
                            </div>

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
