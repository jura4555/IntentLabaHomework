//Створіть функцію яка порівнює два об'єкти
function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return keys1.length - keys2.length;
    }

    for (let i = 0; i < keys1.length; i++) {
        const key = keys1[i];
        const value1 = obj1[key];
        const value2 = obj2[key];

        if (typeof value1 !== typeof value2) {
            return typeof value1 === 'object' ? 1 : -1;
        } else if (typeof value1 === 'object' && value1 !== null) {
            const nestedComparison = compareObjects(value1, value2);
            if (nestedComparison !== 0) {
                return nestedComparison;
            }
        } else if (value1 !== value2) {
            return value1 > value2 ? 1 : -1;
        }
    }

    return 0; 
}

const obj1 = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
};

const obj2 = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 6 
        }
    }
};

const obj3 = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
};

const obj4 = {
    a: 1,
    b: {
        c: 2,
    }
};


console.log('2. FUNCTION THAT COMPARE OBJECT');
console.log('obj1 < obj2 = ', compareObjects(obj1, obj2)); //- 1
console.log('obj1 = obj2 = ',compareObjects(obj1, obj3)); //0
console.log('obj1 > obj2 = ',compareObjects(obj1, obj4)); //1



