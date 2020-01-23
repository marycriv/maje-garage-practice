import React from "react";
import ShoppingList from "../components/ShoppingList";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe('list has owner, item, quantity, aisle, and need columns', () => {

    test('standard canary test', () => {
        expect(true).toBe(true)
    });

    test('every row represents a list', () => {
        const value = render(<ShoppingList />);
        const column = value.getByTestId("body");
        expect(column.children.length).toBe(3); 
    });

    test('need column successfully renders on page and toggles', () => {
        const value = render(<ShoppingList />);
        const item = value.getAllByTestId("item-test-0-Need");
        expect(item[0].innerHTML).toEqual("No");
        
        const checkbox = value.getByTestId("checkbox-test-0");

        expect(checkbox.checked).toEqual(false)
        expect(item[0].innerHTML).toEqual("No");
        fireEvent.click(checkbox)
        expect(checkbox.checked).toEqual(true)
        expect(item[0].innerHTML).toEqual("Yes");
        fireEvent.click(checkbox)
        expect(checkbox.checked).toEqual(false);
        expect(item[0].innerHTML).toEqual("No");

    });

}); 
