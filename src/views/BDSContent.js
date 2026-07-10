import React from 'react';
import BodyIntro from '../components/bdsIntroBody/body';
import ProductList from '../components/introDuAn/ProductList';
import DatLich from '../components/tuVan/datLich';
import News from '../components/new/News';

function BDSContent() {
    return (
        <>
            <BodyIntro />
            <ProductList />
            <DatLich />
            <News />
        </>
    );
}

export default BDSContent;
