export interface AtletaComponentContract {
    name: string;
    sport: string;
    image: string;
}
export const ATLETAS_DATA = {
    label: "Nuestros Campeones",
    title: "Atletas Destacados",
    items: [
        { name: "Ian Lozano", sport: "Gimnasia Varonil", image: "/images/ian_lozano.jpg" },
        { name: "Gretel Valdez", sport: "Baile", image: "/images/gretel_valdez.jpg" },
        { name: "Hugo Perez", sport: "Deporte de Élite", image: "/images/hugo_perez.jpg" },
        { name: "Nayma Monroy", sport: "Gimnasia Artística", image: "/images/nayma_monroy.jpeg" },
        { name: "Kimberly Becerrra", sport: "Gimnasia Artística", image: "/images/kimberly_becerra.jpeg" },
        { name: "Renata Ramirez", sport: "Gimnasia Artística", image: "/images/renata_ramirez_nuñes.jpeg" },
        { name: "Mateo Ruiz", sport: "Ajedrez", image: "/images/mateo_ruiz_gastelum.jpeg" },
        { name: "Roberto de Jesus", sport: "Ajedrez", image: "/images/roberto_de_jesus.jpeg" },
        { name: "Campeonas CED", sport: "Demás Atletas", image: "/images/campeonas_ced.jpg" }
    ]
};
