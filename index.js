// Write your solution in this file!
const employee = {
    name: "Johnny",
    shift: "daytime",
    streetAddress: {
        line1: "551",
        line2: "Park Ave"
    }
}

function updateEmployeeWithKeyAndValue(employee, key="nickname", value="Johnny Boy"){
    return {...employee,
    [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key="nickname", value="Johnny Rocket"){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key = "shift"){
    // code passes the test but I don't feel it's the most proper way 
    const updatedEmployee = {...employee};
    delete updatedEmployee[key];
    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}