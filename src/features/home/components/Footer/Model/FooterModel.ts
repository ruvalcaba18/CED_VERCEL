export interface FooterLinksComponentContract {
    title: string;
    links: string[];
}
export interface FooterBottomComponentContract {
    copyright: string;
    socials: { label: string, href: string }[];
}
export const FOOTER_DATA = {
    brand: "COLEGIO CED",
    tagline: "Colegio elite para deportistas",
    sections: [
        {
            title: "Explora",
            links: ['Nosotros', 'Modelo Educativo', 'Atletas', 'Oferta Académica']
        },
        {
            title: "Legales",
            links: ['RVOE Oficial', 'Términos de Uso', 'Privacidad', 'Cookies']
        }
    ],
    socials: [
        { label: 'Facebook', href: 'https://www.facebook.com/share/1BmkuVDgiz/?mibextid=wwXIfr' },
        { label: 'Instagram', href: 'https://www.instagram.com/colegio.ced?igsh=aWZ5cWcxbHBvZmFi&utm_source=qr' },
        { label: 'YouTube', href: '#' }
    ],
    copyright: `© ${new Date().getFullYear()} Colegio CED. Todos los derechos reservados.`
};
