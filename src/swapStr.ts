
export const swapStr = (str: any, first: any, last: any) => {
    const arr = str.split("");
    const s = arr[first];
    arr[first] = arr[last];
    arr[last] = s;
    return arr.join("");
};
