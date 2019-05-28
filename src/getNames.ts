import BigEnglish from "../BigNumsArrs/english";

export default class getNames {
    names: string[];
    getCalled: number;
    arrLenght: number;
    index: any;
    constructor(arr: any[], lang: string) {
        if (lang === 'en') {
            this.names = BigEnglish;
        }
        this.getCalled = 0;
        this.arrLenght = arr.length - 1;
        this.index = this.arrLenght;
    }
    get() {
        this.getCalled++;
        if (this.getCalled === (this.arrLenght + 1)) {
            return undefined;
        }
        this.index--;
        return this.names[this.index];
    }
}