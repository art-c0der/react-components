import HomePage from './components/HomePage';
import ButtonsPage from './components/ButtonsPage';
import FormsPage from './components/FormsPage';
import BreadcrumsPage from './components/BreadcrumsPage';

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
  }
];

export default rootRoutes;
