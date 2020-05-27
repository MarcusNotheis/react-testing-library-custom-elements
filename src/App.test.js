import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { MyWebComponent } from "./MyWebComponent";

test("without web component", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

test("with web component", () => {
  if (!customElements.get("my-webcomponent")) {
    customElements.define("my-webcomponent", MyWebComponent);
  }
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
