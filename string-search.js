const products = [
	'Hp laptop',
	'hp laptop probook',
	'hp laptop probook G450',
	'dell Laptop probook G450',
	'i250 phone of 5th generation',
	'i7 phone of 5th generation',
	'Samsung Phone of 5th generation',
	'Nokia Phone of 7th generation',
	'Walton Phone of 5th generation'
]
const laptopString = 'laptop';
const needLaptops = [];
// searching a product with indexof method if the string remaing in the array it returs the index numbers and it is not a negative number but the string is not remaing there the indexOf method return -1.
for (const product of products) {
	if (product.toLowerCase().indexOf(laptopString.toLowerCase()) !== -1) {
		needLaptops.push(product);
	}
}
console.log(needLaptops);
// for phone Products 
const stringPhone = 'phone';
const phoneProducts = [];
// The includ method return true if the  string remaing in the products array or return false if the string is not remaning there.
for (const product of products) {
	if (product.toLowerCase().includes(stringPhone.toLowerCase())) {
		phoneProducts.push(product);
	}
}
console.log(phoneProducts);

const startString = 'hp';
const hpProducts = [];
// startWith() method return true if the selective string start with hp or not it returns false.
for (const product of products) {
	if (product.toLowerCase().startsWith(startString.toLowerCase())) {
		hpProducts.push(product);
	}
}
console.log(hpProducts);

const endString = 'generation';
const genProducts = [];
// endWith() method return true if the selective string end with 'generation' or not it returns false.
for (const product of products) {
	if (product.toLowerCase().endsWith(endString.toLowerCase())) {
		genProducts.push(product);
	}
}
console.log(genProducts);