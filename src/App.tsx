import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer, Header } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Learn } from './pages/Learn';
import { Lesson } from './pages/Lesson';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

function ScrollTop() {
    const { pathname } = useLocation();
    React.useEffect(() => { window.scrollTo?.(0, 0); }, [pathname]);
    return null;
}

export function App() {
    return <div className="hp-root" lang="ar" dir="rtl">
        <a className="hp-skip" href="#main">تخطَّ إلى المحتوى</a>
        <ScrollTop />
        <Header />
        <main id="main" className="hp-main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/learn/:slug" element={<Lesson />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
        <Footer />
    </div>;
}
