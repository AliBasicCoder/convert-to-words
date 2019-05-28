function swapStr(str, first, last) {
    var arr = str.split('');
    var s = arr[first];
    arr[first] = arr[last];
    arr[last] = s;
    return arr.join('');
}
export default swapStr;