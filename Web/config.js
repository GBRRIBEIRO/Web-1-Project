
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
    var myData;
    console.log('Building');
    myData = getData();
    document.getElementById('CAR').innerHTML = myData[0].modelo;
    
}

function detailsClick(id){
 
    if (document.getElementById(id).style.display =='flex') {
        document.getElementById(id).style.display = 'none';
    }
    else {
        document.getElementById(id).style.display = 'flex';
    
    }
}
