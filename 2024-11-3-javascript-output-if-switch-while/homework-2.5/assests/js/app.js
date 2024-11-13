let num = +prompt (`enter a number`);


if (num > 1000) {
    document.write(`number is bigger then 1000`);
} else if (num >= 101) {
    document.write(`number is between 101 - 1000`);
} else if (num >= 1) {
    document.write(`number is between 1 - 101`);
} else if (num === 0) {
    document.write(`number is 0`);
}else if (num < 0) {
    document.write('number is negative');
}

