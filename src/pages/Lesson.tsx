import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { lessons } from '../data/lessons';
import { PageTitle, Section } from '../components/Layout';
import { CopyButton } from '../components/CopyButton';
import { EpisodePlayer } from '../components/EpisodePlayer';
import { NotFound } from './NotFound';

export function Lesson() {
    const { slug } = useParams();
    const lesson = lessons.find(l => l.slug === slug && l.status === 'available');
    if (!lesson || !lesson.video) return <NotFound />;
    const idx = lessons.indexOf(lesson);
    const next = lessons[idx + 1];
    return <>
        <PageTitle eyebrow={`الحلقة ${lesson.n}`} title={lesson.title} intro="بيانات المثال تجريبية، ولا تحتوي على بيانات أي جهة عمل." />
        <Section title="شاهد الحلقة">
            <div className="hp-player"><EpisodePlayer src={lesson.video} title={lesson.title} /></div>
            <p className="hp-note">الصوت في هذه الحلقة بصوت اصطناعي (AI). الحلقة ضمن معاينة مؤقتة، والفيديو غير محمي من التحميل أو المشاركة.</p>
        </Section>
        {lesson.formula && <Section title="الصيغة المستخدمة">
            <p>{lesson.explain}</p>
            <div className="hp-code" dir="ltr"><code>{lesson.formula}</code><CopyButton text={lesson.formula} /></div>
            {lesson.rows && <div className="hp-table" role="table" aria-label="مثال بيانات تجريبية">
                <div role="row" className="hp-tr hp-th"><span>Trans. No</span><span>Sent</span><span>Reply</span><span>Days</span></div>
                {lesson.rows.map(r => <div role="row" className="hp-tr" key={r.no}><span>{r.no}</span><span>{r.sent}</span><span>{r.reply}</span><b>{r.days}</b></div>)}
            </div>}
            {lesson.caveat && <p className="hp-note">{lesson.caveat}</p>}
        </Section>}
        <nav className="hp-actions hp-lessonnav" aria-label="الحلقات">
            <Link to="/learn" className="hp-btn hp-btn-line">كل الحلقات</Link>
            {next && <span className="hp-note">الحلقة القادمة: {next.title} ({next.status === 'planned' ? 'قيد التخطيط' : 'متاحة'})</span>}
        </nav>
    </>;
}
