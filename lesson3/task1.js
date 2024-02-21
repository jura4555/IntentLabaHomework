//Створіть функцію яка клонує об'єкти
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        const cloneArr = [];
        for (let i = 0; i < obj.length; i++) {
            cloneArr[i] = deepClone(obj[i]);
        }
        return cloneArr;
    }

    const cloneObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key]);
        }
    }

    return cloneObj;
}



const obj = {
    cart: [
        {
            id: 2,
            prices: [
                123
            ]
        }
    ],
    userInfo: {
        id: 33,
        bio: {
            name: 'user',
            phone: '+380000000000',
            location: {
                region: 'ua',
                state: 'lv'
            }
        }
    }
};


console.log(' 1. FUNCTION THAT CLONES OBJECT');
console.log('input object:', JSON.stringify(obj));
console.log('result cloning function:',deepClone(obj));

