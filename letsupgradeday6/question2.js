let buses = [
    {
        name="redbus",
        source="anantapur",
        destination="ongole",
        number="24",
        passengercapacity="21",
    },
    
  ];
  
  function display(superarray) {
    let tabledata = "";
  
    superarray.forEach(function (bus, index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${bus.name}</td>
      <td>${bus.source}</td>
      <td>${bus.destination}</td>
      <td>${bus.number}</td>
      <td>${bus.passengercapacity}</td>
      <td>
      <button onclick='deletebus(${index})'>delete</button>
      <button onclick='showModal(${index})'>update</button>
      </td>
      </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    //   document.getElementById("tdata").innerHTML = tabledata;
  }
  
  display(buses);
  
  function addbus(e) {
    e.preventDefault();
    let bus = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let number = document.getElementById("number").value;
    let passengercapacity =document.getElementById("passengercapacity")
    bus.name = name;
    bus.source = source;
    bus.destination = destination;
    bus.number= number;
    bus.passengercapacity =passengercapacity;
  
    buses.push(bus);
  
    display(buses);
  
    document.getElementById("name").value = "";
    document.getElementById("source").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("number").value = "";
    document.getElementById("passengercapacity").value ="";
  }
  
  function searchBysource() {
    let searchValue = document.getElementById("searchsource").value;
  
    let newdata = buses.filter(function (bus) {
      return (
        bus.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }
  
  function deletebus(index) {
    buses.splice(index, 1);
    display(buses);
  }
  
  let updateIndex;
  
  function copybus(index) {
    updateIndex = index;
    let bus = buses[index];
  
    document.getElementById("upname").value = bus.name;
    document.getElementById("upsource").value = bus.source;
    document.getElementById("updestination").value = bus.destination;
    document.getElementById("upnumber").value = bus.number;
    document.getElementById("uppassengercapacity").value=bus.passengercapacity;
  }
  
  function updatebus(e) {
    e.preventDefault();
    let bus = buses[updateIndex];
    console.log(bus);
    let name = document.getElementById("upname").value;
    let source = document.getElementById("upsource").value;
    let destination = document.getElementById("updestination").value;
    let number = document.getElementById("upnumber").value;
    let passengercapacity = document.getElementById("uppassengercapacity").value;
    bus.name = name;
    bus.source = source;
    bus.destination = destination;
    bus.number = number;
    bus.passengercapacity = passengercapacity;
    console.log(bus);
  
    display(buses);
  
    // code for hiding from anywhere
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
  }
  
  function showModal(index) {
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "block";
  
    copybus(index);
  }
  
  function hideModal(event) {
    if (event.target.className == "modal") {
      let modal = document.getElementsByClassName("modal")[0];
      modal.style.display = "none";
    }
  }
