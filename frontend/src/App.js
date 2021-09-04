import * as React from "react";
import { Route } from 'react-router-dom';
import { Admin, Resource, ListGuesser, Layout } from 'react-admin';
import drfProvider, { jwtTokenAuthProvider, fetchJsonWithAuthJWTToken } from 'ra-data-django-rest-framework';
import ApiUI from "./ApiUI"
import { Menu } from './Menu';

const authProvider = jwtTokenAuthProvider({ obtainAuthTokenUrl: "http://localhost:8000/api/token/" });
const dataProvider = drfProvider("http://localhost:8000/api/admin/auth", fetchJsonWithAuthJWTToken);


const L = (props) => <Layout {...props} menu={Menu} />;

const App = () => (
  <Admin
    layout={L}
    dataProvider={dataProvider}
    authProvider={authProvider}
    customRoutes={[
      <Route exact path="/api" component={props => <ApiUI {...props} />} />,
    ]}
  >
    <Resource name="user" list={ListGuesser} />
    <Resource name="group" list={ListGuesser} />
  </Admin>
);

export default App;
