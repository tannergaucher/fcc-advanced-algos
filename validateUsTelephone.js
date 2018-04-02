function telephoneCheck(str) {
	var valid = [];

	var re1 = /^\d\d\d-\d\d\d-\d\d\d\d/;
	var re2 = /1\d\d\d-\d\d\d-\d\d\d\d/;
	var re3 = /1\(\d\d\d\) \d\d\d-\d\d\d\d/;
	var re4 = /^\d\d\d\d\d\d\d\d\d\d/;
	var re5 = /\(\d\d\d\)\d\d\d-\d\d\d\d/;
	var re6 = /1\(\d\d\d\)\d\d\d-\d\d\d\d/;
	var re7 = /1\d\d\d \d\d\d \d\d\d\d/;
	var re8 = /1 \d\d\d \d\d\d \d\d\d\d/;
	var re9 = /^1 \(\d\d\d\) \d\d\d-\d\d\d\d/;
	var re10 = /1 \d\d\d-\d\d\d-\d\d\d\d/;

	var arr = [re1, re2, re3, re4, re5, re6, re7, re8, re9, re10];

	arr.forEach(function(regEx) {
		if (regEx.exec(str) !== null) {
			var expected = regEx.exec(str)[0];
			var input = regEx.exec(str).input;
			if (expected === input) {
				valid.push(str);
				//console.log("valid", str);
			}
		}
	});

	if (valid.length > 0) {
		console.log("valid");
		return true;
	} else {
		console.log(false);
		return false;
	}
}

telephoneCheck("1 757 622 7382");
