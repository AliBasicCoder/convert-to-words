import convertNums from "./convertNums";

function ordinal(ord: string, lang?: string): string {
    var regex = /^([0-9]+)[stndth]{2}$/;
    var numbers = ord.match(regex);
    if (!numbers) {
        return '';
    }
    var num: any = Number(numbers[1]);
    if (!regex.test(ord)) {
        throw new Error('this is not a valid order');
    }
    if (ord === '1st') return 'first'
    if (ord === '2nd') return 'second'
    if (ord === '3th') return 'third'
    if (ord === '4th') return 'fourth'
    if (ord === '5th') return 'fifth'
    if (ord === '6th') return 'sixth'
    if (ord === '7th') return 'seventh'
    if (ord === '8th') return 'eighth'
    if (ord === '9th') return 'ninth'
    if (ord === '10th') return 'tenth'
    if (ord === '11th') return 'eleventh'
    if (ord === '12th') return 'twelfth'
    if (ord === '13th') return 'thirteenth'
    if (ord === '14th') return 'fourteenth'
    if (ord === '15th') return 'fifteenth'
    if (ord === '16th') return 'sixteenth'
    if (ord === '17th') return 'seventeenth'
    if (ord === '18th') return 'eighteenth'
    if (ord === '19th') return 'nineteenth'
    if (ord === '20th') return 'twentieth'
    if (ord === '30th') return 'thirtieth'
    if (ord === '40th') return 'fortieth'
    if (ord === '50th') return 'fiftieth'
    if (ord === '60th') return 'sixtieth'
    if (ord === '70th') return 'seventieth'
    if (ord === '80th') return 'eightieth'
    if (ord === '90th') return 'ninetieth'
    // 4123 123 112
    if (num > 20 && num < 100) {
        var fd = Math.floor(num / 10);
        var sd = String(num - (fd * 10));
        var res1 = convertNums(fd * 10, lang)
        if (sd === '1') {
            sd = '1st'
        } else if (sd === '2') {
            sd = '2nd'
        } else {
            sd += 'th'
        }
        var res2 = ordinal(sd);
        return res1 + ' ' + res2;
    }
    if (num >= 100) {
        num = String(num);
        var ls: any = Number(num[num.length - 1]);
        num = Number(num);
        var rest = num - ls;
        ls = String(ls);
        if (ls === '0') {
            num = String(num);
            var ls2: any = Number(num[num.length - 2] + num[num.length - 1]);
            var rest2 = num - ls2;
            if (ls2 == '0') {
                var res3 = convertNums(String(num), lang);
                if (res3[res3.length - 1] === ' ') {
                    res3 = res3.substring(0, res3.length - 1);
                }
                return res3 + 'th'
            }
            return `${convertNums(rest2, lang)} ${ordinal(ls2 + 'th', lang)}`;
        }
        if (ls === '1') {
            ls = '1st'
        } else if (ls === '2') {
            ls = '2nd'
        } else {
            ls += 'th'
        }
        return `${convertNums(rest, lang)} ${ordinal(ls, lang)}`;
    }
    return ''
}
export default ordinal