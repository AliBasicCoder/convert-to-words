import convertNums from "../main/convertNums";

function replace(str: string, index: number, replacement: string): string {
    var firstPart = str.substring(0, index);
    var secondPart = str.substring(index + replacement.length);
    return firstPart + convertNums(replacement) + secondPart;
}
export default replace;

// i was 13 and my sis was 14