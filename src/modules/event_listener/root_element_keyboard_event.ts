import { 
    generateRandomString,
    checkIsChildElement
} from '../../utils/common';

import RootElement from '../../classes/root_element';
import TextElement from '../../classes/text_element';

export const listenEnterKeyInTheRoot = (root: RootElement): void => {
    const listenElement = root.getElement();
    listenElement.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            // check if the focused element is child of root element
            if (checkIsChildElement(document.activeElement)) {
                e.preventDefault();
                const newElementId = generateRandomString();
                const newElement = new TextElement(newElementId);
                root.addNewChild(newElement);
            }
        }
    });
}

export const listenBackspaceKeyInTheRoot = (root: RootElement): void => {
    const listenElement = root.getElement();
    listenElement.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Backspace') {
            const focusedElement = document.activeElement;
            // check if the focused element is child of root element
            if (checkIsChildElement(focusedElement)) {
                // check if child has content and is not first child of root element
                if (focusedElement.innerHTML.length < 1 && focusedElement.previousElementSibling) {
                    e.preventDefault();
                    root.removeChild(focusedElement);
                }
            }
        }
    });
}

// TODO only in ArrowUp keydown event, caret don't move to end of the line. Donno why...
export const listenArrowKeyInTheRoot = (root: RootElement): void => {
    const listenElement = root.getElement();
    listenElement.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'ArrowUp') {
            const previousChildElement = document.activeElement.previousElementSibling
            console.log(previousChildElement);
            if (previousChildElement) {
                const newRange = document.createRange();
                const node = previousChildElement.childNodes[previousChildElement.childNodes.length - 1];
                newRange.setStart(node, node.nodeValue.length);
                newRange.collapse(true);
                const selection = document.getSelection();
                selection.removeAllRanges();
                selection.addRange(newRange);
            }
        }
        if (e.key === 'ArrowDown') {
            const nextChildElement = document.activeElement.nextElementSibling;
            if (nextChildElement) {
                const newRange = document.createRange();
                const node = nextChildElement.childNodes[nextChildElement.childNodes.length - 1];
                newRange.setStart(node, node.nodeValue.length);
                newRange.collapse(true);
                const selection = document.getSelection();
                selection.removeAllRanges();
                selection.addRange(newRange);
            }
        }
    });
}