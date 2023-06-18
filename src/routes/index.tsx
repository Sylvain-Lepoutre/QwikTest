/* Ce fichier contient le template de la page d'accueil du site ("/")
 */


import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h2>Quick test of Qwik</h2>
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
