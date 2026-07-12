import React from 'react';
import NewsDetail from '../components/new/NewsDetail';
import TuVan from '../components/tuVan/tuVan';
import BodyIntro from '../components/bdsIntroBody/body';
function NewsDetailContent() {
    return (
        <>
            <NewsDetail />
            <TuVan />
            <BodyIntro />
        </>
    );
}

export default NewsDetailContent;
