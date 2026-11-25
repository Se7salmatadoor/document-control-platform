import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.png';
import poster from '../assets/poster.jpg';
import { stats } from '../data/site';
import { firstLesson } from '../data/lessons';
import { Section } from '../components/Layout';
import { ServiceCards } from '../components/ServiceCards';

export function Home() {
    return <>
        <section className="hp-hero">
            <div className="hp-hero-text">
                <p className="hp-eyebrow">إدارة الوثائق الهندسية</p>
                <h1>وثائق مشروعك<br />تحت السيطرة.</h1>
                <p className="hp-lead">أنا حسين عبدالله، متخصص في Document Control. أساعد الفرق على تنظيم المستندات ومتابعة الـTransmittals، وأشرح اللي بشتغل بيه في حلقات قصيرة بالعربي.</p>
                <div className="hp-actions">
                    <Link to={`/learn/${firstLesson.slug}`} className="hp-btn hp-btn-gold">شاهد الحلقة الأولى</Link>
                    <Link to="/services" className="hp-btn hp-btn-line">الخدمات</Link>
                </div>
            </div>
            <div className="hp-hero-art"><img src={avatar} alt="شعار حسين عبدالله: مستند عليه حرف H داخل مدار ذهبي" /></div>
        </section>

        <div className="hp-stats">
            {stats.map(s => <div key={s.label}><b dir="auto">{s.value}</b><span>{s.label}</span></div>)}
        </div>

        <Section eyebrow="الخدمات" title="إيه اللي أقدر أساعد فيه">
            <ServiceCards />
            <p className="hp-note">الأسعار ونطاق العمل لكل خدمة لم تُحدد بعد.</p>
        </Section>

        <Section eyebrow="التعلّم" title="حلقة جديدة، مفهوم واحد">
            <div className="hp-feature">
                <img src={poster} alt="لقطة من الحلقة الأولى: عمود أيام الانتظار في جدول Transmittals" />
                <div>
                    <p className="hp-tag">الحلقة الأولى، مدتها {firstLesson.duration}</p>
                    <h3>{firstLesson.title}</h3>
                    <p>عمود واحد يحسب كام يوم المستند مستني رد. مثال بيانات تجريبية، والصيغة مختبرة.</p>
                    <Link to={`/learn/${firstLesson.slug}`} className="hp-btn hp-btn-gold">افتح الحلقة</Link>
                </div>
            </div>
        </Section>
    </>;
}
