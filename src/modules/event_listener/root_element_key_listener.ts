import { generateRandomString } from '../../utils/common';

import RootElement from '../../classes/root_element';
import TextElement from '../../classes/text_element';

export const listenEnterKeyInTheRoot = (root: RootElement): void => {
    const listenElement = root.getElement();
    listenElement.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            // check if the focused element is child of root element
            if (document.activeElement.id.includes('thinitor_element_')) {
                e.preventDefault;
                const newElementId = generateRandomString();
                const newElement = new TextElement(newElementId);
                root.addNewChild(newElement);
                return;
            }
        }
    });
}