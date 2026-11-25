import React from 'react';
import { pending } from '../data/site';
import { PageTitle, Section } from '../components/Layout';

export function Contact() {
    return <>
        <PageTitle eyebrow="تواصل" title="خلّينا نشتغل سوا" intro="وسيلة التواصل العلنية لم تُحدد بعد. هذه الصفحة ستعرضها بعد اعتمادك لها." />
        <Section title="حالة هذه النسخة">
            <div className="hp-facts">
                {pending.map(p => <div key={p.label}><b>{p.label}</b><span>{p.value}</span></div>)}
            </div>
        </Section>
    </>;
}
