export const getCaretPosition = (element: Element): number => {
    let caretPos = 0;
    let sel = null;
    let range = null;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
            if (range.commonAncestorContainer.parentNode == element) {
            caretPos = range.endOffset;
            }
        }
    } 
    /* else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        if (range.parentElement() == editableDiv) {
            const tempEl = document.createElement("span");
            editableDiv.insertBefore(tempEl, editableDiv.firstChild);
            const  tempRange = range.duplicate();
            tempRange.moveToElementText(tempEl);
            tempRange.setEndPoint("EndToEnd", range);
            caretPos = tempRange.text.length;
        }
    } */
    return caretPos;
}

export const setCaretToEnd = (element: Element): void => {
    const newRange = document.createRange();
    newRange.selectNodeContents(element);
    newRange.collapse(false);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(newRange);
}