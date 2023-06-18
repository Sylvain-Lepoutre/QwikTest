# Découverte de Qwik

## Les routes

Les templates des différentes routes se trouvent dans le dossier 'src/routes'

### La Page d'accueil
Il s'agit du fichier 'src/routes/index.tsx'

### Les autres pages
Des dossiers peuvent être créer dans 'src/routes', le dossier doit comporter le chemin vers la page (le dossier 'about' sera atteignable avec l'url 'xxx/about').

Les fichiers doivent s'appeler index.tsx.

## Contenu des fichiers index.tsx

* #### components$

```import { component$ } from '@builder.io/qwik';```

Pour créer les éléments de ce composant:

```
export default component$(() => {
  return (
    <div>
      <h2>Quick test of Qwik</h2>
    </div>
  );
});
```
* #### DocumentHead

```import { DocumentHead } from "@builder.io/qwik-city";```

Permet de créer les éléments de la balise <head> de la page

```
export const head: DocumentHead = {
    title: 'Qwik Discover - Accueil ',
    meta: [
    {
        name: 'description',
        content: 'Training on qwik framework',
    },
    ],
    links: [
    {
        rel: 'stylesheet',
        href: 'stylesheet.com/style.css'
    }
    ]
};
```

DocumenHead sera géré par le fichier 'components/router-head/router-head.tsx' afin de donner tout le contenu à aux balise 'head'

* #### Styles
Le fichier css est dans le même dossier que le composant où il va être utilisé.

```import AboutStyles from './about.css?inline'```

il doit ensuite être utilisé dans la fonction `export defaut component$`;

2 possibilités :

* `useStyles$(AboutStyles)` : Appliquera le css à tout les éléments de la page
* `useStylesScoped$(ContactStyles)` : Appliquera le css uniquement aux élément de ce composant