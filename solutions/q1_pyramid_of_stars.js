const buildPyramid = (height) => {
    if (height <= 0 || typeof height !== 'number') {
        return '';
    }

    let pyramid = '';

    for (let i = 1; i <= height; i++) {
        let space = ' '.repeat(height - i);
        let stars = '* '.repeat(i).trim(); // Ensure stars are separated by a space

        pyramid += space + stars;

        if (i !== height) {
            pyramid += '\n'; // Add newline after each row except the last one
        }
    }
    console.log(pyramid);

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
