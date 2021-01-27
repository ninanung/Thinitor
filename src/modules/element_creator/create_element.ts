import { logUndefinedParameter } from '../../utils/error_logs';

export const createElement = (id: string, tag: string): Element => {
    if (!id || !tag) logUndefinedParameter('createElement');
    const h1Element = document.createElement(tag);
    h1Element.contentEditable = 'true';
    h1Element.id = id;
    return h1Element
}