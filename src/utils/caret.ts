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

// return type of getDeferentHtmlString function
type Result = {
    stringArray: Array<string>,
    indexArray: Array<number>
}

export const getDeferentHtmlString = (html: string, text: string): Result => {
    // return value
    const result: Result = {
        stringArray: [],
        indexArray: []
    }
    for (let index = 0; index < html.length; index++) {
        if (html[index] !== text[index]) {
            // html string과 text string을 비교해서 다른부분에 대한 결과를 도출해야함
            console.log(html[index], text[index]);
        }
    }
    return result;
}