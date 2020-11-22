export const generateRandomString = (): string => {
    const length = 15;
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return `thinitor_element_${result}`;
}

export const insertAfter = (rootNode: Element,newNode: Element, existingNode: Element): void => {
    rootNode.insertBefore(newNode, existingNode.nextSibling);
}

export const getElementIndex = (element: Element, id: string): number => {
    const children = element.parentElement.children;
    let childIndex: number;
    for (let index = 0; index < children.length; index++) {
        if (children[index].id === id) {
            childIndex = index;
            break;
        }
    }
    return childIndex;
}

export const checkIsChildElement = (element: Element): boolean => {
    return element.id.includes('thinitor_element_');
}