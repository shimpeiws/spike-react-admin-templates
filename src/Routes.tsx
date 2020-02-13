import * as React from "react";
import { Switch } from "react-router";
import { Link, Route } from "react-router-dom";
import { Dashboard as AdminLTEDashboard } from "./AdminLte/Dashboard";
import { Dashboard as CoreUIDashboard } from "./CoreUI/Dashboard";

export class Routes extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>spike-react-admin-templates</h1>
        <li>
          <Link to="/admin-lte">Admin LTE dashboard</Link>
        </li>
        <li>
          <Link to="/coreui">CoreUI dashboard</Link>
        </li>
        <Switch>
          <Route exact path="/admin-lte" component={AdminLTEDashboard} />
          <Route exact path="/coreui" component={CoreUIDashboard} />
        </Switch>
      </div>
    );
  }
}
