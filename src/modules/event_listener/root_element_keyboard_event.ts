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
            const focusedElement = document.activeElement;
            // check if the focused element is child of root element
            if (checkIsChildElement(focusedElement)) {
                // focus된 부분부터의 innerHTML을 다음줄로 같이 이동시키는 기능 필요
                // 아마도 activeElement의 childElement를 일일이 배열화 해서 넘겨야 할 것 같음
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