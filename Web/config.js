
function getData(){
    fetch('http://127.0.0.1:2700/api')
    .then(response => response.json())
    .then(async data => {
        console.log(data);
        return await data;
    })
    .catch(err => console.log(err));
}

function buildPage(){
    console.log('Building');
    var myData = getData();
    document.getElementById('CAR').innerHTML = myData[0].modelo;
    
}