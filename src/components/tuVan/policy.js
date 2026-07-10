import React from 'react';
import '../../styles/policy.css';

const POLICIES = [
    {
        id: 'bao-mat',
        title: 'Chính sách bảo mật',
        body: 'Công ty cam kết bảo mật thông tin cá nhân của khách hàng. Chúng tôi thu thập, lưu trữ và sử dụng thông tin theo đúng quy định của pháp luật. Thông tin của bạn sẽ không được chia sẻ cho bất kỳ bên thứ ba nào nếu không có sự đồng ý của bạn, trừ khi có yêu cầu từ cơ quan chức năng hoặc theo quy định của pháp luật.',
    },
    {
        id: 'dat-coc',
        title: 'Chính sách đặt cọc',
        body: 'Khi khách hàng muốn đặt mua hoặc thuê bất động sản, chúng tôi yêu cầu một khoản tiền đặt cọc để giữ chỗ. Khoản tiền này sẽ được trừ vào tổng số tiền thanh toán khi hoàn tất giao dịch. Nếu khách hàng huỷ giao dịch mà không có lý do hợp lý, khoản đặt cọc có thể không được hoàn trả. Quy trình đặt cọc được thực hiện minh bạch và có biên nhận.',
    },
    {
        id: 'hoan-tra',
        title: 'Chính sách hoàn trả',
        body: 'Trong trường hợp khách hàng quyết định không tiếp tục giao dịch trước khi ký kết hợp đồng chính thức, chúng tôi sẽ xem xét hoàn trả một phần hoặc toàn bộ khoản tiền đã thanh toán tuỳ theo từng trường hợp cụ thể. Việc hoàn trả dựa trên các điều khoản thoả thuận trong hợp đồng đặt cọc và tuân thủ quy định của pháp luật.',
    },
    {
        id: 'ho-tro',
        title: 'Chính sách liên hệ hỗ trợ',
        body: 'Chúng tôi luôn sẵn sàng hỗ trợ khách hàng trong suốt quá trình tìm kiếm, mua bán hoặc thuê bất động sản. Khách hàng có thể liên hệ qua điện thoại, email hoặc đến trực tiếp văn phòng để được giải đáp thắc mắc nhanh chóng và hiệu quả.',
    },
    {
        id: 'khieu-nai',
        title: 'Chính sách giải quyết khiếu nại',
        body: 'Nếu khách hàng có bất kỳ khiếu nại nào liên quan đến dịch vụ hoặc sản phẩm bất động sản của chúng tôi, vui lòng liên hệ ngay với bộ phận chăm sóc khách hàng. Chúng tôi cam kết tiếp nhận và xử lý khiếu nại một cách nghiêm túc, minh bạch và hợp lý, đảm bảo quyền lợi hợp pháp của khách hàng.',
    },
];

function ChinhSach() {
    return (
        <>
            <header className="page-head">
                <div className="u-container">
                    <p className="u-eyebrow">Pháp lý</p>
                    <h1 className="page-head__title">Chính sách</h1>
                    <p className="page-head__lead">
                        Các cam kết của Công ty TNHH Trường Phát Từ Sơn với khách hàng, áp dụng cho
                        mọi giao dịch bất động sản.
                    </p>
                </div>
            </header>

            <section className="policy u-section">
                <div className="u-container policy__layout">
                    {/* In-page table of contents — this page is long. */}
                    <nav className="policy__toc" aria-label="Mục lục chính sách">
                        <h2 className="policy__toc-title">Mục lục</h2>
                        <ul>
                            {POLICIES.map((p) => (
                                <li key={p.id}>
                                    <a href={`#${p.id}`}>{p.title}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="policy__body">
                        {POLICIES.map((p) => (
                            <section key={p.id} id={p.id} className="policy__item">
                                <h2>{p.title}</h2>
                                <p>{p.body}</p>
                            </section>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default ChinhSach;
