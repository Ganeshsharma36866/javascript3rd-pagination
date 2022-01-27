// import { url } from "inspector";
// import { async } from "regenerator-runtime";
import axios from 'axios';
const api = 'https://api.instantwebtools.net/v1/passenger?page=1&size=20'
    ;//let ultag = document.querySelector("ul");
let currentPage = 1
let data = [];
let totalpages1;



document.getElementById("first").addEventListener("click", (e) => {
    e.preventDefault();
    getData(1)
    currentPage = 1
    document.getElementById('last').disabled = false;
    document.getElementById('next').disabled = false;
    document.getElementById("first").disabled = true;
    document.getElementById('previous').disabled = true;
    document.getElementById('one').value = "1";
    document.getElementById('two').value = "2";
    document.getElementById('three').value = "3";
    document.getElementById('four').value = "4";
    document.getElementById('five').value = "5";

})

document.getElementById("one").addEventListener("click", (e) => {
    e.preventDefault();
    getData(document.getElementById('one').value)
    currentPage = document.getElementById('one').value
    console.log(document.getElementById('one').value);
})
document.getElementById("two").addEventListener("click", (e) => {
    e.preventDefault();
    getData(document.getElementById('two').value)
    currentPage = document.getElementById('two').value
})
document.getElementById("three").addEventListener("click", (e) => {
    e.preventDefault();
    getData(document.getElementById('three').value)
    currentPage = document.getElementById('three').value
})
document.getElementById("four").addEventListener("click", (e) => {
    e.preventDefault();
    getData(document.getElementById('four').value)
    currentPage = document.getElementById('four').value
})
document.getElementById("five").addEventListener("click", (e) => {
    e.preventDefault();
    getData(document.getElementById('five').value)
    currentPage = document.getElementById('five').value
})
document.getElementById("last").addEventListener("click", (e) => {
    e.preventDefault();
    //getData(totalpages1.length-1);
    document.getElementById('one').value = totalpages1 - 4;
    document.getElementById('two').value = totalpages1 - 3;
    document.getElementById('three').value = totalpages1 - 2;
    document.getElementById('four').value = totalpages1 - 1;
    document.getElementById('five').value = totalpages1;
    document.getElementById('last').disabled = true;
    document.getElementById('next').disabled = true;
    document.getElementById('previous').disabled = false;
    document.getElementById('first').disabled = false;  
})
document.getElementById("next").addEventListener("click", (e) => {
    e.preventDefault();
    getData(currentPage + 1)
    currentPage++;
    let last = parseInt(document.getElementById('five').value);
    console.log(currentPage);
    if (last==totalpages1-1) {
        document.getElementById('last').disabled = true;
        document.getElementById('next').disabled = true;
    }
    else {
        document.getElementById('last').disabled = false;
        document.getElementById('next').disabled = false;
    }
    document.getElementById('one').value = parseInt(document.getElementById('one').value) + 1;
    document.getElementById('two').value = parseInt(document.getElementById('two').value) + 1;
    document.getElementById('three').value = parseInt(document.getElementById('three').value) + 1;
    document.getElementById('four').value = parseInt(document.getElementById('four').value) + 1;
    document.getElementById('five').value = parseInt(document.getElementById('five').value) + 1;
})
document.getElementById("previous").addEventListener("click", (e) => {
    document.getElementById('next').disabled = false;
    e.preventDefault();
    getData(currentPage - 1)
    currentPage--;
    let one = document.getElementById("one").value;
    if (one == "1") {
        document.getElementById('previous').disabled = true;
        document.getElementById('first').disabled = true;
        return false;
    }
    console.log(currentPage);
    document.getElementById('one').value = parseInt(document.getElementById('one').value) - 1;
    document.getElementById('two').value = parseInt(document.getElementById('two').value) - 1;
    document.getElementById('three').value = parseInt(document.getElementById('three').value) - 1;
    document.getElementById('four').value = parseInt(document.getElementById('four').value) - 1;
    document.getElementById('five').value = parseInt(document.getElementById('five').value) - 1;
    document.getElementById('last').disabled = false;
    document.getElementById('next').style.disabled = false;

})
function getData(no) {
    console.log("page no,", no);
    axios.get(`https://api.instantwebtools.net/v1/passenger?page=${no}&size=20`)
        .then(response => {
            let totalpages = response.data.totalPages;
            totalpages1 = totalpages;
            data = response.data.data;
            readData(response.data.data);
        }
        ).catch(err => console.log(err))
    let one = document.getElementById("one").value;
    if (one == "1") {
        document.getElementById('previous').disabled = true;
        document.getElementById('first').disabled = true;
        return false;
    }
    else {
        document.getElementById('previous').disabled = false;
        document.getElementById('first').disabled = false;
        return true;

    }
}

getData(2);
//document.getElementById("last").addEventListener("click", (e) => {
//   GetData1();  
// using fetch call API
// fetch(apiurl).then(response => {
//     return response.json()
// }).then(data => {
//     console.log(data);
// })
// Using AXIOS call API
// readData();
// getData();
//})

const readData = (data) => {
    console.log("data ,,,, ", data);
    let table = document.getElementById("tab")
    //getData(data);
    let row = " "
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        row += `<tr>
             <td>${data[i].id}</td>

            <td>${data[i].name}</td>
            <td>${data[i].country}</td>
            <td>${data[i].trips}</td>
            <td>${data[i].airline.country}</td>
        
        </tr>`
    }
    table.innerHTML = row;
}
function editdata() {



}
function update() {


}
function Del(t) {
    data.splice(t, 1);
    console.log(data)
    readData()
}



