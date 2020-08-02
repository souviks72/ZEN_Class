var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
        {
            name: 'bar',
            activities: ['be grumpy', 'eat bread omblet'],
            weight: 8,
            furcolor: 'white'
        }, 
        {
            name: 'foo',
            activities: ['sleep', 'pre-sleep naps'],
            weight: 3
        }
    ]
}
console.log(cat.name);
console.log(cat.activities);
cat.catFriends.forEach(friend => {
    console.log(friend.name);
    console.log(friend.activities);
    console.log(friend.weight);
    console.log(friend.furcolor);
});

cat.height = 2;
cat.weight = 4;
let weight = 0;
cat.catFriends.forEach(friend => {
    weight += friend.weight
});
console.log(`total weight of friends is ${weight}`);

let numOfActivity = 0;
cat.catFriends.forEach(friend => {
    numOfActivity += friend.activities.length;
});
console.log(numOfActivity);
cat.catFriends.forEach(friend => {
    friend.activities.push('sleep');
    friend.activities.push('hunt mice');
});
cat.catFriends.forEach(friend => {
    if(friend.name === 'bar')
        friend.furcolor = 'bisuit';
});