import React, { useState } from 'react';
import useReveal from '../../hooks/useReveal';
import Picture from '../util/Picture';
import '../../styles/ProductList.css';
import img1 from '../assets/image/web/GlobalCity.jpg'
import img2 from '../assets/image/web/VHomeGrand.jpg'
import img3 from '../assets/image/web/Sunshine.jpg'
import img4 from '../assets/image/web/AquaCity.jpg'
import img5 from '../assets/image/web/MasteriCentrePoint.jpg'
import img6 from '../assets/image/web/EcoParkSkyOasis.jpg'
import img7 from '../assets/image/web/CelestaRise.jpg'
import img8 from '../assets/image/web/EmpireCity .jpg'
import img9 from '../assets/image/web/The9Stellars.jpg'
import img10 from '../assets/image/web/VinhomesOceanPark2.jpg'
import img1Webp from '../assets/image/web/GlobalCity.webp'
import img2Webp from '../assets/image/web/VHomeGrand.webp'
import img3Webp from '../assets/image/web/Sunshine.webp'
import img4Webp from '../assets/image/web/AquaCity.webp'
import img5Webp from '../assets/image/web/MasteriCentrePoint.webp'
import img6Webp from '../assets/image/web/EcoParkSkyOasis.webp'
import img7Webp from '../assets/image/web/CelestaRise.webp'
import img8Webp from '../assets/image/web/EmpireCity .webp'
import img9Webp from '../assets/image/web/The9Stellars.webp'
import img10Webp from '../assets/image/web/VinhomesOceanPark2.webp'

const mockProducts = [
    { id: 1, name: "The Global City", location: "An Phú, Thủ Đức", price: "12.8 tỷ", image: img1, imageWebp: img1Webp, description: "Khu đô thị cao cấp phong cách Singapore." },
    { id: 2, name: "Vinhomes Grand Park", location: "Long Bình, Thủ Đức", price: "4.2 tỷ", image: img2, imageWebp: img2Webp, description: "Căn hộ thông minh, tiện nghi với công viên ánh sáng lớn nhất Đông Nam Á." },
    { id: 3, name: "Sunshine City Sài Gòn", location: "Quận 7", price: "6.5 tỷ", image: img3, imageWebp: img3Webp, description: "Căn hộ thông minh, tiện nghi với công viên ánh sáng lớn nhất Đông Nam Á." },
    { id: 4, name: "Aqua City", location: "Biên Hòa", price: "7.8 tỷ", image: img4, imageWebp: img4Webp, description: "Đô thị sinh thái ven sông." },
    { id: 5, name: "Masteri Centre Point", location: "Vinhomes Grand Park", price: "5.3 tỷ", image: img5, imageWebp: img5Webp, description: "Căn hộ cao cấp tiêu chuẩn quốc tế." },
    { id: 6, name: "EcoPark Sky Oasis", location: "Văn Giang", price: "2.7 tỷ", image: img6, imageWebp: img6Webp, description: "Căn hộ cao tầng ven hồ, trong lành, tiện nghi." },
    { id: 7, name: "Celesta Rise", location: "Nhà Bè", price: "3.9 tỷ", image: img7, imageWebp: img7Webp, description: "Căn hộ trung cao cấp gần Phú Mỹ Hưng." },
    { id: 8, name: "Empire City Thủ Thiêm", location: "Thủ Thiêm", price: "18 tỷ", image: img8, imageWebp: img8Webp, description: "Căn hộ siêu sang ven sông Sài Gòn." },
    { id: 9, name: "The 9 Stellars", location: "Quận 9", price: "3.2 tỷ", image: img9, imageWebp: img9Webp, description: "Căn hộ xanh gần Depot Metro." },
    { id: 10, name: "Vinhomes Ocean Park 2", location: "Hưng Yên", price: "4.9 tỷ", image: img10, imageWebp: img10Webp, description: "Đô thị biển hồ, tiện ích resort đỉnh cao." },

];

const ProductListPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const revealRef = useReveal();
    const itemsPerPage = 6;

    const filteredProducts = mockProducts.filter(
        product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const currentProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };


    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <section className="market u-section" ref={revealRef}>
            <div className="u-container">
                <header className="market__head" data-reveal>
                    <div>
                        <p className="u-eyebrow">Thị trường</p>
                        <h2 className="market__title">
                            Bất động sản <span className="u-wonk">nổi bật</span>
                        </h2>
                    </div>

                    <div className="market__search">
                        <label htmlFor="market-q" className="u-sr-only">
                            Tìm kiếm bất động sản theo tên hoặc khu vực
                        </label>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1M12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                        <input
                            id="market-q"
                            type="search"
                            placeholder="Tìm theo tên hoặc khu vực…"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                </header>

                {currentProducts.length === 0 ? (
                    <div className="market__empty">
                        <h3>Không tìm thấy bất động sản phù hợp</h3>
                        <p>Thử từ khoá khác, hoặc xoá bộ lọc để xem toàn bộ danh sách.</p>
                        <button type="button" className="u-btn u-btn--outline" onClick={() => setSearchQuery('')}>
                            Xoá tìm kiếm
                        </button>
                    </div>
                ) : (
                    <ul className="market__grid">
                        {currentProducts.map((product) => (
                            <li key={product.id} className="market-card">
                                <div className="market-card__media u-media u-toned">
                                    <Picture
                                        webp={product.imageWebp}
                                        jpg={product.image}
                                        alt={`${product.name} tại ${product.location}`}
                                        loading="lazy"
                                        decoding="async"
                                        width="640"
                                        height="440"
                                    />
                                    <span className="market-card__price tabular">{product.price}</span>
                                </div>

                                <div className="market-card__body">
                                    <span className="market-card__index tabular" aria-hidden="true">
                                        {String(product.id).padStart(2, '0')}
                                    </span>
                                    <h3 className="market-card__name">{product.name}</h3>
                                    <p className="market-card__location">
                                        <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                        </svg>
                                        {product.location}
                                    </p>
                                    <p className="market-card__desc">{product.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                {totalPages > 1 && (
                    <nav className="pager" aria-label="Phân trang danh sách">
                        <button
                            type="button"
                            className="pager__btn"
                            aria-label="Trang trước"
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                            </svg>
                        </button>

                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                type="button"
                                className={`pager__btn${currentPage === index + 1 ? ' is-active' : ''}`}
                                aria-current={currentPage === index + 1 ? 'page' : undefined}
                                aria-label={`Trang ${index + 1}`}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button
                            type="button"
                            className="pager__btn"
                            aria-label="Trang sau"
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </button>
                    </nav>
                )}
            </div>
        </section>
    );
};

export default ProductListPage;
