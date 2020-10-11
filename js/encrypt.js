/******************************

Use : "message".encrypt()
"01101101 01100101 01110011 01110011 01100001 01100111 01100101 "
******************************/


function zeroPad(num) {
    return "00000000".slice(String(num).length) + num
}

String.prototype.encrypt = function(spaceSeparatedOctets) {
	return this.replace(/[\s\S]/g, function(str) {
        str = zeroPad(str.charCodeAt().toString(2));
        return !1 == spaceSeparatedOctets ? str : str + " "
    })
}

module.exports = (text, sso) => text.encrypt(sso)
