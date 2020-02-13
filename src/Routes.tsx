import * as React from "react";
import { Switch } from "react-router";
import { Link, Route } from "react-router-dom";
import Dashboard from "./AdminLte/Dashboard";

export class Routes extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>spike-react-admin-templates</h1>
        <li>
          <Link to="/admin-lte">Admin LTE dashboard</Link>
        </li>
        <Switch>
          <Route exact path="/admin-lte" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}
