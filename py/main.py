""" 
Convert ASCII to Binary and vice-versa 
Encrypting is ASCII to Binary.
Decrypting is Binary to ASCII.
"""

def encrypt(message):
  """ 
  Takes a string as input and returns binary ASCII of each character. 
  Use:
    encrypt("message")
    => '0b1101101 0b1100101 0b1110011 0b1110011 0b1100001 0b1100111 0b1100101 '
  """
  output = ""
  for i in range(len(message)): # Repeats for all characters
    output += bin(ord(message[i])) + " " # Add binary string of ASCII (position i of message) to output
  return output # Returns encrypted message


def decrypt(message):
  """ 
  Takes a string of 8 digits binary numbers as input and returns ASCII of each number.
  Use:
    decrypt("0b1101101 0b1100101 0b1110011 0b1110011 0b1100001 0b1100111 0b1100101 ")
    => 'message'
  """
  output = ""
  lchar = message.split() # Creates a list of all binary numbers and removes all spaces
  for i in range(len(lchar)): # Repeats for each binary number of lchar list
    output += chr(int(lchar[i], 2)) # Add ASCII string of binary number (position i of lchar) to output
  return output # Returns decrypted message


if __name__ == "__main__":
	cond = input("Encrypt (e) / decrypt (d): ") # Set cond to "e" or "d"
	message = input("Give the message: ") # Stores input as string in message
	if cond == "e": # If cond is "e", then use encrypt function
		print(encrypt(message)) # Print encrypted message
	else: # Else, use decrypt function
		print(decrypt(message)) # Print decrypted message
