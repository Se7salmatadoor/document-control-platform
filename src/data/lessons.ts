export type Lesson = {
    slug: string;
    n: number;
    title: string;
    summary: string;
    status: 'available' | 'planned';
    duration?: string;
    video?: string;
    formula?: string;
    explain?: string;
    rows?: { no: string; sent: string; reply: string; days: string }[];
    caveat?: string;
};

// Add a lesson by adding one entry here. Planned lessons show as "قيد التخطيط" and have no page.
export const lessons: Lesson[] = [
    {
        slug: 'transmittals-excel',
        n: 1,
        title: 'متابعة الـTransmittals في Excel',
        summary: 'عمود واحد يحسب أيام الانتظار',
        status: 'available',
        duration: '٥٣ ثانية',
        video: '/episode1.mp4',
        formula: '=IF(E2="","",IF(H2="",TODAY(),H2)-E2)',
        explain: 'تحسب عدد أيام الانتظار من تاريخ الإرسال، وتتوقف عند تاريخ الرد إن وُجد. الصيغة في الخلية I2 وتُنسخ لأسفل.',
        rows: [
            { no: 'T-001', sent: '11-01', reply: '—', days: '14' },
            { no: 'T-002', sent: '11-03', reply: '11-10', days: '7' },
        ],
        caveat: 'بيانات تجريبية بتاريخ ١٥ نوفمبر. الانتظار الطويل لا يعني بالضرورة تأخيراً، التأخير يتحدد بمدة المراجعة المتفق عليها في مشروعك.',
    },
    {
        slug: 'review-period',
        n: 2,
        title: 'إيه اللي عدّى مدة المراجعة؟',
        summary: 'اتجاه الحلقة الجاية، لم تُنتج بعد',
        status: 'planned',
    },
];

export const firstLesson = lessons[0];
