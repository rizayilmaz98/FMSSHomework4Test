import React from "react";
import {render,screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "../App";
import EmojiListJson from "../emojiList.json";
test("Emoji Results", () => {
    render(<App/>)
    const text = screen.getByText(`${EmojiListJson[0].title}`)
    expect(text).toBeInTheDocument();
    
})
