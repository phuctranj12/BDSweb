import TuVan from "../components/tuVan/tuVan";
import TuVan2 from "../components/tuVan/tuVan2";
import BodyIntro from "../components/bdsIntroBody/body";
import News from "../components/new/News";
function TuVanContent() {
    return (
        <div>
            <TuVan2 />
            <TuVan />
            <BodyIntro />
            <News />
        </div>
    );
}

export default TuVanContent;
