import React from "react";

export default function About() {
    return (
        <section className="section about-section">
            <h1 className="section-title">à propos de nous</h1>
            <p>
                Bienvenue sur notre site de recherche de cocktails !
                Nous sommes ravis de vous proposer une plateforme
                unique pour découvrir et explorer les délices du
                monde des cocktails. Grâce à l'API de TheCocktailDB,
                nous vous offrons accès à une vaste collection de
                recettes de cocktails, ainsi qu'à des informations
                détaillées sur chaque boisson. Que vous soyez un
                amateur de cocktails ou un professionnel de l'industrie,
                notre site est conçu pour vous aider à trouver l'inspiration
                pour votre prochaine création ou simplement pour
                vous aider à choisir le cocktail parfait pour votre soirée.
            </p>
            <h2 className="section-title">FAQ</h2>
            <p>
                <span>1. Quels sont les cocktails les plus populaires ?</span><br></br>
                Les plus connus et appréciés restent le Mojito, la Margarita, le Cosmopolitan,
                le Daiquiri, le Caipirinha ou encore le Bloody Mary.<br></br>
                <span>2. Peut-on préparer des cocktails sans alcool ?</span><br></br>
                Oui, bien sûr ! Les cocktails sans alcool (aussi appelés mocktails) sont
                une excellente alternative. Tu peux utiliser des jus de fruits, du sirop,
                de l’eau gazeuse et des herbes aromatiques pour obtenir des boissons fraîches et savoureuses.
                <br></br>
                <span>3. De quoi ai-je besoin pour commencer à faire des cocktails ?</span><br></br>
                Les indispensables sont : un shaker, une cuillère à mélange, un doseur,
                et quelques verres adaptés. Ensuite, il te suffit d’avoir quelques alcools
                de base (rhum, vodka, gin, tequila) et des jus de fruits pour varier les recettes.
                <br></br>
                <span>4. Comment trouver une recette selon les ingrédients que j’ai à la maison ?</span><br></br>
                Sur notre site, Cocktails, tu peux rechercher un cocktail par ingrédient
                 : entre le nom de ce que tu as (par exemple "rhum" ou "vodka") 
                 et découvre toutes les recettes que tu peux préparer facilement.
                 <br></br>
                 <span>5. Quelle est la différence entre un cocktail et un long drink ?</span><br></br>
                 Un cocktail est une boisson généralement servie dans un petit verre
                  (souvent plus concentrée en alcool), tandis qu’un long drink est un 
                  cocktail allongé avec un liquide non alcoolisé (soda, jus, eau gazeuse),
                   ce qui donne une boisson plus grande et légère.
            </p>
        </section>
    );
}
