
const convert = (arrayOfObjects, key) => {
	if (!Array.isArray(arrayOfObjects) || typeof key !== 'string') {
        return null; // Return null for invalid input
    }

    const convertedObject = {};

    arrayOfObjects.forEach(obj => {
        if (obj.hasOwnProperty(key)) {
            convertedObject[obj[key]] = obj;
        }
    });
	console.log(convertedObject)

    return convertedObject;
	
};

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/
// const arrayOfObjects = [{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}];
// const key = 'id';
// const converted = convert(arrayOfObjects, key);

module.exports = convert;
