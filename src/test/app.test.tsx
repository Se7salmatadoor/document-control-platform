import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../App';
import { lessons } from '../data/lessons';

const at = (path: string) => render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>);

describe('routes', () => {
    it('home', () => { at('/'); expect(screen.getByText(/تحت السيطرة/)).toBeTruthy(); });
    it('services', () => { at('/services'); expect(screen.getByText('خدمات إدارة الوثائق')).toBeTruthy(); });
    it('learn lists lessons', () => { at('/learn'); expect(screen.getAllByText(lessons[0].title).length).toBeGreaterThan(0); });
    it('lesson shows the tested formula and dummy label', () => {
        at('/learn/transmittals-excel');
        expect(screen.getByText('=IF(E2="","",IF(H2="",TODAY(),H2)-E2)')).toBeTruthy();
        expect(screen.getByLabelText('مثال بيانات تجريبية')).toBeTruthy();
    });
    it('planned lesson has no page', () => { at('/learn/review-period'); expect(screen.getByText('الصفحة غير موجودة')).toBeTruthy(); });
    it('contact shows no contact details or prices', () => {
        const { container } = at('/contact');
        expect(container.textContent).not.toMatch(/@|\+\d|\$|EGP|جنيه/);
    });
});
