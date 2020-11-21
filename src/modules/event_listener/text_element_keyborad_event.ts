import TextElement from '../../classes/text_element';

import { getElementIndex } from '../../utils/common';

export const listenBackspaceKeyInTheText = (child: TextElement): void => {
    const listenElement = child.getElement();
    listenElement.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Backspace') {
            // check if child has content and is not first child of root element
            if (listenElement.innerHTML.length < 1) {
                const childIndex = getElementIndex(listenElement, child.getElementId());
                if (childIndex) {
                    const lastElementId = listenElement.parentElement.children[childIndex - 1].id;
                    document.getElementById(lastElementId).focus();
                    listenElement.remove();
                }
                return;
            }
        }
    });
}

export const listenArrowKeyInTheText = (child: TextElement): void => {
    const listenElement = child.getElement();
    listenElement.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'ArrowUp') {
            const previousChildElement = document.getElementById(child.getElementId()).previousElementSibling
            if (previousChildElement) document.getElementById(previousChildElement.id).focus();
        }
        if (e.key === 'ArrowDown') {
            const nextChildElement = document.getElementById(child.getElementId()).nextElementSibling;
            if (nextChildElement) document.getElementById(nextChildElement.id).focus();
        }
    });
}