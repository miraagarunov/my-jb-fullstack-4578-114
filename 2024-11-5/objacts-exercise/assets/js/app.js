
const emp = {
  firstname: 'mira',
  lastname: 'agarunov',
  salary: '22,000$' ,

}
for(const key in emp){
  document.write(`${emp[key]}<br>`);
}

emp.address = 'zigelboim';

document.write(`${emp.address}<br>`);

delete emp.salary;

document.write(`${emp.salary}`);