import { ReactNode } from 'react';

// Discriminated union.
type HintBoxProps = {
    mode: 'hint';
    children: ReactNode;
};

type WarningBoxProps = {
    mode: 'warning';
    severity: 'low' | 'medium' | 'high';
    children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox = (props: InfoBoxProps) => {
    const { children, mode } = props;
    if (mode === 'hint') {
        return (
            <aside className='infobox infobox-hint'>
                <p>{children}</p>
            </aside>
        );
    }

    // TypeScript is smart enough to know that the
    // severity must be of type warning at this point.
    const { severity } = props;

    return (
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    );
};
export default InfoBox;
