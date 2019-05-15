import HomePage from './components/HomePage';
import ButtonsPage from './components/ButtonsPage';
import FormsPage from './components/FormsPage';
import BreadcrumsPage from './components/BreadcrumsPage';
import Error404 from './components/Error404';

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
  },
  {
    path: '/breadcrums',
    component: BreadcrumsPage,
    exact: true
  },
  {
    exact: false,
    path: '',
    component: Error404
  }
];

export default rootRoutes;
