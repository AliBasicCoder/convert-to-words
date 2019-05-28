import swapStr from './swapStr';
function swithToZeors(number: any) {
    var number: any = String(number);
    var regex = /e\+([0-9]{2,3})/;
    if (!regex.test(number)) return number;
    var res = number.match(regex);
    var numRegex = /([0-9]* )(\.e\+[0-9]{2,3})/;
    var num = number.substring(0, res['index']);
    for (let i = Number(res[1]); i > 0; i--) {

        if (number.indexOf(".") != -1 && !(numRegex.test(number))) {
            var index = number.indexOf(".");
            number = swapStr(number, index, index + 1);
            number = number.substring(0, res['index']);
            number += `e+${i}`;
        }
        if (numRegex.test(number)) {
            for (let y = i; i <= y; y--) {
                num += '0';
            }
        }
    }
    return num.replace(".", '');
}
export default swithToZeors;