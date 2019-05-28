import swapStr from './swapStr';
function spirate(num) {
    var arr = [];
    for (let i = num.length - 1; i >= 0; i = i - 3) {
        var str = num[i] + (num[i - 1] || '') + (num[i - 2] || '');
        if (str.length === 2) {
            str = swapStr(str, 1, 0);
        }
        if (str.length === 3) {
            str = swapStr(str, 2, 0);
        }
        arr.push(str);
    }
    return arr.reverse();
}
export default spirate;