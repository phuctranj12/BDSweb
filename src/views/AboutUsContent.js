import '../styles/aboutUs.css';
import '../components/assets/image/s1.JPG'
import BodyIntro from "../components/bdsIntroBody/body";
function AboutUsContent() {
    return (
        <div>
            <div class="aboutUs-container">
                <h1>CÔNG TY TNHH TRƯỜNG PHÁT TỪ SƠN</h1>
                <p>Chào mừng đến với công ty chúng tôi, một doanh nghiệp uy tín trong ngành xây dựng và bất động sản. Được thành lập từ ngày 20 tháng 05 năm 2008, công ty chúng tôi hoạt động dưới sự quản lý của <strong>Tạ Thị Minh Lộc</strong> và <strong>Nguyễn Trọng Đại</strong>, với trụ sở tại <em>Lô F26, Khu đô thị Phú Điền, Phố Chùa Dận, Phường Đình Bảng, Thành phố Từ Sơn, Tỉnh Bắc Ninh, Việt Nam</em>.</p>
                <br></br>
                <a href='/TruongPhatInfor.pdf' target='_blank'>Xem chi tiết Giấy chứng nhận đăng ký doanh nghiệp</a><br />
                <h1>Thông Tin Doanh Nghiệp</h1>
                <div class="info-table">
                    <div class="info-row">
                        <div class="info-label">
                            <span class="icon-aboutus">#</span> Mã số thuế
                        </div>
                        <div class="info-value">2300324841</div>
                    </div>
                    <div class="info-row">
                        <div class="info-label">
                            <span class="icon-aboutus"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                            </svg></span> Địa chỉ
                        </div>
                        <div class="info-value">Lô F26, Khu đô thị Phú Điền, Phố chùa Dận, Phường Đình Bảng, Thành phố Từ Sơn, Tỉnh Bắc Ninh, Việt Nam</div>
                    </div>
                    <div class="info-row">
                        <div class="info-label">
                            <span class="icon-aboutus"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg></span> Người đại diện
                        </div>
                        <div class="info-value">TẠ THỊ MINH LỘC NGUYỄN TRỌNG ĐẠI</div>
                    </div>
                    <div class="info-row">
                        <div class="info-label">
                            <span class="icon-aboutus"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg></span> Điện thoại
                        </div>
                        <div class="info-value">
                            0913 390 979
                        </div>
                    </div>
                    <div class="info-row">
                        <div class="info-label">
                            <span class="icon-aboutus"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-week-fill" viewBox="0 0 16 16">
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5m9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5M8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM3 10.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                            </svg></span> Ngày hoạt động
                        </div>
                        <div class="info-value">2008-05-20</div>
                    </div>
                    <div class="info-row">
                        <div class="info-label">
                            <span class="icon-aboutus"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                            </svg></span> Quản lý bởi
                        </div>
                        <div class="info-value">Chi cục Thuế khu vực Từ Sơn - Yên Phong</div>
                    </div>
                    <div class="info-row">
                        <div class="info-label">
                            <span class="icon-aboutus"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building-fill-check" viewBox="0 0 16 16">
                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514" />
                                <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7.256A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-3.59 1.787A.5.5 0 0 0 9 9.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .39-.187A4.5 4.5 0 0 0 8.027 12H6.5a.5.5 0 0 0-.5.5V16H3a1 1 0 0 1-1-1zm2 1.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m3 0v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5M7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5M4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                            </svg></span> Loại hình DN
                        </div>
                        <div class="info-value">Công ty trách nhiệm hữu hạn 2 thành viên trở lên ngoài NN</div>
                    </div>
                    <div class="info-row">
                        <div class="info-label">
                            <span class="icon-aboutus"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-lg" viewBox="0 0 16 16">
                                <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0" />
                            </svg></span> Tình trạng
                        </div>
                        <div class="info-value">Đang hoạt động (đã được cấp GCN ĐKTT)</div>
                    </div>
                </div>


                <h1>Ngành nghề kinh doanh</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Mã</th>
                            <th>Ngành</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0810</td>
                            <td>Khai thác đá, cát, sỏi, đất sét</td>
                        </tr>
                        <tr>
                            <td>4100</td>
                            <td>Xây dựng nhà các loại</td>
                        </tr>
                        <tr>
                            <td>4210</td>
                            <td>Xây dựng công trình đường sắt và đường bộ</td>
                        </tr>
                        <tr>
                            <td>4220</td>
                            <td>Xây dựng công trình công ích</td>
                        </tr>
                        <tr>
                            <td>4290</td>
                            <td>Xây dựng công trình kỹ thuật dân dụng khác</td>
                        </tr>
                        <tr>
                            <td>4311</td>
                            <td>Phá dỡ</td>
                        </tr>
                        <tr>
                            <td>4312</td>
                            <td>Chuẩn bị mặt bằng</td>
                        </tr>
                        <tr>
                            <td>4321</td>
                            <td>Lắp đặt hệ thống điện</td>
                        </tr>
                        <tr>
                            <td>4322</td>
                            <td>Lắp đặt hệ thống cấp, thoát nước, lò sưởi và điều hoà không khí</td>
                        </tr>
                        <tr>
                            <td>4329</td>
                            <td>Lắp đặt hệ thống xây dựng khác</td>
                        </tr>
                        <tr>
                            <td>4330</td>
                            <td>Hoàn thiện công trình xây dựng</td>
                        </tr>
                        <tr>
                            <td>4390</td>
                            <td>Hoạt động xây dựng chuyên dụng khác</td>
                        </tr>
                        <tr>
                            <td>5210</td>
                            <td>Kho bãi và lưu giữ hàng hóa</td>
                        </tr>
                        <tr>
                            <td>5224</td>
                            <td>Bốc xếp hàng hóa</td>
                        </tr>
                        <tr>
                            <td>6810</td>
                            <td style={{ fontWeight: 'bold' }}>Kinh doanh bất động sản, quyền sử dụng đất thuộc chủ sở hữu, chủ sử dụng hoặc đi thuê</td>
                        </tr>
                        <tr>
                            <td>6820</td>
                            <td>Tư vấn, môi giới, đấu giá bất động sản, đấu giá quyền sử dụng đất</td>
                        </tr>
                        <tr>
                            <td>7110</td>
                            <td>Hoạt động kiến trúc và tư vấn kỹ thuật có liên quan</td>
                        </tr>
                        <tr>
                            <td>7410</td>
                            <td>Hoạt động thiết kế chuyên dụng</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <BodyIntro />
        </div>
    );
}
export default AboutUsContent;