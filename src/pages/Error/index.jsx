
import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Error = () => {
    return (
        <div>
            <Navigation />
            <div className="error-page">
                <h1 className="error">404</h1>
                <p className="message-error">Oups ! La page que vous demandez n'existe pas.</p>
                <p>
                    <Link to="/">Retourner sur la page d’accueil</Link>
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default Error;
