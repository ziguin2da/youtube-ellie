// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result1 = fruits.join();
    console.log(result1);
    const result2 = fruits.reduce( (acc, cur) => `${acc},${cur}`);
    console.log(result2);
}

// Q2. make an array out of a string
{
    const fruits = 'apple, kiwi, banana, cherry';
    const result = fruits.split(',');
    console.log(result);
}

// 03. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
}