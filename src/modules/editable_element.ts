class EditableElement {
    element: Element

    constructor(id: string) {
        const element = document.getElementById(id);
        if (!element) console.error(`Can't find the element has "${id}" id.`);
        else this.element = element;
        element.setAttribute('contenteditable', 'true');
    }

    getElement() {
        return this.element;
    }
}

export default EditableElement;