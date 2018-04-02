function checkCashRegister(price, cash, cid) {
	var change = [];
	var changeDue = cash - price;
	var valueOf = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
	var revCid = cid.reverse();
	var valueRev = valueOf.reverse();

	//console.log(cid[0][0]);

	//iterate through CID values, starting from hundred

	revCid.forEach(function(denomination, index) {
		//if changeDue is < VALUEOF cid[index] && changeDue % VALUEOF === 0
		console.log("changeDue", changeDue, "valueOf", valueRev[index]);
		if (changeDue > valueRev[index]) {
			console.log("match");
			changeDue -= valueRev[index - 1];
			console.log(
				"denomination:",
				valueOf[index],
				"changeDue",
				changeDue
			);

		}
		break
	});

	//console.log(change);

	//change.push(cid[index])
	//value of cid[index] += VALUEOF
	//CHANGEDUE -= VALUEOF

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
