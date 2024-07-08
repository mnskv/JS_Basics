const buildPyramid = (height) => {
    if (typeof height !== 'number' || height <= 0 || !Number.isInteger(height)) {
        return '';
   }
   let pyramid = '';
   for (let i = 1; i <= height; i =i + 1) {
        let str = ' '.repeat(height - i);
        str += ' '
        str += '* '.repeat(i).trimEnd() + '  ';
        pyramid += str;
        if (i <= height) {
             pyramid += '\n';
        }
   }
   return pyramid;
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
