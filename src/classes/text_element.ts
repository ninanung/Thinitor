import { createElement } from '../modules/element_creator/create_element';

import { logError } from '../utils/errorLogs';

class TextElement {
    private id: string;
    private element: Element;

    constructor(id: string) {
        if (!id) logError('Fail to create element, id is missing.');
        else {
            this.id = id;
            this.element = createElement(id, 'p');
        }
    }

    public getElement(): Element {
        return this.element
    }

    public getElementId(): string {
        return this.id;
    }
}

export default TextElement;