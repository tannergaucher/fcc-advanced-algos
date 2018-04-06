function checkCashRegister(price, cash, cid) {
	let change = [];
	let change2 = [];

	let changeDue = cash - price;
	let valueOf = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
	let revCid = cid.reverse();

	let valueRev = valueOf.reverse();
	let cidTotal = 0;
	var accumulator = 0
	var ttl = 0;


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
			let i = 0;
			console.log("inside else");


			while (changeDue > 0) {
				if (changeDue >= valueRev[i]) {

					let key = revCid[i][0]
					let value = valueRev[i]
					ttl += value
					//console.log("key", key, "value", value)
					let array = [key, value]
					change.push(array);
					changeDue -= valueRev[i];
					console.log(ttl)

				//console.log("changeDue", changeDue);
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

checkCashRegister(.5, 9, [
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
