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

// html과 일반 content text의 다른 부분을 찾아서 array형태로 return
export const getDeferentHtmlString = (html: string, text: string): Result => {
    // return value
    const result: Result = {
        stringArray: [],
        indexArray: []
    }
    const htmlSplit = html.split('');
    const textSplit = text.split('');
    let deferentWord = '';
    for (let index = 0; index < textSplit.length; index++) {
        if (htmlSplit[index] !== textSplit[index]) {
            deferentWord += htmlSplit[index];
            htmlSplit.splice(index, 1);
            index -= 1;
        } else {
            if (deferentWord) {
                result.stringArray.push(deferentWord);
                result.indexArray.push(index);
                deferentWord = ''
            }
        }
    }
    return result;
}