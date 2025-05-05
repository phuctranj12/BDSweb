import BodyIntro from '../components/bdsIntroBody/body';
import TuVan from '../components/tuVan/tuVan';
import Slide from '../components/slide/slide';
import NewsContent from './NewsContent';
function TrangChuContent() {
    return (
        <div className='intro-container'>
            <Slide />
            <hr />
            <BodyIntro />
            <TuVan />
            <NewsContent />

        </div>
    );
}
export default TrangChuContent;