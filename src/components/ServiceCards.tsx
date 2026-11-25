import React from 'react';
import { services } from '../data/site';

export function ServiceCards() {
    return <div className="hp-grid">
        {services.map(s => <article key={s.n} className="hp-card"><span className="hp-num">{s.n}</span><h3>{s.title}</h3><p>{s.body}</p></article>)}
    </div>;
}
