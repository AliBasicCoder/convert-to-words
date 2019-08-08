import convertNums from "./main/convertNums";
import Options from "./main/Options";
import start from "./main/start";

// tslint:disable: object-literal-sort-keys

const options: Options = {
    numbers: true,
    numbersOnly: false,
    lang: "en",
};

const convertToWords = (toConvert: string | number, op?: Options) => {
    if (typeof toConvert === "number") {
        try {
            const lang = (op ? op.lang : null) || options.lang;

            const str = convertNums(toConvert, lang);

            return str;
        } catch (err) {
            throw err;
        }
    }
    return start(toConvert, op || options);
};

module.exports = convertToWords;
module.exports.options = options;
