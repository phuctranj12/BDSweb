import React from 'react';
import TuVan2 from '../components/tuVan/tuVan2';
import DatLich from '../components/tuVan/datLich';
import TuVan from '../components/tuVan/tuVan';
import News from '../components/new/News';

function TuVanContent() {
    return (
        <>
            <TuVan2 />
            <DatLich />
            <TuVan />
            <News />
        </>
    );
}

export default TuVanContent;
