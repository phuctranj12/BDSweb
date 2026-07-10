import React from 'react';
import Slide from '../components/slide/slide';
import Stats from '../components/stats/Stats';
import BodyIntro from '../components/bdsIntroBody/body';
import ProductList from '../components/introDuAn/ProductList';
import TuVan from '../components/tuVan/tuVan';
import News from '../components/new/News';

/**
 * Order matters: show the project and the listings while intent is high, then
 * ask for contact details, then offer news as the low-commitment exit.
 */
function TrangChuContent() {
    return (
        <>
            <Slide />
            <Stats />
            <BodyIntro />
            <ProductList />
            <TuVan />
            <News />
        </>
    );
}

export default TrangChuContent;
