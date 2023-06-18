import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h2>Quick test of Qwik</h2>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Discover',
  meta: [
    {
      name: 'description',
      content: 'Training on qwik framework',
    },
  ],
  links: [
    {
      rel: 'stylesheet',
      href: 'somestylesheet.com/style.css'
    }
  ]
};
