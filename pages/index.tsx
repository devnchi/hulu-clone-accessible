import Head from 'next/head';
import { useEffect } from 'react';
import Content from '../components/Content';
import ContentNav from '../components/ContentNav';
import requests from '../utils/requests';
import AppNav from '../components/AppNav';

interface Result {
  // Define the type for the `results` array based on your actual data structure
  // For example:
  id: number;
  title: string;
  backdrop_path: string | null;
  poster_path: string | null;
  // ... other properties
}

interface HomeProps {
  results: Result[];
}

export default function Home({ results }: HomeProps): JSX.Element {
  useEffect(() => {
    // Focus on the main content when the page loads for screen readers.
    document.querySelector('main')?.focus();
  }, []);

  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header role="banner">
        <AppNav />
      </header>

      <nav aria-label="Content Navigation">
        <ContentNav />
      </nav>

      <main tabIndex={-1} role="main">
        <Content results={results} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  try {
    const genre: string = context.query.genre;

    const request = await fetch(
      `https://api.themoviedb.org/3${
        requests[genre]?.url || requests.fetchTrending.url
      }`
    );

    if (!request.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await request.json();

    return {
      props: {
        results: data.results || [],
      },
    };
  } catch (error) {
    return {
      props: {
        results: [],
      },
    };
  }
}



