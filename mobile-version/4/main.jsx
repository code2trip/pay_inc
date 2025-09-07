import React, { createRoot } from "react-dom/client";
import Component_bfc10498 from "./components/Component_bfc10498";
const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("root element not found");

const root = createRoot(rootElement);
root.render(
  <div style={{ display: "inline-block", width: "390px" }} data-ignore="used only for top most containter width">
    <Component_bfc10498 />
  </div>
);
