import { createRouter, RouterProvider, Route } from '@tanstack/react-router';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound'; // Импортируем 404 страницу

const routeTree = [
  new Route({ path: '/', component: Home }),
  new Route({ path: '/about', component: About }),
  new Route({ path: '*', component: NotFound }) // Обрабатываем несуществующие маршруты
];

const router = createRouter({ routeTree });

export default router;

