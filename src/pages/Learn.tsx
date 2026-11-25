import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/banner.jpg';
import { lessons } from '../data/lessons';
import { PageTitle, Section } from '../components/Layout';

export function Learn() {
    return <>
        <PageTitle eyebrow="التعلّم" title="حلقات قصيرة عن Document Control" intro="كل حلقة تشرح مفهوماً واحداً بمثال بسيط. بيانات المثال تجريبية، ولا تحتوي على بيانات أي جهة عمل." />
        <img className="hp-banner" src={banner} alt="بانر القناة: Hussein Abdallah، Document Control" />
        <Section eyebrow="الحلقات" title="الحلقات">
            <div className="hp-eps">
                {lessons.map(l => {
                    const body = <>
                        <span className="hp-num">{l.n}</span>
                        <div><h3>{l.title}</h3><p>{l.summary}</p></div>
                        <em>{l.status === 'available' ? 'متاحة للمعاينة' : 'قيد التخطيط'}</em>
                    </>;
                    return l.status === 'available'
                        ? <Link key={l.slug} to={`/learn/${l.slug}`} className="hp-ep hp-ep-link">{body}</Link>
                        : <article key={l.slug} className="hp-ep">{body}</article>;
                })}
            </div>
        </Section>
        <Section eyebrow="الكورسات" title="كورسات كاملة">
            <div className="hp-card hp-soon"><h3>قريباً</h3><p>لم يُحدد محتوى أو سعر أي كورس بعد. لن يُفعّل التسجيل أو الدفع قبل الاتفاق على التفاصيل.</p></div>
        </Section>
    </>;
}
