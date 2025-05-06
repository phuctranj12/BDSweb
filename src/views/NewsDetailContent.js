import NewsDetail from "../components/new/NewsDetail";
import News from "../components/new/News";
import BodyIntro from "../components/bdsIntroBody/body";
import TuVan from '../components/tuVan/tuVan';
function NewsContent() {
    return (<div>
        <NewsDetail />
        <News />
        <BodyIntro />
        <TuVan />
    </div>);
}

export default NewsContent;
