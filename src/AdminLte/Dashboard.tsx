import * as React from "react";
import { RouteComponentProps } from "react-router";

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const reactjsAdminlte = require("adminlte-reactjs");

export function Dashboard(_: RouteComponentProps) {
  return (
    <>
      <h1>AdminLTE Dashboard</h1>
      {/* <reactjsAdminlte.InfoTile
        width="3"
        content=""
        icon="fa-envelope-o"
        stats="1,410"
        subject="Messages"
        theme="bg-aqua"
      /> */}
    </>
  );
}
