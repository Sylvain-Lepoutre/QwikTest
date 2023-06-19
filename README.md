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

* #### Balise `<Link>`

Ce composant est utilisé pour naviguer entre les routes, il s'utilise comme une balise `<a>` , mais il ne recharge pas la page, il garde l'état actuel.

`<Link href="/about">About</Link>` 

permet d'afficher la route /about.

Il faut importer le composant Link de qwik-city : 

`import { Link } from "@builder.io/qwik-city";`

### State

* **Pour les variables de types booléens, string ou number :**

`import {  useSignal } from '@builder.io/qwik';`

puis déclarer dans le components :

`const nomVariable = useSignal(valeurVariable)`

et l'utiliser dans le template du components :

`{nomVariable.value}`  pour l'afficher

pour le modifier sur un bouton par exemple

`<button onClick$={() => nomVariable.value = 'links'}>Click</button>`

* **Pour les objets ou tableaux :**

`import {  useStore } from '@builder.io/qwik';`

* * *Objets*

puis déclarer dans le component :

`const nomObjet = useStore({ nomPropriété1 : 'valeurPropriété1, nomPropriété2: valeurPropriété2 })`

et l'utiliser dans le template du components :

`{nomObjet.nomPropriété}`  pour l'afficher

pour le modifier sur un bouton par exemple

`<button onClick$={() => nomObjet.nomPropriété = 'links'}>Click</button>`

* * *Tableaux*

Déclarer dans le component : 

```
const nomTableau = useStore([
  {id: 1, title: 'objet1'},
  {id: 2, title: 'objet2'},
  {id: 3, title: 'objet3'},
])
````

Utilisation dans le template du component

```
{nomTableau.map(item => (
  <div key={item.id}>{item.title}</div>
))}
```

Modification par exemple supprimer un item

`<button onClick$={() => nomTableau.pop()}>Retirer un item</button>`