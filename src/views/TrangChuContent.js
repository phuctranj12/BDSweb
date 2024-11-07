import BodyIntro from '../components/bdsIntroBody/body';
import TuVan from '../components/tuVan/tuVan';
import Slide from '../components/slide/slide';
function TrangChuContent() {
    return (
        <div className='intro-container'>
            <Slide />
            <hr />
            <BodyIntro />
            <TuVan />
        </div>
    );
}
export default TrangChuContent;