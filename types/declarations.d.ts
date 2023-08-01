// declarations.d.ts

declare module '../components/AppNav' {
    import { FC } from 'react';
    const AppNav: FC;
    export default AppNav;
  }
  
  declare module '../components/Content' {
    import { FC } from 'react';
    const Content: FC<{ results: Result[] }>;
    export default Content;
  }
  
  declare module '../components/ContentNav' {
    import { FC } from 'react';
    const ContentNav: FC;
    export default ContentNav;
  }
  
  // Define the Result type here as mentioned in the previous response
  interface Result {
    id: number;
    backdrop_path: string | null;
    poster_path: string | null;
    // ... other properties
  }
  