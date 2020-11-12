export const createH1 = (): Element => {
    const h1Element = document.createElement('h1');
    h1Element.contentEditable = 'true';
    return h1Element
}

export const createP = (): Element => {
    const pElement = document.createElement('p');
    pElement.contentEditable = 'true';
    return pElement;
}