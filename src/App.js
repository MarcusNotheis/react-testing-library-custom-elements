import React from "react";
import "./styles.css";
import "@ui5/webcomponents/dist/Button.js";

// class MyWebComponent extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `<b>${this.getAttribute("text")}!</b>`;
//   }
// }

// if (!customElements.get("my-webcomponent")) {
//   customElements.define("my-webcomponent", MyWebComponent);
// }

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <my-webcomponent text="This is my Web Component" />
      {/* <ui5-button>My Button Text</ui5-button> */}
    </div>
  );
}
