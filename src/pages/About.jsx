import React from 'react';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import banner_about from "../assets/images/banner_about.png"
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';

const About = () => {
    return (
        <div>
            <Navigation />
            <Banner image={banner_about} />
            <Collapse title="Fiabilité">
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
            </Collapse>
            <Collapse title="Respect">
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entrainera une exclusion de notre plateforme.
            </Collapse>
            <Collapse title="Service">
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entrainera une exclusion de notre plateforme.
            </Collapse>
            <Collapse title="Sécurité">
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi
                bien à l'hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos
                hôtes.
            </Collapse>

            <Footer />
        </div>
    );
};

export default About;