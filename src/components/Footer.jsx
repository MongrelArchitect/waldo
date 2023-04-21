import React from 'react';

export default function Footer() {
  return (
    <footer>
      <span>
        Designed by
        {' '}
        <a
          target="_blank"
          href="http://www.seanericthomas.com"
          rel="noreferrer"
        >
          Sean Eric Thomas
        </a>
      </span>

      <span>
        <a
          target="_blank"
          href="https://commons.wikimedia.org/wiki/File:31c3-Wimmelbild.jpg"
          rel="noreferrer"
        >
          &quot;Wimmelbild&quot; art by Caro Wedekind
        </a>
        , licensed
        {' '}
        <a
          target="_blank"
          href="https://creativecommons.org/licenses/by/3.0/legalcode"
          rel="noreferrer"
        >
          CC BY 3.0
        </a>
      </span>
    </footer>
  );
}
