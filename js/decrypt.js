/******************************

Use : "message".encrypt().decrypt()

******************************/

String.prototype.decrypt = function() {
	return this.replace(/\s*[01]{8}\s*/g, function(bin) {
        return String.fromCharCode(parseInt(bin, 2))
    })
}

module.exports = text => text.decrypt()
