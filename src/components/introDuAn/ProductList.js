import React, { useState } from 'react';
import '../../styles/ProductList.css';

const mockProducts = [
    { id: 1, name: "The Global City", location: "An Phú, Thủ Đức", price: "12.8 tỷ", image: "https://via.placeholder.com/300x200?text=The+Global+City", description: "Khu đô thị cao cấp phong cách Singapore." },
    { id: 2, name: "Vinhomes Grand Park", location: "Long Bình, Thủ Đức", price: "4.2 tỷ", image: "https://via.placeholder.com/300x200?text=Vinhomes+Grand+Park", description: "Căn hộ thông minh, tiện nghi với công viên ánh sáng lớn nhất Đông Nam Á." },
    { id: 3, name: "Sunshine City Sài Gòn", location: "Quận 7", price: "6.5 tỷ", image: "https://via.placeholder.com/300x200?text=Sunshine+City", description: "Căn hộ thông minh, tiện nghi với công viên ánh sáng lớn nhất Đông Nam Á." },
    { id: 4, name: "Aqua City", location: "Biên Hòa", price: "7.8 tỷ", image: "https://via.placeholder.com/300x200?text=Aqua+City", description: "Đô thị sinh thái ven sông." },
    { id: 5, name: "Masteri Centre Point", location: "Vinhomes Grand Park", price: "5.3 tỷ", image: "https://via.placeholder.com/300x200?text=Masteri+Centre+Point", description: "Căn hộ cao cấp tiêu chuẩn quốc tế." },
    { id: 6, name: "EcoPark Sky Oasis", location: "Văn Giang", price: "2.7 tỷ", image: "https://via.placeholder.com/300x200?text=EcoPark+Sky+Oasis", description: "Căn hộ cao tầng ven hồ, trong lành, tiện nghi." },
    { id: 7, name: "Celesta Rise", location: "Nhà Bè", price: "3.9 tỷ", image: "https://via.placeholder.com/300x200?text=Celesta+Rise", description: "Căn hộ trung cao cấp gần Phú Mỹ Hưng." },
    { id: 8, name: "Empire City Thủ Thiêm", location: "Thủ Thiêm", price: "18 tỷ", image: "https://via.placeholder.com/300x200?text=Empire+City", description: "Căn hộ siêu sang ven sông Sài Gòn." },
    { id: 9, name: "The 9 Stellars", location: "Quận 9", price: "3.2 tỷ", image: "https://via.placeholder.com/300x200?text=The+9+Stellars", description: "Căn hộ xanh gần Depot Metro." },
    { id: 10, name: "Vinhomes Ocean Park 2", location: "Hưng Yên", price: "4.9 tỷ", image: "https://via.placeholder.com/300x200?text=Ocean+Park+2", description: "Đô thị biển hồ, tiện ích resort đỉnh cao." },

];

const ProductListPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
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
        <div className="product-container">
            <h1 className="product-title">Danh sách Bất Động Sản</h1>

            {/* Tìm kiếm */}
            <input
                type="text"
                className="search-input"
                placeholder="Tìm kiếm bất động sản..."
                value={searchQuery}
                onChange={handleSearchChange}
            />

            {/* Danh sách sản phẩm */}
            <div className="product-grid">
                {currentProducts.map((product, index) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-name">{product.name}</div>
                        <div className="product-location">{product.location}</div>
                        <div className="product-price">{product.price}</div>
                        <div className="product-description">{product.description}</div>
                    </div>
                ))}
            </div>

            {/* Phân trang */}
            <div className="pagination">
                <button
                    className="page-button page-button-prev"
                    onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
                >
                    <i className="bi bi-chevron-left"></i>
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    className="page-button page-button-next"
                    onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
                >
                    <i className="bi bi-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default ProductListPage;
