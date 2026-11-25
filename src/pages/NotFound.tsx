import React from 'react';
import { Link } from 'react-router-dom';
import { PageTitle } from '../components/Layout';

export function NotFound() {
    return <>
        <PageTitle eyebrow="٤٠٤" title="الصفحة غير موجودة" intro="الرابط ده مش موجود أو الحلقة لسه ما اتنشرتش." />
        <div className="hp-actions"><Link to="/" className="hp-btn hp-btn-gold">الرئيسية</Link><Link to="/learn" className="hp-btn hp-btn-line">الحلقات</Link></div>
    </>;
}
