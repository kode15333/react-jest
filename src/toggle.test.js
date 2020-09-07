import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Toggle from "./toggle";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("change value when clicked", () => {
    const onChage = jest.fn();
    act(() => {
        render(<Toggle onChange={onChage}/>, container)
    })

    const button = document.querySelector("[data-testid=toggle]");
    expect(button.innerHTML).toBe("Turn On");
    act(() => {
        button.dispatchEvent(new MouseEvent("click", {bubbles : true}));
    })

    expect(onChage).toHaveBeenCalledTimes(1);
    expect(button.innerHTML).toBe("Turn Off");

    act(() => {
        for(let i = 0; i < 4; i++){
            button.dispatchEvent(new MouseEvent("click", {bubbles : true}));
        }
    })
    expect(onChage).toHaveBeenCalledTimes(5);
    expect(button.innerHTML).toBe("Turn Off");

})
