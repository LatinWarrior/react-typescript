import { type PropsWithChildren } from 'react';

// type HeaderProps1 = {
//     image: {
//         src: string;
//         alt: string;
//     };
//     children: ReactNode;
// };

type HeaderProps = PropsWithChildren<{ image: { src: string; alt: string } }>;

const Header = ({ image, children }: HeaderProps) => {
    return (
        <header>
            {/* <img src={image.src} alt={image.alt} /> */}
            <img {...image} />
            {children}
        </header>
    );
};

export default Header;
