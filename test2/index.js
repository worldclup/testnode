
let characters = 'ABCD';
let resultQ = 'ABCD';
let resultA = ''
let charactersLength = characters.length;
let num = 0
let numAt = 0
let numAl = 0

console.log('คำตอบ 4 ตัว : ', resultQ);

do {
    resultA = ''
    numAt = 0
    numAl = 0
    for (let j = 0; j < 4; j++) {
        resultA += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    num++

    if (resultA.indexOf('A') != -1) {
        numAt += 1
        if (resultA.startsWith('A', 0)) {
            numAl += 1
        }
        // console.log(resultA.startsWith('A', 0));
    }
    if (resultA.indexOf('B') != -1) {
        numAt += 1
        if (resultA.startsWith('B', 1)) {
            numAl += 1
        }
        // console.log(resultA.startsWith('B', 1));

    }
    if (resultA.indexOf('C') != -1) {
        numAt += 1
        if (resultA.startsWith('C', 2)) {
            numAl += 1
        }
        // console.log(resultA.startsWith('C', 2));

    }
    if (resultA.indexOf('D') != -1) {
        numAt += 1
        if (resultA.startsWith('D', 3)) {
            numAl += 1
        }
        // console.log(resultA.startsWith('D', 3));

    }

    console.log('\n');
    console.log('**************************************');
    console.log('สุ่มคำตอบ 4 ตัว : ', resultA);
    console.log('ถูก/ทั้งหมด : ', numAt);
    console.log('ถูก/ตำแหน่ง : ', numAl);
    console.log('ครั้งที่ : ', num);
    console.log('**************************************');
    
    // console.log('A', resultA.indexOf('A'));
    // console.log('A', resultA.indexOf('B'));
    // console.log('A', resultA.indexOf('C'));
    // console.log('A', resultA.indexOf('D'));

} while (resultA != resultQ)