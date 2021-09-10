import { Route } from 'react-router-dom';
import { Admin, Resource, ListGuesser, Layout, Authenticated, LayoutProps } from 'react-admin';
// import { createMemoryHistory } from 'history';
import LabelIcon from '@material-ui/icons/Label';


import drfProvider, { jwtTokenAuthProvider, fetchJsonWithAuthJWTToken } from './ra-data-drf-provider';
import ApiUI from "./ApiUI"
import { Menu } from './Menu';

const authProvider = jwtTokenAuthProvider({ obtainAuthTokenUrl: "http://localhost:8000/api/token/" });
const dataProvider = drfProvider("http://localhost:8000/api/admin", fetchJsonWithAuthJWTToken);
const customRoutes = [
  <Route path="/api" render={() =>
    <Authenticated>
      <ApiUI />
    </Authenticated>
  } />
];

const BaseLayout = (props: LayoutProps) => <Layout {...props} menu={Menu} />;

const App = () => (
  <Admin
    layout={BaseLayout}
    dataProvider={dataProvider}
    authProvider={authProvider}
    customRoutes={customRoutes}
  >
    <Resource name="auth/user" list={ListGuesser} />
    <Resource name="auth/group" list={ListGuesser} />
    <Resource name="auth/permission" list={ListGuesser} />
    <Resource name="admin/logentry" list={ListGuesser} />
    <Resource name="api" icon={LabelIcon} />
  </Admin>
);

export default App;
