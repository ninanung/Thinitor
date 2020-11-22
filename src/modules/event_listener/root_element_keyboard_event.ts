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

export const listenBackspaceKeyInTheText = (root: RootElement): void => {
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