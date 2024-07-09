import { Suspense, lazy } from 'react';
import { Routes, Route, useNavigate, NavigateFunction } from 'react-router-dom';
import ImageLazyLoading from '../pages/ImageLazyLoading';

const Main = lazy(() => import('../pages/Main'));

export function App() {
  const navigate = useNavigate();
  appRouter.navigate = navigate;

  return (
    <Suspense fallback={<div>suspense</div>}>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/image-lazy-loading" element={<ImageLazyLoading />} />
      </Routes>
    </Suspense>
  );
}

export default App;
export const appRouter = { navigate: null } as {
  navigate: null | NavigateFunction;
};
