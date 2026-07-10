import React from 'react';
import '../../styles/stats.css';

const STATS = [
    { value: '2008', label: 'Năm thành lập' },
    { value: '235', label: 'Thửa đất ở' },
    { value: '59.935', label: 'm² tổng diện tích' },
    { value: '100%', label: 'Pháp lý hoàn thiện' },
];

function Stats() {
    return (
        <section className="stats on-dark" aria-label="Con số nổi bật">
            <div className="u-container">
                <dl className="stats__grid" data-reveal-stagger>
                    {STATS.map((stat) => (
                        <div className="stats__item" key={stat.label} data-reveal>
                            <dt className="stats__value tabular">{stat.value}</dt>
                            <dd className="stats__label">{stat.label}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}

export default Stats;
