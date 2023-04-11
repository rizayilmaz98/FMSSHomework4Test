import React from "react";
import "@testing-library/jest-dom";
import {render,screen,fireEvent} from "@testing-library/react";
import App from "../App"

describe("Filter Test", () => {
    beforeEach(()=>{
        render (<App/>)
    })
    test("Filter Test" , () => {
        const searchInput = screen.getByLabelText('emoji-input');
        fireEvent.change(searchInput, { target: { value: 'abc' } });
        expect(screen.getAllByText(/abc/i)).toHaveLength(3);
    })
})




