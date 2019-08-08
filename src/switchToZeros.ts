import { swapStr } from "./swapStr";

export const switchToZeros = (__numberRes: any) => {
    let numberRes: any = String(__numberRes);
    const regex = /e\+([0-9]{2,3})/;
    if (!regex.test(numberRes)) { return numberRes; }
    const res = numberRes.match(regex);
    const numRegex = /([0-9]* )(\.e\+[0-9]{2,3})/;
    let num = numberRes.substring(0, res.index);
    for (let i = Number(res[1]); i > 0; i--) {

        if (numberRes.indexOf(".") !== -1 && !(numRegex.test(numberRes))) {
            const index = numberRes.indexOf(".");
            numberRes = swapStr(numberRes, index, index + 1);
            numberRes = numberRes.substring(0, res.index);
            numberRes += `e+${i}`;
        }
        if (numRegex.test(numberRes)) {
            for (let y = i; i <= y; y--) {
                num += "0";
            }
        }
    }
    return num.replace(".", "");
};
