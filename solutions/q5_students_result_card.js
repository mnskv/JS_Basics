// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here

const getRandomScore = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calculatePercentage = (scores) => {
    const totalScore = scores.reduce((acc, score) => acc + score, 0);
    return (totalScore / scores.length).toFixed(2);
};

const studentResultCards = [];

for (let i = 1; i <= 50; i++) {
    const grammarScore = getRandomScore(50, 100);
    const accountsScore = getRandomScore(50, 100);
    const percentage = calculatePercentage([grammarScore, accountsScore]);
    
    studentResultCards.push({
        name: `Student${i}`,
        percentage: percentage
    });
}

for (let i = 51; i <= 100; i++) {
    const grammarScore = getRandomScore(50, 100);
    const physicsScore = getRandomScore(50, 100);
    const percentage = calculatePercentage([grammarScore, physicsScore]);
    
    studentResultCards.push({
        name: `Student${i}`,
        percentage: percentage
    });
}

studentResultCards.forEach(student => {
    console.log(`Name: ${student.name}, Percentage: ${student.percentage}%`);
});
