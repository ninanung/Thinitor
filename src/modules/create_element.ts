export const createH1 = (): Element => {
    const h1Element = document.createElement('h1');
    h1Element.contentEditable = 'true';
    return h1Element
}