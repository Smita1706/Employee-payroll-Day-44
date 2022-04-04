class EmployeePayrollData {

    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        const NAME_REGEX = RegExp("^[A-Z]{1}[a-z]{2,}([ ][A-Z]{1}[a-z]{2,})?$");
        if (NAME_REGEX.test(name)) {
            this._name = name;
        } else throw "Name is Incorrect!";
    }
    get profilePicture() {
        return this._profilePicture;
    }
    set profilePicture(profilePicture) {
        this._profilePicture = profilePicture;
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }
    get departments() {
        return this._departments;
    }
    set departments(departments) {
            this._departments = departments;
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }
    get note() {
        return this._note;
    }
    set note(note) {
        this._note = note;
    }
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        if (startDate <= new Date()) {
            this._startDate = startDate;
        } else throw "Start Date is Incorrect!";
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const employeeDate = !this.startDate ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return "[ id: " + this.id + ", name: " + this.name + ", salary: " + this.salary +
            ", gender: " + this.gender + ", startDate: " + employeeDate + ", departments: " + this.departments + " ]" + "\n";
    }
}
window.addEventListener("DOMContentLoaded", (event) => {
     const name = document.querySelector('#name'); 
     const textError = document.querySelector('.text-error'); 
     name.addEventListener('input', function() {
        if(name.value. length == 0) { 
            textError. textContent = "";
            return;
    }
    try {
        (new EmployeePayrollData()).name = name.value;
        textError. textContent="";
    } catch (e) {
        textError.textContent = e;
      }
    });
    const salary = document.querySelector('#salary'); 
    const output = document.querySelector('.salary-output'); 
    output.textContent = salary.value; 
    salary.addEventListener('input', function() { 
         output.textContent = salary.value;
    });
});

const save = () => {
    try {
        let employeePayrollData = createEmployeePayrollObject();
    } catch (e) {
        return;
    }
};

const createEmployeePayrollObject = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getSelectedValues("[#name]");
    } catch (e) {
        alert(error);
        return;
    }
    employeePayrollData.profilePicture = getSelectedValues("[name=profile]").pop();
    employeePayrollData.gender = getSelectedValues("[name=gender]").pop();
    employeePayrollData._departments = getSelectedValues("[name=department]").pop();
    employeePayrollData.salary = getValue("#salary");
    employeePayrollData.note = getValue("#notes");
    dateString = document.querySelector("#day").value + " " + document.querySelector("#month").value + ", " + document.querySelector("#year").value;
    employeePayrollData.Date = Date.parse(date);
    alert(employeePayrollData.toString);
    return employeePayrollData;
};

const getSelectedValues = (propertyName) => {
    let allValues = document.querySelectorAll(propertyName);
    let selValues = [];
    allValues.forEach(input => {
        if (input.checked) selValues.push(input.value);
    });
    return selValues;
};

const getInputValueById =(id)=>{
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}