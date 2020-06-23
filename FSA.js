function startform() {
	document.Purchase_Form.A1.disabled = true;
	document.Purchase_Form.A2.disabled = true;
	document.Purchase_Form.A3.disabled = true;
	document.Purchase_Form.A4.disabled = true;
	document.Purchase_Form.A5.disabled = true;
	document.Purchase_Form.A6.disabled = true;
	document.Purchase_Form.L1.disabled = true;
	document.Purchase_Form.L2.disabled = true;
	document.Purchase_Form.pickup[0].disabled = true;
	document.Purchase_Form.pickup[1].disabled = true;
	document.Purchase_Form.pickup[2].disabled = true;
	document.Purchase_Form.po.disabled = true;
	document.Purchase_Form.pm.disabled = true;
	document.Purchase_Form.total.disabled = true;
}
// Print
function print_result() {
	// Personal Details
	var msg = 'Name = ';
	msg += document.Purchase_Form.name.value + '\n';
	msg += 'Instagram Name = ' + document.Purchase_Form.igname.value + '\n';
	msg += 'Email Address = ' + document.Purchase_Form.buyeremail.value + '\n';
	msg += 'Phone No = ' + document.Purchase_Form.phoneno.value + '\n';
	msg += 'Order Date = ' + document.Purchase_Form.odate.value + '\n';
	// Albums
	if (document.Purchase_Form.album[0].checked) {
		msg += 'Album = ' + document.Purchase_Form.album[0].value + '\n';
	}
	else {
		msg += 'Album = ' + document.Purchase_Form.album[1].value + '\n';
	}
	// LightSticks
	if (document.Purchase_Form.lightstick[0].checked) {
		msg += 'LightStick = ' + document.Purchase_Form.lightstick[0].value + '\n';
	}
	else {
		msg += 'LightStick = ' + document.Purchase_Form.lightstick[1].value + '\n';
	}
	// Pickup Method
	var index = document.Purchase_Form.product.selectedIndex;
	msg += 'Pickup Method = ' + document.Purchase_Form.product.options[index].text;
	// Pickup Choices
	if (document.Purchase_Form.pickup[0].checked) {
		msg += 'Need = ' + document.Purchase_Form.pickup[0].value + '\n';
	}
	else if (document.Purchase_Form.pickup[1].checked){
		msg += 'Need = ' + document.Purchase_Form.pickup[1].value + '\n';
	}
	else {
		msg += 'Need = ' + document.Purchase_Form.pickup[2].value + '\n';
	}
	// Confirm
	msg += 'Confirm';
	for (var i=0; i< document.Purchase_Form.sure.length; i++) {
		if (document.Purchase_Form.sure[i].checked){
			msg += document.Purchase_Form.sure[i].value + ' ';
		}
	}
	msg += '\n';
	// print
	alert(msg);
}

// Calculatot
function total_price() {
				var t1 = parseFloat(document.Purchase_Form.po.value);
				var t2 = parseFloat(document.Purchase_Form.pm.value);
				document.Purchase_Form.total.value = t1 + t2;
			}

// function pruchase_price(num) {
	// if (document.Purchase_Form.A1.checked == false){
		// document.Purchase_Form.po.value = 0; 
	// }
	// else if (document.Purchase_Form.A1.checked == true){
		// document.Purchase_Form.po.value = parseFloat(document.Purchase_Form.A1.value);
	// }
	// total_price();
// }

function reform() {
	document.getElementById("PI").reset();
}

function pickup_price(num) {
	document.Purchase_Form.pm.value = document.Purchase_Form.pickup[num].value;
	total_price();
}

// Check
function oi() {
	if (document.Purchase_Form.album.value == ('AY')) {
		document.Purchase_Form.A1.disabled = false;
		document.Purchase_Form.A2.disabled = false;
		document.Purchase_Form.A3.disabled = false;
		document.Purchase_Form.A4.disabled = false;
		document.Purchase_Form.A5.disabled = false;
		document.Purchase_Form.A6.disabled = false;
	}
	else {
		document.Purchase_Form.A1.disabled = true;
		document.Purchase_Form.A2.disabled = true;
		document.Purchase_Form.A3.disabled = true;
		document.Purchase_Form.A4.disabled = true;
		document.Purchase_Form.A5.disabled = true;
		document.Purchase_Form.A6.disabled = true;
	}
	
	if (document.Purchase_Form.lightstick.value == ('LY')) {
		document.Purchase_Form.L1.disabled = false;
		document.Purchase_Form.L2.disabled = false;
	}
	else {
		document.Purchase_Form.L1.disabled = true;
		document.Purchase_Form.L2.disabled = true;
	}
}
function way() {
	var index = document.Purchase_Form.product.selectedIndex;
	if(index == 0) {
					document.Purchase_Form.pickup[0].disabled = true;
					document.Purchase_Form.pickup[1].disabled = true;
					document.Purchase_Form.pickup[2].disabled = true;
					document.Purchase_Form.reset();
				}
				else if(index == 1) {
					document.Purchase_Form.pickup[0].disabled = false;
					document.Purchase_Form.pickup[1].disabled = true;
					document.Purchase_Form.pickup[2].disabled = true;
				}
				else if(index == 2) {
					document.Purchase_Form.pickup[0].disabled = true;
					document.Purchase_Form.pickup[1].disabled = false;
					document.Purchase_Form.pickup[2].disabled = false;
				}
}