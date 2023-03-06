import React from "react";
import {screen, render,fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom";
import App from "../App";



describe("Emoji Copy", () => {

    beforeEach(()=>{
        render(<App/>);
    })

    test("Emoji Copy", ()=>{
        const selectEmoji = screen.getByText('100');
        fireEvent.click(selectEmoji)

        expect(selectEmoji.parentElement.getAttribute("data-clipboard-text")).toMatch("💯")
    })
})
