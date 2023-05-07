const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1';
function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function(event){
         if(xhttp.readystate === 4){
            if(xhttp.status === 200){
                
            }
         }
    }
}