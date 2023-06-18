import { component$, useStyles$ } from "@builder.io/qwik";
// Import du fichier css du même dossier, ajout "?inline"
import AboutStyles from './about.css?inline'
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    // Utiliser ainsi le style du fichier appeler va s'appliquer à toute la page (voir "contact" pour l'autre méthode)
    useStyles$(AboutStyles)
    

    return (
        <article>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque perferendis debitis nostrum vero, beatae delectus facere excepturi odio perspiciatis iusto nisi laboriosam qui? Incidunt maxime voluptates nisi beatae fugit suscipit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque perferendis debitis nostrum vero, beatae delectus facere excepturi odio perspiciatis iusto nisi laboriosam qui? Incidunt maxime voluptates nisi beatae fugit suscipit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque perferendis debitis nostrum vero, beatae delectus facere excepturi odio perspiciatis iusto nisi laboriosam qui? Incidunt maxime voluptates nisi beatae fugit suscipit.</p>
        </article>
    )
});


export const head: DocumentHead = {
    title: 'Qwik Discover - About'
};