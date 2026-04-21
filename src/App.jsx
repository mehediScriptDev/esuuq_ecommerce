import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { fetchProducts } from './features/products/productsAPI';
import { checkAuth } from './services/authService';
import router from './router/router';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    checkAuth();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
