import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import HeaderStyles from './header.css?inline';

export const Header = component$(() => {
   useStylesScoped$(HeaderStyles);
    return (
        <header class="header">
            <div class="header_logo">
                <img class="header_img" src="/qwik-logo.png" alt="logo" />
                <h1>Qwik Test</h1>
            </div>
            <nav class="header_nav">
                <ul class="header_list">
                    <li >
                        <Link class="header_link" href="/">Home</Link>
                    </li>
                    <li>
                        <Link class="header_link" href="/about">About</Link>
                    </li>
                    <li>
                        <Link class="header_link" href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
});