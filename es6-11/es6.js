/**
 * Shorthand property names
 */
{
    const ellie1 = {
        name: 'Ellie',
        age: '18',
    }

    const name = 'Ellie';
    const age = '18';

    const ellie2 = {
        name: name,
        age: age,
    }

    // Shorthand property names
    const ellie3 = {
        name,
        age
    }

    console.log(ellie1, ellie2, ellie3);
}

/**
 * Destructuring assignment
 */
{
    const student = {
        name: 'Anna',
        level: 1
    }

    {
        const name = student.name;
        const level = student.level;
        console.log(name, level);
    }
    
    // Destructuring assignment
    {
        const { name, level } = student;
        console.log(name, level);

        // 변수명 변경
        const { name: studentName, level: studentLevel } = student;
        console.log(studentName, studentLevel);
    }

    const animals = ['dog', 'cat'];

    {
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }

    {
        const [first, second] = animals;
        console.log(first, second);
    }
}

/**
 * Spread Syntax
 */
{
    const obj1 = { key: 'key1' };
    const obj2 = { key: 'key2' };
    const array = [obj1, obj2];

    const arrayCopy = [...array];
    console.log(array, arrayCopy);

    const arrayCopy2 = [...array, { key: 'key3' }];
    console.log(array, arrayCopy, arrayCopy2);
}

/**
 * Default parameters
 */
{
    function printMessage(message = 'default message') {
        console.log(message);
    }

    printMessage('heelo');
    printMessage();
}

/**
 * Template Literals
 */
{
    const weather = 'sun';
    const temparature = '16C';

    console.log(
        `Today weather is ${weather} and temparature is ${temparature}.`
    );
}