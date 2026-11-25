import React from 'react';

export function CopyButton({ text, label = 'Copy' }: { text: string; label?: string }) {
    const [state, setState] = React.useState(label);
    const onClick = async () => {
        try { await navigator.clipboard.writeText(text); setState('Copied'); }
        catch { setState('Select and copy manually'); }
        setTimeout(() => setState(label), 1800);
    };
    return <button type="button" className="hp-copy" onClick={onClick} aria-live="polite">{state}</button>;
}
