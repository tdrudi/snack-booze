function unroll(squareArray) {
    const unrolledArray = [];
    const numArrays = squareArray.length;
    const numValues = squareArray[0].length;

    let top = 0;
    let bottom = numArrays - 1;
    let left = 0;
    let right = numValues - 1;


    while (top <= bottom && left <= right) {
        //moving left to right in top row
        for (let i = left; i <= right; i++) {
            unrolledArray.push(squareArray[top][i]);
        }
        top++;

        //move from top to bottom on the right side
        for (let i = top; i <= bottom; i++) {
            unrolledArray.push(squareArray[i][right]);
        }

        right--;

        if (top <= bottom) {
            //move right to left on the bottom
            for (let i = right; i >= left; i--) {
                unrolledArray.push(squareArray[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            //move bottom to top on left side
            for (let i = bottom; i >= top; i--) {
                unrolledArray.push(squareArray[i][left]);
            }
            left++;
        }

    }

    return unrolledArray;
}

module.exports = unroll;


//unroll should take in such a square array
//return a single array containing the values in the square.
//You should obtain the values by traversing the square in a spiral: 
//from the top - left corner, move all the way to the right, then all the way down, then all the way to the left, then all the way up, and repeat.