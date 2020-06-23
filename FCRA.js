function startform() {
	document.Comment_Form.comment.disabled = true;
	document.Comment_Form.s.disabled = true;
}

function way() {
	var index = document.Comment_Form.ctype.selectedIndex;
	if(index == 0) {
		document.Comment_Form.comment.disabled = true;
		document.Comment_Form.s.disabled = true;
	}
	else {
		document.Comment_Form.comment.disabled = false;
		document.Comment_Form.s.disabled = false;
	}
}

function checkFields() {
	if(document.getElementById('Nname').value == ''){
		alert('Nickname should not be blank');
		document.getElementById('Nname').focus();
		return false;
	}
	else{
		return true;
	}
}