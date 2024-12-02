function calculateTotalDistance(leftList, rightList) {
    // Sort both lists
    leftList.sort((a, b) => a - b);
    rightList.sort((a, b) => a - b);

    // Calculate the total distance
    let totalDistance = 0;
    for (let i = 0; i < leftList.length; i++) {
        totalDistance += Math.abs(leftList[i] - rightList[i]);
    }

    return totalDistance;
}

function calculateSimilarityScore(leftList, rightList) {
    // Create a map to count occurrences of each number in the right list
    const rightCountMap = new Map();
    rightList.forEach(num => {
        rightCountMap.set(num, (rightCountMap.get(num) || 0) + 1);
    });

    // Calculate the similarity score
    let similarityScore = 0;
    leftList.forEach(num => {
        if (rightCountMap.has(num)) {
            similarityScore += num * rightCountMap.get(num);
        }
    });

    return similarityScore;
}

module.exports = { calculateTotalDistance, calculateSimilarityScore };