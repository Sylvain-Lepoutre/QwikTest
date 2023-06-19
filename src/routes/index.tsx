/* Ce fichier contient le template de la page d'accueil du site ("/")
 */


import { component$, useSignal, useStore, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import IndexStyles from './index.css?inline';

export default component$(() => {

  const course = useSignal('states')

  const lesson =useStore({ name: 'Qwik', number: 6})
  useStylesScoped$(IndexStyles)
  return (
    <div>
      <h2>Quick test of Qwik</h2>
      <p>J'apprends les {course.value}</p>
      <p>Grace au leçon {lesson.name} numéro {lesson.number}</p>

      <button onClick$={() => course.value = 'links'}>Click</button>
      <button onClick$={() => lesson.number = 5}>Click</button>
    </div>
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
