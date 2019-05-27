const read = require('fs').readFileSync;
const write = require('fs').writeFileSync;

function compress(code){
	code = code.replace(/\/\/.*/g,'');
	code = code.replace(/\r?\n|\r/g,'');
	code = code.replace(/\t/g,'');
	code = code.replace(/[ ]{2,10000000000000}/g,'');
	return code
}
 
write('./index.min.js',compress(read('./index.js','utf-8')));