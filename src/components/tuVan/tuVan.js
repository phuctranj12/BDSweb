import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/tuvan.css';

const EMPTY = { name: '', email: '', phone: '' };

function Field({ id, label, error, ...inputProps }) {
    const errorId = `${id}-error`;

    return (
        <div className={`field${error ? ' has-error' : ''}`}>
            <label htmlFor={id}>
                {label} <span aria-hidden="true">*</span>
            </label>
            <input
                id={id}
                required
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

function TuVan() {
    const [values, setValues] = useState(EMPTY);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // idle | sending | sent

    const setField = (key) => (e) => {
        setValues((v) => ({ ...v, [key]: e.target.value }));
        if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

    const validate = () => {
        const next = {};
        if (!values.name.trim()) {
            next.name = 'Vui lòng nhập họ tên của bạn.';
        }
        if (!/^\S+@\S+\.\S+$/.test(values.email)) {
            next.email = 'Email chưa đúng định dạng, ví dụ: ten@email.com';
        }
        if (!/^0\d{9}$/.test(values.phone.replace(/\s/g, ''))) {
            next.phone = 'Số điện thoại gồm 10 chữ số, bắt đầu bằng 0.';
        }
        return next;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const found = validate();
        setErrors(found);

        if (Object.keys(found).length > 0) {
            // Land focus on the first failed field rather than making the user
            // hunt for what went wrong.
            document.getElementById(`tv-${Object.keys(found)[0]}`)?.focus();
            return;
        }

        setStatus('sending');
        // No backend yet — replace this timeout with the real POST when it exists.
        setTimeout(() => {
            setStatus('sent');
            setValues(EMPTY);
        }, 700);
    };

    return (
        <section className="consult on-dark">
            <div className="u-container consult__inner">
                <div className="consult__copy">
                    <p className="u-eyebrow">Tư vấn miễn phí</p>
                    <h2 className="consult__title">
                        Để lại thông tin,<br />
                        chúng tôi gọi lại <span className="u-wonk">trong 24h</span>
                    </h2>
                    <p className="consult__lead">
                        Đội ngũ tư vấn của Trường Phát sẽ liên hệ để giải đáp về pháp lý, giá và
                        lịch tham quan dự án — không mất phí, không ràng buộc.
                    </p>
                    <Link to="/LienHe" className="consult__link">
                        Hoặc liên hệ trực tiếp
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>
                    </Link>
                </div>

                <div className="consult__panel">
                    {status === 'sent' ? (
                        <div className="consult__success" role="status">
                            <svg width="40" height="40" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05" />
                            </svg>
                            <h3>Đã nhận thông tin của bạn</h3>
                            <p>Chúng tôi sẽ liên hệ trong vòng 24 giờ làm việc. Cảm ơn bạn đã quan tâm.</p>
                            <button type="button" className="u-btn u-btn--outline" onClick={() => setStatus('idle')}>
                                Gửi thông tin khác
                            </button>
                        </div>
                    ) : (
                        <form className="consult__form" onSubmit={onSubmit} noValidate>
                            <Field
                                id="tv-name"
                                label="Họ và tên"
                                type="text"
                                autoComplete="name"
                                value={values.name}
                                onChange={setField('name')}
                                error={errors.name}
                            />
                            <Field
                                id="tv-email"
                                label="Email"
                                type="email"
                                autoComplete="email"
                                inputMode="email"
                                value={values.email}
                                onChange={setField('email')}
                                error={errors.email}
                            />
                            <Field
                                id="tv-phone"
                                label="Số điện thoại"
                                type="tel"
                                autoComplete="tel"
                                inputMode="numeric"
                                value={values.phone}
                                onChange={setField('phone')}
                                error={errors.phone}
                            />

                            <button
                                type="submit"
                                className="u-btn u-btn--accent consult__submit"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Đang gửi…' : 'Nhận tư vấn'}
                            </button>

                            <p className="consult__note">
                                Thông tin của bạn được bảo mật và chỉ dùng để liên hệ tư vấn.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

export default TuVan;
