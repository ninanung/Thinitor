import { listenEnterKeyInTheRoot } from '../modules/event_listener/root_element_key_listener';

import { generateRandomString } from '../utils/common';
import { logError } from '../utils/errorLogs';

import TextElement from './text_element';

class RootElement {
    private readonly rootElement: Element;
    private element: Element;
    private classes: Array<TextElement> = [];

    constructor(id: string) {
        const element = document.getElementById(id);
        if (!element) logError(`Can't find the element has "${id}" id.`);
        else {
            this.rootElement = element;
            this.element = element;
            const newElement = new TextElement(generateRandomString());
            this.addNewChild(newElement);
            listenEnterKeyInTheRoot(this);
        }
    }

    public addNewChild(child: TextElement): void {
        let focusedIndex: number;
        const focusedElement = document.activeElement;
        this.classes.forEach((childClass, index) => {
            if (childClass.getElementId() === focusedElement.id) focusedIndex = index; 
        });
        if (focusedIndex + 1 === this.classes.length) {
            this.element.appendChild(child.getElement());
            this.classes = [...this.classes, child];
            // TODO make focus to new element
            return;
        }
        // TODO insert new element and make focus
    }

    public getRootElement(): Element {
        return this.rootElement;
    }

    public getClasses(): Array<TextElement> {
        return this.classes;
    }

    public getHtml(): string {
        return this.element.innerHTML;
    }

    public getElement(): Element {
        return this.element;
    }
}

export default RootElement;