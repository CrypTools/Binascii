/*================================

	Use: "message".encrypt.decrypt

 ================================*/
import Foundation


extension String {
    var encrypt: String {
        func zeroPad(_ bin: String) -> String {
            return "00000000".prefix(8 - bin.count) + bin
        }
        var out = "";
        let un = Array(self.unicodeScalars.filter{$0.isASCII})
        for i in 0...self.count - 1 {
            let charCode = un[i].value
            let bin = String(charCode, radix: 2)
            out += "\(zeroPad(bin)) "
        }
        return out;
    }
    var decrypt: String {
        let ar = self.components(separatedBy: " ")
        var out = "";
        for i in 0...ar.count - 2 {
            let int = Int(ar[i], radix: 2)
            let unScal = Unicode.Scalar(int!)
            out += String(Character(unScal!))
        }
        return out
    }
}
