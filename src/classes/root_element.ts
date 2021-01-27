import { 
    listenEnterKeyInTheRoot,
    listenBackspaceKeyInTheRoot
} from '../modules/event_listener/root_element_keyboard_event';

import { generateRandomString, insertAfter } from '../utils/common';
import { logError } from '../utils/error_logs';

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
            this.element.appendChild(newElement.getElement());
            this.classes = [...this.classes, newElement];
            listenEnterKeyInTheRoot(this);
            listenBackspaceKeyInTheRoot(this);
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
            document.getElementById(child.getElementId()).focus();
            return;
        }
        insertAfter(this.element, child.getElement(), focusedElement);
        this.classes.splice(focusedIndex, 0, child);
        document.getElementById(child.getElementId()).focus();
        return;
    }

    public removeChild(childElement: Element): void {
        let focusedIndex: number;
        this.classes.forEach((childClass, index) => {
            if (childClass.getElementId() === childElement.id) focusedIndex = index; 
        });
        document.getElementById(childElement.previousElementSibling.id).focus();
        this.classes.splice(focusedIndex, 1);
        childElement.remove();
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