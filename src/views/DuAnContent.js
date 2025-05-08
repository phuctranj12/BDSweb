import DuAn from "../components/introDuAn/DuAn";
import BodyIntro from "../components/bdsIntroBody/body";
import TuVan from "../components/tuVan/tuVan";
import News from "../components/new/News";
import AboutUsContent from "./AboutUsContent";
function DuAnContent() {
    return (
        <div>
            <DuAn />
            <AboutUsContent />
            <BodyIntro />
            <TuVan />
            <News />
        </div>
    );
}
export default DuAnContent;