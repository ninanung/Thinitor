import { createElement } from '../modules/element_creator/create_element';

import { logError } from '../utils/error_logs';

import { 
    listenArrowKeyInTheText
} from '../modules/event_listener/text_element_keyborad_event';

class TextElement {
    private id: string;
    private element: Element;

    constructor(id: string, html = '') {
        if (!id) logError('Fail to create element, id is missing.');
        else {
            this.id = id;
            this.element = createElement(id, 'p');
            this.element.innerHTML = html;
            listenArrowKeyInTheText(this);
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