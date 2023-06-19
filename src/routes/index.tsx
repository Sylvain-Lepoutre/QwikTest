/* Ce fichier contient le template de la page d'accueil du site ("/")
 */


import { component$, useSignal, useStore, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import IndexStyles from './index.css?inline';

export default component$(() => {

  const course = useSignal('states')

  const lesson = useStore({ name: 'Qwik', number: 6 })
  useStylesScoped$(IndexStyles)

  const courses = useStore([
    { id: 1, name: "Hydratation vs Resumability" },
    { id: 2, name: "Creating a new Qwik App" },
    { id: 3, name: "Page components and routes" }
  ])
  return (
    <>
      <div>
        <h2>Quick test of Qwik</h2>
        <p>J'apprends les {course.value}</p>
        <p>Grace au leçon {lesson.name} numéro {lesson.number}</p>
        {courses.map(item => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
      <div>
        <button onClick$={() => course.value = 'links'}>Click</button>
        <button onClick$={() => lesson.number = 5}>Click</button>
        <button onClick$={() => courses.pop()}>Retirer un item</button>

      </div>
    </>

  );
});




/* Pour définir et exporter les données du <Head> de la page via "components/router-head"
 */

export const head: DocumentHead = {
  title: 'Qwik Discover - Accueil ',
  meta: [
    {
      name: 'description',
      content: 'Training on qwik framework',
    },
  ],
  // links: [
  //   {
  //     rel: 'stylesheet',
  //     href: 'somestylesheet.com/style.css'
  //   }
  // ]
};
