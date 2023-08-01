import React from 'react';
import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';

function Content({ results }) {
  return (
    <div className='px-5 my-10'>
      <FlipMove
        className='sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'
        aria-live='polite' // Add aria-live to announce dynamic content changes to screen readers
      >
        {results.map(result => (
          <Thumbnail key={result.id} result={result} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Content;
