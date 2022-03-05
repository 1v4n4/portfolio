import React, { Suspense } from 'react';
import Loading from '../Loading';

const Home = React.lazy(() => import('./Home'));

const LazyHome = () => (
  <Suspense fallback={<Loading />}>
    <Home />
  </Suspense>
);

export default LazyHome;
