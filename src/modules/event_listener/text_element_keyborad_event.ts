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