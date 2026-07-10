import React from 'react';
import News from '../components/new/News';
import TuVan from '../components/tuVan/tuVan';

function NewsContent() {
    return (
        <>
            <header className="page-head">
                <div className="u-container">
                    <p className="u-eyebrow">Tin tức</p>
                    <h1 className="page-head__title">Bản tin bất động sản</h1>
                    <p className="page-head__lead">
                        Cập nhật thị trường, chính sách và xu hướng đầu tư bất động sản Việt Nam.
                    </p>
                </div>
            </header>

            <News />
            <TuVan />
        </>
    );
}

export default NewsContent;
