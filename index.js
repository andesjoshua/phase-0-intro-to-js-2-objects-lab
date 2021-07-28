// Write your solution in this file!
let employee = {
    name: '',
    streetAddress: ''
}
const updateEmployeeWithKeyAndValue = (employeeCopy, key, value) => {
    return Object.assign({}, employeeCopy, {[key] : value})
}
const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;
}
const deleteFromEmployeeByKey = (employee, key, value) => {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee
}
const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
}