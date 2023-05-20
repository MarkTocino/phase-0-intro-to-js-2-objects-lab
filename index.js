// Write your solution in this file!//
const employee = {
    streetAdress: {
        streetName: "Moffitt Ave",
        name: "11557",
    }
}
function updateEmployeeWithKeyAndValue (employee , key , value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey (employee, key) {
    const newEmployee = {...key};
    newEmployee[employee] = key;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key]
    return employee;
}
console.log (employee);