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
		//LOGIC
		function makeChange() {
			var i = 0;
			console.log("inside else");

			while (changeDue > 0) {
				if (changeDue >= valueRev[i]) {
					change.push(valueRev[i]);
					changeDue -= valueRev[i];
					console.log("changeDue", changeDue);
				} else if (changeDue === 0) {
					return;
				} else {
					i++;
				}
			}
		}
		makeChange();
		console.log(change);
	}
	//return change;
}

checkCashRegister(7.5, 20.0, [
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
