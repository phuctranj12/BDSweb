import '../../styles/tuvan.css';

function TuVan() {
    return (
        <div className="login-contain" >
            <div className="login-left">
                <div className="gioithieu">
                    ĐỂ LẠI THÔNG TIN<br />
                    NHẬN TƯ VẤN <br />
                </div>
                <div className="intro">
                    <a className='linkTuVan' href='/LienHe'>Liên hệ</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </div>
            </div>
            <div className="login-right">
                <div className="form-right">
                    <form action="#" method="post">
                        <input required name="name" type="text" placeholder="Tên*" />
                        <input required name="name" type="email" placeholder="Email*" />
                        <input required name="sdt" type="text" placeholder="Số điện thoại*" />
                        <div className="button-register">
                            <button type="submit">Lưu thông tin</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TuVan;
