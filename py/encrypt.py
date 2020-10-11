# ==============================================================================
#
#    Use:
#    encrypt("Hello World!")
#    => "01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100 00100001"
#
# ==============================================================================

def encrypt(s):

	output = ''

	for char in s:
		if ord(char) > 128: raise TypeError('One or more charachters in the input cannot be converted to ASCII.')
		output += f'{ord(char):08b} '

	return output[:-1]