/* ==========================================================================
 *
 *    Use:
 *    "Hello World!".encrypt()
 *    => "01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100 00100001"
 *
 * ========================================================================== */


String.prototype.encrypt = function() {
    
    function pad(a) {
        return new Array(9 - a.length).join('0') + a;
    }

    let str = '';

    for (char of this) {
        let charCode = char.charCodeAt();
        if (charCode > 128) throw TypeError('One or more charachters in the input cannot be converted to ASCII.');
        else str += pad(charCode.toString(2)) + ' ';
    }

    return str.slice(0, -1);

}

module.exports = (text) => text.encrypt();