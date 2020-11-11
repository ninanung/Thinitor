import { createH1 } from '../modules/create_element';

class RootElement {
    private rootElement: Element

    constructor(id: string) {
        const element = document.getElementById(id);
        if (!element) console.error(`Can't find the element has "${id}" id.`);
        else this.rootElement = element;
        this.listenEnterKey(this.rootElement);
    }

    private listenEnterKey(element: Element) {
        element.addEventListener('keydown', (e: Event) => {
            console.log('test');
        })
    }

    public getHtml(): string {
        return this.rootElement.innerHTML;
    }

    public getElement(): Element {
        return this.rootElement;
    }
}

export default RootElement;