import React from "react";
import UIShellBody from "../components/UIShellBody";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe('list has owner, item, quantity, aisle, and need columns', () => {

    test('standard canary test', () => {
        expect(true).toBe(true)
    });


    test('every row represents an item in the list', () => {
        const value = render(<UIShellBody />);
        const row = value.getByTestId("body");
         expect(row.children.length).toBe(3);
    });

    test('check to see if a new row is correctly added to shopping list', () => {
        const { getByTestId } = render(<UIShellBody/>);
        
        const itemList = getByTestId("body");
        
        const itemInput = getByTestId('item-input');
        const sizeInput = getByTestId('size-input');
        const commentInput = getByTestId('comment-input');
        const submitButton = getByTestId('submit-button');

        fireEvent.change(itemInput, { target: { value: 'Potato' }})
        fireEvent.change(sizeInput, { target: { value: '1000' }})
        fireEvent.change(commentInput, { target: { value: 'For mashed potato recipe'}})
        
        const leftClick = { button: 0, target: [itemInput, sizeInput, commentInput] }
        fireEvent.submit(submitButton, leftClick);
        
        expect(itemList.children.length).toBe(4);
    })


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

