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

    test('need successfully successfully renders on page', () => {
        const value = render(<ShoppingList />);
        const item = value.getAllByTestId("item-test-0-Need");
        expect(item[0].innerHTML).toEqual("No")
    });

    test('need successfully changes to true', () => {
        // synthetic event
    });

});
