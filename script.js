function palindrome(angka) {
	while (true) {
		angka++;
		var str = String(angka);
		var strReverse = str.split('').reverse().join('');
		if (str === strReverse) {
			return str
		}
	}
}

console.log(palindrome(8)); // 9
console.log(palindrome(10)); // 11
console.log(palindrome(117)); // 121
console.log(palindrome(175)); // 181
console.log(palindrome(1000)); // 1001
