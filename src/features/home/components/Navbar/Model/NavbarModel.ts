export interface NavbarComponentContract {
    onOpenLogin: () => void;
}
export interface NavbarDesktopLinksComponentContract {
    onOpenLogin: () => void;
}
export interface NavbarMobileMenuComponentContract {
    isOpen: boolean;
    onClose: () => void;
    onOpenLogin: () => void;
}
export const NAVBAR_DATA = {
    name: "COLEGIO CED",
    tagline: "Colegio elite para deportistas",
    navigation: [
        { id: 'inicio', label: 'Inicio' },
        { id: 'nosotros', label: 'Nosotros' },
        { id: 'modelo', label: 'Modelo' },
        { id: 'atletas', label: 'Atletas' },
        { id: 'oferta', label: 'Oferta' },
        { id: 'contacto', label: 'Contacto' }
    ]
};
