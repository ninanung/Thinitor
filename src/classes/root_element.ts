// import { createP } from '../modules/element_creator/create_text_element';
import { createP } from '../modules/element_creator/create_text_element';
import { listenEnterKeyInTheRoot } from '../modules/event_listener/root_element_key_listener';

class RootElement {
    private rootElement: Element

    constructor(id: string) {
        const element = document.getElementById(id);
        if (!element) console.error(`Can't find the element has "${id}" id.`);
        else {
            element.appendChild(createP());
            listenEnterKeyInTheRoot(element);
            this.rootElement = element;
        }
    }

    public getHtml(): string {
        return this.rootElement.innerHTML;
    }

    public getElement(): Element {
        return this.rootElement;
    }
}

export default RootElement;