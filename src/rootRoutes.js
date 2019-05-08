import HomePage from './components/HomePage';
import ButtonsPage from './components/ButtonsPage';

const rootRoutes = [
  {
    path: '/',
    component: HomePage,
    exact: true
  },
  {
    path: '/buttons',
    component: ButtonsPage,
    exact: true
  }
];

export default rootRoutes;
