import constants from '../constants';

// return이 없는 함수
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const logError = (text: string) => {
    console.error(`${constants.ERROR_PREFIX}${text}`);
}

// return이 없는 함수
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const logUndefinedParameter = (funcName: string) => {
    console.error(`${constants.ERROR_PREFIX}Missing parameter. function: ${funcName}`);
}