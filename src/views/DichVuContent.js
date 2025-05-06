import DichVu from '../components/tuVan/dichvu';
import BodyIntro from '../components/bdsIntroBody/body';
import DatLich from '../components/tuVan/datLich';
import News from "../components/new/News";
function DichVuContent() {
    return (<div>
        <DichVu />
        <DatLich />
        <BodyIntro />
        <News />
    </div>);
}

export default DichVuContent;
