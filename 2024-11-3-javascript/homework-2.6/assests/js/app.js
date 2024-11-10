let num = +prompt (`enter a garde`);


if (num === 100) {
    document.write(`perfect`);
} else if (num >= 90) {
    document.write(`very good`);
} else if (num >= 80) {
    document.write(`good`);
} else if (num >= 70) {
    document.write(`almost good`);
}else if (num >= 60) {
    document.write('enough');
}else if (num >= 0) {
    document.write('fail');
}

