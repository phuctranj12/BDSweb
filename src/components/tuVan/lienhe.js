import '../../styles/lienhe.css';
function LienHe() {
    return (
        <div className="lienhe-container">
            <div className="lienhe-header">
                <div className="lienhe-header-intro">
                    Liên Hệ Với Chúng Tôi
                </div>
            </div>
            <div className="lienhe-content">
                <div className="content-left">
                    <div className='content-info' style={{ marginRight: "16px", marginLeft: "8px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-map-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.5.5 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.5.5 0 0 0-.196 0zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1z" />
                        </svg>
                        <div className='content-infor-r'>Lô F26 , khu đô thị Phú Điền phố Chùa Dận , phường Đình Bảng , thành phố Từ Sơn Bắc Ninh</div>
                    </div>
                    <div className='content-info'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone-vibrate-fill" viewBox="0 0 16 16">
                            <path d="M4 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0M1.807 4.734a.5.5 0 1 0-.884-.468A8 8 0 0 0 0 8c0 1.347.334 2.618.923 3.734a.5.5 0 1 0 .884-.468A7 7 0 0 1 1 8c0-1.18.292-2.292.807-3.266m13.27-.468a.5.5 0 0 0-.884.468C14.708 5.708 15 6.819 15 8c0 1.18-.292 2.292-.807 3.266a.5.5 0 0 0 .884.468A8 8 0 0 0 16 8a8 8 0 0 0-.923-3.734M3.34 6.182a.5.5 0 1 0-.93-.364A6 6 0 0 0 2 8c0 .769.145 1.505.41 2.182a.5.5 0 1 0 .93-.364A5 5 0 0 1 3 8c0-.642.12-1.255.34-1.818m10.25-.364a.5.5 0 0 0-.93.364c.22.563.34 1.176.34 1.818s-.12 1.255-.34 1.818a.5.5 0 0 0 .93.364C13.856 9.505 14 8.769 14 8s-.145-1.505-.41-2.182" />
                        </svg>
                        <div className='content-infor-r'>0913390979</div>
                    </div>
                    <div className='content-info'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                        </svg>
                        <div className='content-infor-r'>huongg@gmail.com</div>
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
                <div className="content-right">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5415.247803260615!2d105.96568073268288!3d21.118795213475348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zTMO0IEYyNiwgS2h1IMSRw7QgdGjhu4sgUGjDuiDEkGnhu4FuLCBQaOG7kSBjaMO5YSBE4bqtbiwgUGjGsOG7nW5nIMSQw6xuaCBC4bqjbmcsIFRow6BuaCBwaOG7kSBU4burIFPGoW4sIFThu4luaCBC4bqvYyBOaW5oLCBWaeG7h3QgTmFtIA!5e0!3m2!1svi!2s!4v1730885501025!5m2!1svi!2s"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div >
    );
}

export default LienHe;
