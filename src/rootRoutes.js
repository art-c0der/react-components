import HomePage from './components/HomePage';
import ButtonsPage from './components/ButtonsPage';
import FormsPage from './components/FormsPage';

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
  },
  {
    path: '/forms',
    component: FormsPage,
    exact: true
  }
];

export default rootRoutes;
