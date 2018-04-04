
function checkCashRegister(price, cash, cid) {
var change = [];
var changeDue = cash - price;
var valueOf = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
var revCid = cid.reverse();
var valueRev = valueOf.reverse();

var cidTotal = 0;

//1. sum cash in draw 
cid.forEach(function(denomination, index) {
	var amount = denomination[1]
	cidTotal += amount
})


	//while num > 0
	while (changeDue > 0) {
		//splice num into array
		revCid[0].splice(1, 0, changeDue);


		//sort array
		revCid.sort(function(a, b) {
			return a - b;
		});
		//console.log(revCid);

		//get index of num

		if (
			changeDue === 100 ||
			changeDue === 20 ||
			changeDue === 10 ||
			changeDue === 5 ||
			changeDue === 1 ||
			changeDue === .25 ||
			changeDue === .1 ||
			changeDue === .05 ||
			changeDue === .01
		
		) {
			var start = revCid.indexOf(changeDue);
		} else {
			var start = revCid.indexOf(changeDue) - 1;
		}
		//push roman equivilent to answer array
		change.push(revCid[start]);
		//subtract current value of num from num
		changeDue -= valueRev[start];
		//splice num  off of array
		revCid.splice(changeDue, 1);
	}
	console.log(change);
}








checkCashRegister(19.50, 27.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
