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

});
