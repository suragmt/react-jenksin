import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

test('example 1 renders successfully', ()=>{
    render(<Counter/>)
    const element = screen.getByText(/Add Amount/i)
    expect(element).toBeInTheDocument()
})