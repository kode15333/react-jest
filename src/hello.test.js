import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from 'pretty';
import Hello from './hello';
import renderer from 'react-test-renderer';
import { act as domAct } from "react-dom/test-utils";
import { act as testAct, create } from "react-test-renderer";
import App from "./App";
// ...
let root;
domAct(() => {
    testAct(() => {
        root = create(<App />);
    });
});
expect(root).toMatchSnapshot();
let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
})

afterEach(()=>{
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

it("should render a greeting", () => {
    const tree = renderer
        .create(<Hello/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
    act(() => {
        render(<Hello name="Jenny" />, container);
    });

    expect(
        pretty(container.innerHTML)
    ).toMatchInlineSnapshot(); /* ... gets filled automatically by jest ... */

    act(() => {
        render(<Hello name="Margaret" />, container);
    });

    expect(
        pretty(container.innerHTML)
    ).toMatchInlineSnapshot(); /* ... gets filled automatically by jest ... */
});
