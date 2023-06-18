import { component$, useStyles$ } from "@builder.io/qwik";
import AboutStyles from './about.css?inline'

export default component$(() => {
    useStyles$(AboutStyles)
    

    return (
        <article>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque perferendis debitis nostrum vero, beatae delectus facere excepturi odio perspiciatis iusto nisi laboriosam qui? Incidunt maxime voluptates nisi beatae fugit suscipit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque perferendis debitis nostrum vero, beatae delectus facere excepturi odio perspiciatis iusto nisi laboriosam qui? Incidunt maxime voluptates nisi beatae fugit suscipit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque perferendis debitis nostrum vero, beatae delectus facere excepturi odio perspiciatis iusto nisi laboriosam qui? Incidunt maxime voluptates nisi beatae fugit suscipit.</p>
        </article>
    )
})