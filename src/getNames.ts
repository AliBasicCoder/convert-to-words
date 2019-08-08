import BigEnglish from "../BigNumsArrs/english";
import Spainsh from "../BigNumsArrs/spanish";

export default class getNames {
    public names: string[];
    public getCalled: number;
    public arrLenght: number;
    public index: any;
    constructor(arr: any[], lang: string) {
        this.names = BigEnglish;
        if (lang === "es") {
            this.names = Spainsh;
        }
        this.getCalled = 0;
        this.arrLenght = arr.length - 1;
        this.index = this.arrLenght;
    }
    public get() {
        this.getCalled++;
        if (this.getCalled === (this.arrLenght + 1)) {
            return undefined;
        }
        this.index--;
        return this.names[this.index];
    }
}
