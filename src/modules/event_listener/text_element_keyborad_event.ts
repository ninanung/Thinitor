import TextElement from '../../classes/text_element';

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