import TextElement from '../../classes/text_element';
import { createElement } from '../element_creator/create_element';

export const listenArrowKeyInTheText = (child: TextElement): void => {
    const listenElement = child.getElement();
    listenElement.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'ArrowUp') {
            const previousChildElement = document.getElementById(child.getElementId()).previousElementSibling
            if (previousChildElement) {
                const tempElement = createElement('temp_focus_el', 'span');
                previousChildElement.appendChild(tempElement)
                const newRange = document.createRange();
                newRange.setStart(previousChildElement.childNodes[previousChildElement.childNodes.length - 1], 0);
                newRange.collapse(true);
                const selection = document.getSelection();
                selection.removeAllRanges();
                selection.addRange(newRange);
                // document.getElementById(previousChildElement.id).focus();
                // TODO
            }
        }
        if (e.key === 'ArrowDown') {
            const nextChildElement = document.getElementById(child.getElementId()).nextElementSibling;
            if (nextChildElement) {
                document.getElementById(nextChildElement.id).focus();
            }
        }
    });
}