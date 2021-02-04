import { 
    generateRandomString,
    checkIsChildElement
} from '../../utils/common';
import { 
    getCaretPosition, 
    setCaretToEnd, 
    getDeferentHtmlString 
} from '../../utils/caret';

import RootElement from '../../classes/root_element';
import TextElement from '../../classes/text_element';

export const listenEnterKeyInTheRoot = (root: RootElement): void => {
    const listenElement = root.getElement();
    listenElement.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            const focusedElement = document.activeElement;
            // check if the focused element is child of root element
            if (checkIsChildElement(focusedElement)) {
                // focus된 부분부터의 innerHTML을 다음줄로 같이 이동시키는 기능 필요
                // caret위치부터의 innerHTML을 완벽하게 잘라내는 기능이 필요함
                const caretPosition = getCaretPosition(focusedElement);
                const htmlText = focusedElement.innerHTML;
                const commonText = focusedElement.textContent;
                console.log(getDeferentHtmlString('123<a>rs<h2>45</h2></a>67', '123rs4567'));
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
                const previousChildElement = focusedElement.previousElementSibling;
                if (focusedElement.innerHTML.length < 1 && previousChildElement) {
                    e.preventDefault();
                    root.removeChild(focusedElement);
                    setCaretToEnd(previousChildElement);
                }
            }
        }
    });
}