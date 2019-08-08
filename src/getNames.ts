import { BigEnglish } from "../BigNumsArrs/english";
import { Spanish } from "../BigNumsArrs/spanish";

// tslint:disable-next-line:class-name
export class getNames {
    public names: string[];
    public getCalled: number;
    public arrLength: number;
    public index: any;
    constructor(arr: any[], lang: string) {
        this.names = BigEnglish;
        if (lang === "es") {
            this.names = Spanish;
        }
        this.getCalled = 0;
        this.arrLength = arr.length - 1;
        this.index = this.arrLength;
    }
    public get() {
        this.getCalled++;
        if (this.getCalled === (this.arrLength + 1)) {
            return undefined;
        }
        this.index--;
        return this.names[this.index];
    }
}
