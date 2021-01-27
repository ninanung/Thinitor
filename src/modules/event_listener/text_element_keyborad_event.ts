import TextElement from '../../classes/text_element';
// import { createElement } from '../element_creator/create_element';

export const listenArrowKeyInTheText = (child: TextElement): void => {
    const listenElement = child.getElement();
    listenElement.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'ArrowUp') {
            const previousChildElement = document.getElementById(child.getElementId()).previousElementSibling
            if (!previousChildElement) return;
            e.preventDefault();
            const newRange = document.createRange();
            newRange.selectNodeContents(previousChildElement);
            newRange.collapse(false);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(newRange);
        }
        if (e.key === 'ArrowDown') {
            const nextChildElement = document.getElementById(child.getElementId()).nextElementSibling;
            if (!nextChildElement) return;
            e.preventDefault();
            const newRange = document.createRange();
            newRange.selectNodeContents(nextChildElement);
            newRange.collapse(false);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(newRange);
        }
    });
}