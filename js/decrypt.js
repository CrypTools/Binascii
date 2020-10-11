/* ==========================================================================
 *
 *    Use:
 *    "01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100 00100001".decrypt()
 *    => "Hello World!"
 *
 * ========================================================================== */


String.prototype.decrypt = function() {

	return this.replace(/\s*[01]{8}\s*/g, bin => {

        let charCode = parseInt(bin, 2);
        return String.fromCharCode(charCode);

    });

}

module.exports = text => text.decrypt();