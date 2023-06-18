import { component$, useStylesScoped$ } from "@builder.io/qwik";
import ContactStyles from './contact.css?inline'

export default component$(() => {
    useStylesScoped$(ContactStyles)

    return (
        <article>
            <h2>Contact</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque perferendis debitis nostrum vero, beatae delectus facere excepturi odio perspiciatis iusto nisi laboriosam qui? Incidunt maxime voluptates nisi beatae fugit suscipit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque perferendis debitis nostrum vero, beatae delectus facere excepturi odio perspiciatis iusto nisi laboriosam qui? Incidunt maxime voluptates nisi beatae fugit suscipit.</p>
        </article>
    )
})