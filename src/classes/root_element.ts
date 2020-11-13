import { listenEnterKeyInTheRoot } from '../modules/event_listener/root_element_key_listener';

import { generateRandomString } from '../utils/common';
import { logError } from '../utils/errorLogs';

import TextElement from './text_element';

class RootElement {
    private element: Element;
    private children: Array<Element>;
    private classes: Array<TextElement>

    constructor(id: string) {
        const element = document.getElementById(id);
        if (!element) logError(`Can't find the element has "${id}" id.`);
        else {
            listenEnterKeyInTheRoot(element);
            this.element = element;
            const newElement = new TextElement(generateRandomString());
            this.addNewChild(newElement);
        }
    }

    private addNewChild(child: TextElement) {
        console.log(this.getElement());
        this.element.appendChild(child.getElement());
        this.children = [...this.children, child.getElement()];
        this.classes = [...this.classes, child];
    }

    public getHtml(): string {
        return this.element.innerHTML;
    }

    public getElement(): Element {
        return this.element;
    }
}

export default RootElement;