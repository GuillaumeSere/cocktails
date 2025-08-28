import React from 'react'

const SiteDescription = () => {
    return (
        <section className=' description-section' aria-labelledby='site-description-title'>
            <div className='section-center'>
                <article className='about-text'>
                    <h2 id='site-description-title' className='section-title'>
                        Découvrez l'art des cocktails
                    </h2>
                    <p>
                        Bienvenue sur notre site, Cocktails, l’endroit idéal pour découvrir et préparer
                        des recettes de cocktails maison. Que tu sois passionné de mixologie
                        ou simple amateur en quête d’inspiration, tu trouveras ici des
                        boissons pour toutes les occasions : des cocktails classiques
                        comme le Mojito, la Margarita ou le Daiquiri, mais aussi des recettes
                        plus originales et même des cocktails sans alcool (mocktails) pour profiter sans modération.
                        Notre moteur de recherche te permet de trouver facilement un cocktail selon
                        son nom, ses ingrédients ou encore ton envie du moment. Chaque recette est accompagnée
                        d’une liste claire d’ingrédients et d’instructions détaillées pour que tu puisses la
                        réaliser facilement, même à la maison. Explore, teste, et régale-toi
                        en préparant des cocktails savoureux qui impressionneront tes amis et ta famille !
                    </p>
                    <p>
                        Que vous soyez amateur débutant ou mixologue expérimenté, trouvez l'inspiration parfaite
                        pour vos soirées. Chaque recette est accompagnée d'instructions détaillées, de la liste
                        complète des ingrédients et de conseils professionnels pour réussir vos cocktails à la maison.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default SiteDescription
