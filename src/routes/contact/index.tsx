import { component$, useStylesScoped$ } from "@builder.io/qwik";
import ContactStyles from './contact.css?inline'
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
        // Utiliser ainsi le style du fichier appeler va s'appliquer uniquement au élément  de cette route (voir about.tsx pour l'autre méthode)
    useStylesScoped$(ContactStyles)

    return (
        <article>
            <h2>Contact</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque perferendis debitis nostrum vero, beatae delectus facere excepturi odio perspiciatis iusto nisi laboriosam qui? Incidunt maxime voluptates nisi beatae fugit suscipit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque perferendis debitis nostrum vero, beatae delectus facere excepturi odio perspiciatis iusto nisi laboriosam qui? Incidunt maxime voluptates nisi beatae fugit suscipit.</p>
        </article>
    )
});


export const head: DocumentHead = {
    title: 'Qwik Discover - Contact'
};