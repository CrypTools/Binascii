// Test made using EyeJS - https://eye.js.org

const path = require('path').normalize(__testDir + "/../")

const { encrypt, decrypt } = require(path + 'lib.js')

eye.test("Encryption", "node",
	$ => $(encrypt('message')).Equal("01101101 01100101 01110011 01110011 01100001 01100111 01100101 "),
	$ => $(encrypt('message', false)).Equal("01101101011001010111001101110011011000010110011101100101")
)

eye.test("Decryption", "node",
	$ => $(decrypt("01101101 01100101 01110011 01110011 01100001 01100111 01100101 ")).Equal("message"),
	$ => $(decrypt(encrypt("CrypTools", false))).Equal("CrypTools")
)
