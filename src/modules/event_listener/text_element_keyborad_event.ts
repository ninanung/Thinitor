import TextElement from '../../classes/text_element';
// import { createElement } from '../element_creator/create_element';

export const listenArrowKeyInTheText = (child: TextElement): void => {
    const listenElement = child.getElement();
    listenElement.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'ArrowUp') {
            const previousChildElement = document.getElementById(child.getElementId()).previousElementSibling
            if (previousChildElement) {
                const newRange = document.createRange();
                newRange.setStart(previousChildElement.childNodes[previousChildElement.childNodes.length - 1], 2);
                newRange.collapse(true);
                const selection = document.getSelection();
                selection.removeAllRanges();
                selection.addRange(newRange);
                // 코드 확인결과 동작 자체에는 이상이 없지만 keydown이벤트 후 range의 변경이 이루어지지 않는 이슈가 있어서 확인이 필요
                // 혹은 createElement로 텍스트 엘리먼트를 생성하고 append해서 해당 element의 nodeValue를 임시로 넣었다가 제거하는 방법도 있을듯
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