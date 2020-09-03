import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import styles from './App.less';
import routes from './router'

function App() {
  return (
    <div className={styles.app}>
      <Switch>
        {
          routes.map(item => (
            item.children && item.children.length > 0 ? item.children.map(v => (
              <Route key={v.path} exact={v.exact} path={v.path} component={v.component} />
            )) : <Route key={item.path} exact={item.exact} path={item.path} component={item.component} />
          ))
        }
        <Redirect key="redirect" to="/" />
      </Switch>

    </div>
  );
}

export default App;
