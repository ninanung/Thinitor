import TextElement from '../../classes/text_element';
import { setCaretToEnd } from '../../utils/caret'
// import { createElement } from '../element_creator/create_element';

export const listenArrowKeyInTheText = (child: TextElement): void => {
    const listenElement = child.getElement();
    listenElement.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'ArrowUp') {
            const previousChildElement = document.getElementById(child.getElementId()).previousElementSibling
            if (!previousChildElement) return;
            e.preventDefault();
            setCaretToEnd(previousChildElement);
        }
        if (e.key === 'ArrowDown') {
            const nextChildElement = document.getElementById(child.getElementId()).nextElementSibling;
            if (!nextChildElement) return;
            e.preventDefault();
            setCaretToEnd(nextChildElement);
        }
    });
}