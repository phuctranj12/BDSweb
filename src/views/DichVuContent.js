import React from 'react';
import DichVu from '../components/tuVan/dichvu';
import DatLich from '../components/tuVan/datLich';
import TuVan from '../components/tuVan/tuVan';
import News from '../components/new/News';
import BodyIntro from '../components/bdsIntroBody/body';
function DichVuContent() {
    return (
        <>
            <DichVu />
            <DatLich />
            <TuVan />
            <BodyIntro />
            <News />
        </>
    );
}

export default DichVuContent;
