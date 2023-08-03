//PROBLEM 1

function sumOfDistinctElements(set1, set2) {
  // Initialize sum
  let sumResult = 0;

  // Compare elements of set1 with set2 and add distinct elements to sum
  for (let i = 0; i < set1.length; i++) {
    let foundInSet2 = false;
    for (let j = 0; j < set2.length; j++) {
      if (set1[i] === set2[j]) {
        foundInSet2 = true;
        break;
      }
    }
    if (!foundInSet2) {
      sumResult += set1[i];
    }
  }

  // Compare elements of set2 with set1 and add distinct elements to sum
  for (let i = 0; i < set2.length; i++) {
    let foundInSet1 = false;
    for (let j = 0; j < set1.length; j++) {
      if (set2[i] === set1[j]) {
        foundInSet1 = true;
        break;
      }
    }
    if (!foundInSet1) {
      sumResult += set2[i];
    }
  }

  return sumResult;
}

// Example usage
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = sumOfDistinctElements(set1, set2);
console.log("Output:", result); // Output: 13 (distinct elements 4, 7, 2)

//PROBLEM 2

function dot_product(v1, v2) {
  if (v1.length !== v2.length) {
    throw new Error("Vectors must have the same length.");
  }

  let product = 0;
  for (let i = 0; i < v1.length; i++) {
    product += v1[i] * v2[i];
  }
  return product;
}

function areVectorsOrthogonal(vectors) {
  // Check if the vectors array contains an even number of vectors
  if (vectors.length % 2 !== 0) {
    throw new Error(
      "The vectors array must contain an even number of vectors."
    );
  }

  const n = vectors.length / 2;
  const orthogonalPairs = [];

  for (let i = 0; i < n; i++) {
    const v1 = vectors[i];
    const v2 = vectors[i + n];

    if (dot_product(v1, v2) === 0) {
      orthogonalPairs.push([v1, v2]);
    }
  }

  return orthogonalPairs;
}

// Example usage
const vectors = [
  [1, 2, -1],
  [3, 0, -2],
  [2, 2, 1],
  [0, -2, 3],
];

const orthogonalPairs = areVectorsOrthogonal(vectors);
console.log("Orthogonal Pairs:", orthogonalPairs);
