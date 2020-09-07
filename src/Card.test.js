import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Card from "./Card";

jest.useFakeTimers();

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('should select null after timng out', () => {
    const onSelect = jest.fn();
    act(()=>{
        render(<Card onSelect={onSelect}/>, container);
    })

    act(() => {
        jest.advanceTimersByTime(100);
    })
    expect(onSelect).not.toHaveBeenCalled();
})

it('should accept selections', () => {
    const onSelect = jest.fn();
    act(()=>{
        render(<Card onSelect={onSelect}/>, container);
    })

    act(() => {
        container
            .querySelector('[data-testid="2"]')
            .dispatchEvent(new MouseEvent('click', {bubbles : true}))
    })

    expect(onSelect).toHaveBeenCalledWith(2)
})
