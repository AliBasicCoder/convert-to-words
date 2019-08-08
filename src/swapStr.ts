function swapStr(str: any, first: any, last: any) {
    let arr = str.split("");
    let s = arr[first];
    arr[first] = arr[last];
    arr[last] = s;
    return arr.join("");
}
export default swapStr;
