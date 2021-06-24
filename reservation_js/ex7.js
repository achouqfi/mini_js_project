
var Tprix = document.getElementById("total");

 function typeF(val){

     Tprix.value =val;
 }

function totalIt(id){
    var id = document.getElementById(id);

    var total = 0;
    if(id.checked == true){
        total += parseFloat(id.value);
    }else{
        total -= parseFloat(id.value);
    }

    Tprix.value = (Number (Tprix.value) + Number(total)).toFixed(2);
}

function close(){
    document.getElementById("nv").style.display="none";
}

function ajout(){

    var elmnt = document.getElementsByTagName("DIV")[0];
    var cln = elmnt.cloneNode(true);
    document.body.appendChild(cln);

    document.getElementById("Aj").style.display="none";
}