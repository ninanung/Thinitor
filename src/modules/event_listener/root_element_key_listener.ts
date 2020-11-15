import { createElement } from '../element_creator/create_element';

import { generateRandomString } from '../../utils/common';

import RootElement from '../../classes/root_element';

// this function has no return
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const listenEnterKeyInTheRoot = (root: RootElement) => {
    const listenElement = root.getElement();
    listenElement.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault;
            const newPElement = createElement(generateRandomString(), 'p');
            listenElement.appendChild(newPElement);

            // TODO 이 경우 단순히 element만 생성하는게 아니라 
            // element의 정보를 가지고 있는 class객체를 생성해서 컨트롤 하는편이 좋을 것 같음
        }
    })
}