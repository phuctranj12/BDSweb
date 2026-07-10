import React, { useState } from 'react';
import '../../styles/lienhe.css';
import '../../styles/tuvan.css'; // shares the .field form primitive

const MAP_SRC =
    'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5415.247803260615!2d105.96568073268288!3d21.118795213475348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zTMO0IEYyNiwgS2h1IMSRw7QgdGjhu4sgUGjDuiDEkGnhu4FuLCBQaOG7kSBjaMO5YSBE4bqtbiwgUGjGsOG7nW5nIMSQw6xuaCBC4bqjbmcsIFRow6BuaCBwaOG7kSBU4burIFPGoW4sIFThu4luaCBC4bqvYyBOaW5oLCBWaeG7h3QgTmFtIA!5e0!3m2!1svi!2s!4v1730885501025!5m2!1svi!2s';

const DETAILS = [
    {
        label: 'Địa chỉ',
        value: 'Lô F26, khu đô thị Phú Điền, phố Chùa Dận, phường Đình Bảng, TP. Từ Sơn, Bắc Ninh',
        icon: <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />,
    },
    {
        label: 'Điện thoại',
        value: '0977 208 988',
        href: 'tel:0977208988',
        icon: <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z" />,
    },
    {
        label: 'Email',
        value: 'Tranmaihuong0303@gmail.com',
        href: 'mailto:Tranmaihuong0303@gmail.com',
        icon: <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />,
    },
];

const EMPTY = { name: '', email: '', phone: '', message: '' };

function Field({ id, label, error, as = 'input', ...inputProps }) {
    const errorId = `${id}-error`;
    const Tag = as;

    return (
        <div className={`field field--light${error ? ' has-error' : ''}`}>
            <label htmlFor={id}>
                {label} {inputProps.required && <span aria-hidden="true">*</span>}
            </label>
            <Tag
                id={id}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? errorId : undefined}
                {...inputProps}
            />
            {error && (
                <p className="field__error" id={errorId} role="alert">
                    {error}
                </p>
            )}
        </div>
    );
}

function LienHe() {
    const [values, setValues] = useState(EMPTY);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle');

    const setField = (key) => (e) => {
        setValues((v) => ({ ...v, [key]: e.target.value }));
        if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const found = {};
        if (!values.name.trim()) found.name = 'Vui lòng nhập họ tên của bạn.';
        if (!/^\S+@\S+\.\S+$/.test(values.email)) found.email = 'Email chưa đúng định dạng.';
        if (!/^0\d{9}$/.test(values.phone.replace(/\s/g, ''))) {
            found.phone = 'Số điện thoại gồm 10 chữ số, bắt đầu bằng 0.';
        }

        setErrors(found);
        if (Object.keys(found).length > 0) {
            document.getElementById(`lh-${Object.keys(found)[0]}`)?.focus();
            return;
        }

        setStatus('sending');
        setTimeout(() => {
            setStatus('sent');
            setValues(EMPTY);
        }, 700);
    };

    return (
        <>
            <header className="page-head">
                <div className="u-container">
                    <p className="u-eyebrow">Liên hệ</p>
                    <h1 className="page-head__title">Nói chuyện với chúng tôi</h1>
                    <p className="page-head__lead">
                        Gọi trực tiếp, gửi form, hoặc ghé văn phòng của chúng tôi tại Từ Sơn.
                        Chúng tôi trả lời mọi yêu cầu trong vòng 24 giờ làm việc.
                    </p>
                </div>
            </header>

            <section className="contact u-section">
                <div className="u-container contact__layout">
                    <div className="contact__info">
                        <ul className="contact__details">
                            {DETAILS.map((item) => (
                                <li key={item.label}>
                                    <span className="contact__icon" aria-hidden="true">
                                        <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                                            {item.icon}
                                        </svg>
                                    </span>
                                    <div>
                                        <span className="contact__label">{item.label}</span>
                                        {item.href ? (
                                            <a className="contact__value u-link" href={item.href}>
                                                {item.value}
                                            </a>
                                        ) : (
                                            <span className="contact__value">{item.value}</span>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="contact__map u-media">
                            <iframe
                                src={MAP_SRC}
                                title="Bản đồ tới văn phòng Trường Phát tại Từ Sơn, Bắc Ninh"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    <div className="contact__form-wrap">
                        {status === 'sent' ? (
                            <div className="contact__success" role="status">
                                <svg width="40" height="40" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05" />
                                </svg>
                                <h2>Đã gửi thành công</h2>
                                <p>Cảm ơn bạn. Chúng tôi sẽ liên hệ trong vòng 24 giờ làm việc.</p>
                                <button type="button" className="u-btn u-btn--outline" onClick={() => setStatus('idle')}>
                                    Gửi yêu cầu khác
                                </button>
                            </div>
                        ) : (
                            <form className="contact__form" onSubmit={onSubmit} noValidate>
                                <h2 className="contact__form-title">Gửi yêu cầu tư vấn</h2>

                                <Field id="lh-name" label="Họ và tên" type="text" required autoComplete="name"
                                    value={values.name} onChange={setField('name')} error={errors.name} />
                                <Field id="lh-email" label="Email" type="email" required autoComplete="email"
                                    inputMode="email" value={values.email} onChange={setField('email')} error={errors.email} />
                                <Field id="lh-phone" label="Số điện thoại" type="tel" required autoComplete="tel"
                                    inputMode="numeric" value={values.phone} onChange={setField('phone')} error={errors.phone} />
                                <Field id="lh-message" label="Nội dung" as="textarea" rows={4}
                                    value={values.message} onChange={setField('message')} />

                                <button type="submit" className="u-btn u-btn--accent contact__submit" disabled={status === 'sending'}>
                                    {status === 'sending' ? 'Đang gửi…' : 'Gửi yêu cầu'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default LienHe;
