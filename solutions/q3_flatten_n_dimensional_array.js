/* Write a Program to Flatten a given n-dimensional array */

const flatten = (arr) => {
	if(!Array.isArray(arr)){
		return null;
	}
	let flattenArr =[];
	arr.forEach(a =>{
		if(Array.isArray(a)){
			flattenArr = flattenArr.concat(flatten(a));
		}else{
			flattenArr.push(a);
		}
	})
	console.log(flattenArr)
	return flattenArr;


};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/
const arr = [1, [2, 3], [[4], [5]]]
const flattenar= flatten(arr);


module.exports = flatten;
