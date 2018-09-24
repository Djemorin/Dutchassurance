function dutching(){
	var somme = document.getElementById("somme").value;

	var coteV = document.getElementById("coteV").value;
	var coteN = document.getElementById("coteN").value;
					
	var miseV;
	var miseN;

	var miseAVV;
	var miseAVN;
	var miseANV;
	var miseANN;

	var gain;
	var gainAV;
	var gainAN;

	var benefice;
	var beneficeAV;
	var beneficeAN;

	var coteD;
	var coteAV;
	var coteAN;

//////////////////////////////////////////////////////     Dutching     //////////////////////////////////////////////////////////

	
	miseN = somme*(1/((1/coteV+1/coteN)/2)/(2*coteN));
	miseV = somme-miseN

	// console.log(miseN);

	arrondi5 = miseN*100;          // 556.845
	arrondi5 = Math.round(arrondi5); // 556
	arrondi5 = arrondi5/100;        // 5.56
	miseN = arrondi5;

	miseV = somme-miseN
	// miseV = miseV.toPrecision(3);


	gain2 = miseN*coteN;
	gain2 = gain2.toPrecision(3);
	benefice2 = gain2-somme;
	benefice2 = benefice2.toPrecision(3);

	coteD = gain2/somme;
	coteD = coteD.toPrecision(3);

	document.getElementById("miseV").innerHTML = miseV + " Euros";
	document.getElementById("miseN").innerHTML = miseN + " Euros";

	document.getElementById("coteD").innerHTML = coteD;
	document.getElementById("gains2").innerHTML = gain2 + " Euros";
	document.getElementById("benefice2").innerHTML = benefice2 + " Euros";

////////////////////////////////////////////////////     Assurance Nul     ////////////////////////////////////////////////////////

	miseANN = somme/coteN;
	arrondiANN = miseN*100;          // 556.845
	arrondiANN = Math.round(arrondiANN); // 556
	arrondiANN = arrondiANN/100;        // 5.56
	miseANN = miseANN.toPrecision(3);


	miseANV = somme-miseANN;

	gainAN = miseANV*coteV;
	gainAN = gainAN.toPrecision(3);
	beneficeAN = gainAN-somme;
	beneficeAN = beneficeAN.toPrecision(3);

	coteAN = gainAN/somme;
	coteAN = coteAN.toPrecision(3);

	document.getElementById("miseANV").innerHTML = miseANV + " Euros";
	document.getElementById("miseANN").innerHTML = miseANN + " Euros";

	document.getElementById("coteAN").innerHTML = coteAN;
	document.getElementById("gainsAN").innerHTML = gainAN + " Euros";
	document.getElementById("beneficeAN").innerHTML = beneficeAN + " Euros";

/////////////////////////////////////////////////     Assurance Victoire     /////////////////////////////////////////////////////

	miseAVV = somme/coteV;
	arrondiAVV = miseN*100;          // 556.845
	arrondiAVV = Math.round(arrondiAVV); // 556
	arrondiAVV = arrondiAVV/100;        // 5.56
	miseAVV = miseAVV.toPrecision(3);


	miseAVN = somme-miseAVV;

	gainAV = miseAVN*coteN;
	gainAV = gainAV.toPrecision(3);
	beneficeAV = gainAV-somme;
	beneficeAV = beneficeAV.toPrecision(3);

	coteAV = gainAV/somme;
	coteAV = coteAV.toPrecision(3);		

	document.getElementById("miseAVV").innerHTML = miseAVV + " Euros";
	document.getElementById("miseAVN").innerHTML = miseAVN + " Euros";

	document.getElementById("coteAV").innerHTML = coteAV;
	document.getElementById("gainsAV").innerHTML = gainAV + " Euros";
	document.getElementById("beneficeAV").innerHTML = beneficeAV + " Euros";


}			