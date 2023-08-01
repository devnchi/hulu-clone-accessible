import React, { forwardRef, Ref } from 'react';
import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';

interface Result {
  id: number;
  backdrop_path: string | null;
  poster_path: string | null;
  overview: string;
  title: string | null;
  original_name: string | null;
  media_type: string | null;
  release_date: string | null;
  first_air_date: string | null;
  vote_count: number;
}

interface ThumbnailProps {
  result: Result;
}

const Thumbnail = forwardRef<HTMLDivElement, ThumbnailProps>(({ result }, ref: Ref<HTMLDivElement>) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';

  // Define the alt text for the Image component based on the content
  const altText = result.title || result.original_name || 'Movie/TV show poster';

  const handleClick = () => {
    // Handle click event and navigate to the appropriate URL
    // Replace the below URL with the actual URL for navigating to the movie/TV show detail page
    window.location.href = `/movies/${result.id}`;
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // Handle Enter key press to trigger the same action as onClick
    if (event.key === 'Enter') {
      // Replace the below URL with the actual URL for navigating to the movie/TV show detail page
      window.location.href = `/movies/${result.id}`;
    }
  };

  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
      role="link" // Use role="link" to indicate that this div is acting as a link
      tabIndex={0} // Add tabIndex to make it focusable
      onClick={handleClick}
      onKeyPress={handleKeyPress}
    >
      <Image
        layout='responsive'
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1000}
        width={1920}
        alt={altText} // Use the defined alt text for the Image component
      />

      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} •`}{' '}
          {result.release_date || result.first_air_date} •{' '}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

Thumbnail.displayName = 'Thumbnail';

export default Thumbnail;

