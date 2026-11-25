import React from 'react';
import { toolset } from '../data/site';
import { PageTitle, Section } from '../components/Layout';
import { ServiceCards } from '../components/ServiceCards';

export function Services() {
    return <>
        <PageTitle eyebrow="الخدمات" title="خدمات إدارة الوثائق" intro="كل خدمة هنا مبنية على الشغل اليومي في إدارة الوثائق الهندسية. نطاق العمل والأسعار يتحددوا مع كل عميل." />
        <Section title="مجالات العمل"><ServiceCards /></Section>
        <Section title="الأدوات">
            <div className="hp-chips" dir="ltr">{toolset.map(t => <span key={t}>{t}</span>)}</div>
            <p className="hp-note">الأدوات مأخوذة من خبرتي العملية. ذكرها لا يعني شهادة رسمية فيها.</p>
        </Section>
        <Section title="طريقة العمل">
            <ol className="hp-steps">
                <li><b>نفهم وضع المشروع</b><span>كيف تُرسل المستندات الآن، وما المتفق عليه مع الاستشاري.</span></li>
                <li><b>نحدد الشكل المطلوب</b><span>سجل، تقرير، أو تدريب، وبأي أدوات.</span></li>
                <li><b>أسلّم وأشرح</b><span>الملف جاهز مع شرح قصير لطريقة استخدامه.</span></li>
            </ol>
        </Section>
    </>;
}
