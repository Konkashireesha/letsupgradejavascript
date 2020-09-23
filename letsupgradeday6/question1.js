let employees = [
    {
      name: "siri",
      age: 21,
      city: "chennai",
      salary: "50000",
    },
    {
      name: "sri",
      age: 34,
      city: "banglore",
      salary: "40000",
    },
    {
      name: "pooja",
      age: 35,
      city: "hyderabad",
      salary: "45000",
    },
    {
      name:"monika",
      age:26,
      city:"chennai",
      salary:"30000",
    },
    {
      name:"sai",
      age:34,
      city:"hyderabad",
      salary:"35000",
    },
  ];
  
  function display(superarray) {
    let tabledata = "";
  
    superarray.forEach(function (employee, index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${employee.name}</td>
      <td>${employee.age}</td>
      <td>${employee.planet}</td>
      <td>${employee.height}</td>
      <td>
      <button onclick='deleteemployee(${index})'>delete</button>
      <button onclick='showModal(${index})'>update</button>
      </td>
      </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    //   document.getElementById("tdata").innerHTML = tabledata;
  }
  
  display(employees);
  
  function addemployee(e) {
    e.preventDefault();
    let employee = {};
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let salary = document.getElementById("salary").value;
    employee.name = name;
    employee.age = Number(age);
    employee.city = city;
    employee.salary = salary;
  
    employees.push(employee);
  
    display(employees);
  
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    document.getElementById("salary").value = "";
  }
  
  function searchByName() {
    let searchValue = document.getElementById("searchName").value;
  
    let newdata = employees.filter(function (superhero) {
      return (
        employee.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }
  
  function deleteemployee(index) {
    employees.splice(index, 1);
    display(employees);
  }
  
  let updateIndex;
  
  function copyemployee(index) {
    updateIndex = index;
    let employee = employees[index];
  
    document.getElementById("upname").value = employee.name;
    document.getElementById("upage").value = employee.age;
    document.getElementById("upcity").value = employee.city;
    document.getElementById("upsalary").value = employee.salary;
  }
  
  function updateemployee(e) {
    e.preventDefault();
    let employee = employees[updateIndex];
    console.log(employee);
    let name = document.getElementById("upname").value;
    let age = document.getElementById("upage").value;
    let city = document.getElementById("upcity").value;
    let salary = document.getElementById("upsalary").value;
    employee.name = name;
    employee.age = Number(age);
    employee.city = city;
    employee.salary = salary;
    console.log(employee);
  
    display(employees);
  
    // code for hiding from anywhere
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
  }
  
  function showModal(index) {
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "block";
  
    copyemployee(index);
  }
  
  function hideModal(event) {
    if (event.target.className == "modal") {
      let modal = document.getElementsByClassName("modal")[0];
      modal.style.display = "none";
    }
  }
