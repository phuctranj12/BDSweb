/**
 * Bảng phân lô từng phân khu Liền kề, chép từ bản vẽ quy hoạch chi tiết 1/500.
 * Trước đây đây là ảnh chụp bảng (lk1..lk6.png) — không đọc được trên mobile,
 * không copy được, không cho screen reader.
 *
 * Hai chỗ lệch so với ảnh gốc, đã đối chiếu bằng phép cộng:
 *   - LK4-21: ảnh ghi diện tích 86.25 nhưng cột thành tiền ghi 85.25.
 *     Tổng LK4 = 3852.05 chỉ khớp khi dùng 86.25.
 *   - LK5-44,53: ký hiệu "," nhưng số lượng là 10 lô → phải là dải 44...53.
 *
 * `verifyLotTable()` bên dưới kiểm tra lại tổng mỗi lần chạy test.
 */

export const LOT_TABLES = {
    1: {
        rows: [
            { lots: 'LK1-1, 15, 16, 30', area: 151, count: 4, total: 604 },
            { lots: 'LK1-2…14, LK1-17…29', area: 100, count: 26, total: 2600 },
        ],
        totalCount: 30,
        totalArea: 3204,
    },
    2: {
        rows: [
            { lots: 'LK2-1, 59', area: 155.5, count: 2, total: 311 },
            { lots: 'LK2-2…14, LK2-17…30, LK2-33…43, LK2-46…58', area: 100, count: 51, total: 5100 },
            { lots: 'LK2-15, 16, 44, 45', area: 98, count: 4, total: 392 },
            { lots: 'LK2-31', area: 125.3, count: 1, total: 125.3 },
            { lots: 'LK2-32', area: 224.1, count: 1, total: 224.1 },
        ],
        totalCount: 59,
        totalArea: 6152.4,
    },
    3: {
        rows: [
            { lots: 'LK3-1, 39', area: 155.5, count: 2, total: 311 },
            { lots: 'LK3-2…8, LK3-11…18, LK3-21…29, LK3-32…38', area: 100, count: 31, total: 3100 },
            { lots: 'LK3-9, 10, 30, 31', area: 98, count: 4, total: 392 },
            { lots: 'LK3-19', area: 157.9, count: 1, total: 157.9 },
            { lots: 'LK3-20', area: 92.1, count: 1, total: 92.1 },
        ],
        totalCount: 39,
        totalArea: 4053,
    },
    4: {
        rows: [
            { lots: 'LK4-1', area: 127.9, count: 1, total: 127.9 },
            { lots: 'LK4-2…7, LK4-10…19', area: 99, count: 16, total: 1584 },
            { lots: 'LK4-8, 9', area: 97, count: 2, total: 194 },
            { lots: 'LK4-20', area: 94.5, count: 1, total: 94.5 },
            // Bản gốc ghi thành tiền 85.25; tổng chỉ khớp với 86.25.
            { lots: 'LK4-21', area: 86.25, count: 1, total: 86.25 },
            { lots: 'LK4-22…31', area: 90.75, count: 10, total: 907.5 },
            { lots: 'LK4-32', area: 88.75, count: 1, total: 88.75 },
            { lots: 'LK4-33', area: 94.25, count: 1, total: 94.25 },
            { lots: 'LK4-34…39', area: 96.25, count: 6, total: 577.5 },
            { lots: 'LK4-40', area: 97.4, count: 1, total: 97.4 },
        ],
        totalCount: 40,
        totalArea: 3852.05,
    },
    5: {
        rows: [
            { lots: 'LK5-1', area: 130.5, count: 1, total: 130.5 },
            { lots: 'LK5-2…11', area: 99, count: 10, total: 990 },
            { lots: 'LK5-12', area: 97, count: 1, total: 97 },
            { lots: 'LK5-13', area: 98, count: 1, total: 98 },
            { lots: 'LK5-14…26, LK5-29…37', area: 100, count: 22, total: 2200 },
            { lots: 'LK5-27, 28', area: 155.5, count: 2, total: 311 },
            { lots: 'LK5-38', area: 99.7, count: 1, total: 99.7 },
            { lots: 'LK5-39', area: 99, count: 1, total: 99 },
            { lots: 'LK5-40', area: 98, count: 1, total: 98 },
            { lots: 'LK5-41', area: 96.5, count: 1, total: 96.5 },
            { lots: 'LK5-42', area: 92.7, count: 1, total: 92.7 },
            { lots: 'LK5-43', area: 87.65, count: 1, total: 87.65 },
            { lots: 'LK5-44…53', area: 89.65, count: 10, total: 896.5 },
            { lots: 'LK5-54', area: 117.75, count: 1, total: 117.75 },
        ],
        totalCount: 54,
        totalArea: 5414.3,
    },
    6: {
        rows: [
            { lots: 'LK6-1', area: 107.7, count: 1, total: 107.7 },
            { lots: 'LK6-2', area: 104.5, count: 1, total: 104.5 },
            { lots: 'LK6-3', area: 102.4, count: 1, total: 102.4 },
            { lots: 'LK6-4', area: 97.7, count: 1, total: 97.7 },
            { lots: 'LK6-5', area: 90.2, count: 1, total: 90.2 },
            { lots: 'LK6-6', area: 119, count: 1, total: 119 },
            { lots: 'LK6-7', area: 96.1, count: 1, total: 96.1 },
            { lots: 'LK6-8', area: 80.3, count: 1, total: 80.3 },
            { lots: 'LK6-9', area: 85.9, count: 1, total: 85.9 },
            { lots: 'LK6-10', area: 82.5, count: 1, total: 82.5 },
            { lots: 'LK6-11', area: 94.3, count: 1, total: 94.3 },
            { lots: 'LK6-12', area: 99.6, count: 1, total: 99.6 },
            { lots: 'LK6-13', area: 103.6, count: 1, total: 103.6 },
        ],
        totalCount: 13,
        totalArea: 1263.8,
    },
};

/** Định dạng số theo chuẩn Việt Nam: 6.152,4 */
export const formatArea = (n) =>
    n.toLocaleString('vi-VN', { minimumFractionDigits: 0, maximumFractionDigits: 2 });

/**
 * Kiểm tra tính nhất quán của một bảng: mỗi dòng phải có area × count = total,
 * và tổng các dòng phải bằng totalCount / totalArea.
 * Trả về mảng lỗi (rỗng nghĩa là khớp).
 */
export function verifyLotTable(stt) {
    const t = LOT_TABLES[stt];
    const errors = [];
    const round = (n) => Math.round(n * 100) / 100;

    t.rows.forEach((r, i) => {
        if (round(r.area * r.count) !== round(r.total)) {
            errors.push(`LK${stt} dòng ${i + 1}: ${r.area} × ${r.count} = ${round(r.area * r.count)}, ghi ${r.total}`);
        }
    });

    const sumCount = t.rows.reduce((a, r) => a + r.count, 0);
    const sumArea = round(t.rows.reduce((a, r) => a + r.total, 0));

    if (sumCount !== t.totalCount) errors.push(`LK${stt}: tổng số lô = ${sumCount}, ghi ${t.totalCount}`);
    if (sumArea !== round(t.totalArea)) errors.push(`LK${stt}: tổng diện tích = ${sumArea}, ghi ${t.totalArea}`);

    return errors;
}
