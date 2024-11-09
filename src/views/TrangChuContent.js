import BodyIntro from '../components/bdsIntroBody/body';
import TuVan from '../components/tuVan/tuVan';
import Slide from '../components/slide/slide';
import BodyIntro2 from '../components/bdsIntroBody/body2';
function TrangChuContent() {
    return (
        <div className='intro-container'>
            <Slide />
            <hr />
            <BodyIntro />
            <TuVan />
            <BodyIntro2 />
        </div>
    );
}
export default TrangChuContent;