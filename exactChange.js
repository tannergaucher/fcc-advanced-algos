function checkCashRegister(price, cash, cid) {
	var change = [];

	var changeDue = cash - price;
	var valueOf = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
	var revCid = cid.reverse();
	var valueRev = valueOf.reverse();
	var cidTotal = 0;

	//1. sum cash in draw
	cid.forEach(function(denomination, index) {
		var amount = denomination[1];
		cidTotal += amount;
	});

	if (cidTotal < changeDue) {
		console.log("insufficient funds");
	} else if (cidTotal === changeDue) {
		console.log("closed");
	} else {
		//MAIN LOGIC
		//console.log(revCid,"cash in drawer:",cidTotal, valueOf, cidTotal, "change due", changeDue,)

		revCid.forEach(function(denom, index) {
			//console.log("denom", valueOf[index])
			//console.log("amount", revCid[index][1])
			var denom = valueOf[index];
			var cidAmt = revCid[index][1];

			if (valueOf[index] < changeDue && cidAmt > valueOf[index]) {
				console.log(
					"Start here",
					"denom:",
					denom,
					"cidAmt:",
					cidAmt,
					"due:",
					changeDue
				);
				changeDue -= denom;
				cidAmt -= denom;
			}
		});
	}

	return change;
}

checkCashRegister(19.5, 20.0, [
	["PENNY", 1.01],
	["NICKEL", 2.05],
	["DIME", 3.1],
	["QUARTER", 4.25],
	["ONE", 90.0],
	["FIVE", 55.0],
	["TEN", 20.0],
	["TWENTY", 60.0],
	["ONE HUNDRED", 100.0]
]);
