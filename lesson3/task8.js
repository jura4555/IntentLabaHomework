// Напишіть функцію, яка приймає на вхід дату та повертає час у форматі "години:хвилини AM/PM".
function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let apm = (hours < 12) ? 'AM' : 'PM';
    let formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${apm}`;
}

console.log('8. FUNCTION THAT RETURNS DATE IN FORMAT'); 
const midnightDate = new Date();
midnightDate.setHours(0, 0, 0); 

const noonDate = new Date();
noonDate.setHours(12, 0, 0); 

const currentDate = new Date();

console.log('12 hours AM -> ', formatTime(midnightDate)); 
console.log('12 hours pm -> ', formatTime(noonDate)); 
console.log('current time -> ', formatTime(currentDate));
