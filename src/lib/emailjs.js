import emailjs from '@emailjs/browser';

// EmailJS gửi mail trực tiếp từ trình duyệt, không cần backend.
// Điền 3 giá trị dưới đây vào file .env.local (xem .env.example):
//   REACT_APP_EMAILJS_SERVICE_ID
//   REACT_APP_EMAILJS_TEMPLATE_ID
//   REACT_APP_EMAILJS_PUBLIC_KEY
// Lấy tại https://dashboard.emailjs.com (Email Services / Email Templates / Account).
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export const emailjsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

/**
 * Gửi một lead (thông tin form) qua EmailJS.
 * `params` là các biến sẽ được thay vào template, ví dụ {{name}}, {{email}}, {{phone}}, {{message}}, {{source}}.
 * Trả về Promise — reject nếu chưa cấu hình hoặc gửi lỗi.
 */
export function sendLead(params) {
    if (!emailjsConfigured) {
        return Promise.reject(new Error('EmailJS chưa được cấu hình (thiếu biến môi trường REACT_APP_EMAILJS_*).'));
    }

    return emailjs.send(SERVICE_ID, TEMPLATE_ID, params, { publicKey: PUBLIC_KEY });
}
