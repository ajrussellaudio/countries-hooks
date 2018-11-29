import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

import App from "../src/App";

const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./WELCOME.md")),
    imports: { App }
  }
];

ReactDOM.render(
  <Catalog title="Catalog" pages={pages} />,
  document.getElementById("catalog")
);
