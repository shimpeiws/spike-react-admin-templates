import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const coreUIReact = require("@coreui/react");
const {
  AppSidebarToggler,
  AppNavbarBrand,
  AppAsideToggler,
  AppFooter
} = coreUIReact;

export function Dashboard(_: RouteComponentProps) {
  return (
    <>
      <h1>CoreUI Dashboard</h1>
      <AppSidebarToggler className="d-lg-none" display="md" mobile />
      <AppNavbarBrand
        full={{ width: 89, height: 25, alt: "CoreUI Logo" }}
        minimized={{ width: 30, height: 30, alt: "CoreUI Logo" }}
      />
      <AppSidebarToggler className="d-md-down-none" display="lg" />
      <Nav className="d-md-down-none" navbar>
        <NavItem className="px-3">
          <NavLink to="/dashboard" className="nav-link">
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem className="px-3">
          <Link to="/users" className="nav-link">
            Users
          </Link>
        </NavItem>
        <NavItem className="px-3">
          <NavLink to="#" className="nav-link">
            Settings
          </NavLink>
        </NavItem>
      </Nav>
      <AppAsideToggler className="d-md-down-none" />
      <AppFooter>
        <p>Footer</p>
      </AppFooter>
    </>
  );
}
