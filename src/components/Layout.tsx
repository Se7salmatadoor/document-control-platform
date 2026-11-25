import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import avatar from '../assets/avatar.png';
import { NAME, ROLE, nav } from '../data/site';

export function Brand() {
    return <Link to="/" className="hp-brand" aria-label={NAME}>
        <img src={avatar} alt="" width="44" height="44" />
        <span><b>{NAME}</b><i>{ROLE}</i></span>
    </Link>;
}

export function Header() {
    return <header className="hp-header">
        <Brand />
        <nav className="hp-nav" aria-label="التنقل">
            {nav.map(item => <NavLink key={item.to} to={item.to} end={item.end}>{item.label}</NavLink>)}
        </nav>
    </header>;
}

export function Footer() {
    return <footer className="hp-footer">
        <Brand />
        <p>نسخة معاينة مؤقتة. لا توجد حسابات أو مدفوعات مفعّلة.</p>
    </footer>;
}

export function Section({ eyebrow, title, children }: { eyebrow?: string; title: string; children: React.ReactNode }) {
    return <section className="hp-section">
        {eyebrow && <p className="hp-eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {children}
    </section>;
}

export function PageTitle({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
    return <section className="hp-pagetitle">
        <p className="hp-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hp-lead">{intro}</p>
    </section>;
}
