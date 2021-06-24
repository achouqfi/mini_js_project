function newColone(){
    document.getElementById("popup").style.display="block";
}

function closeAdd(){
    document.getElementById("popup").style.display="none";
}

var imgs = "";


function insertion(){

    var table = document.getElementById("table-body");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var label1 = document.createElement("label");
    var label2 = document.createElement("label");
    var label3 = document.createElement("label");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var img1 = document.createElement("img");
    var line = document.createElement("tr");
    var input1 = document.createElement("input");
    var input2 = document.createElement("input");
    var input3 = document.createElement("input");

    input2.setAttribute("type", "date");
    input3.setAttribute("type", "file");
    img1.src= imgs;

    


    var button3 = document.createElement("button");
    var button4 = document.createElement("button");

    button1.innerHTML="Edit";
    button2.innerHTML="Delete";
    button3.innerHTML = "Save";
    button4.innerHTML = "Cancel";

    button3.style.display="none";
    button4.style.display="none";

    button1.style.background="white";
    button2.style.background="red";
    button2.style.color="white";
    img1.style.width="30px";


    label1.innerHTML  = document.getElementById("inputName").value;
    label2.innerHTML  = document.getElementById("inputDate").value;
    
    input1.value = document.getElementById("inputName").value;
    input2.value = document.getElementById("inputDate").value;

    input1.style.display="none";
    input2.style.display="none";
    input3.style.display="none";
    label3.appendChild(img1);
    td1.appendChild(label1);
    td2.appendChild(label2);
    td3.appendChild(label3);
    
    line.appendChild(td1);
    line.appendChild(td2);
    line.appendChild(td3);

    line.appendChild(button1);
    line.appendChild(button2);
    line.appendChild(button3);
    line.appendChild(button4);

    td1.appendChild(input1);
    td2.appendChild(input2);
    td3.appendChild(input3);

    table.appendChild(line);

    document.getElementById('popup').style.display="none";
    document.getElementById('inputName').value="";
    document.getElementById('inputDate').value="";
    document.getElementById('inputFile').value="";

    button2.onclick=function(){
        var del=confirm(" you want to delete this row?");

        if(del==true){
            this.parentNode.remove();
        }else{

        }
    }

    button1.onclick=function(){

        label1.style.display="none";
        label2.style.display="none";
        label3.style.display="none";

        button1.style.display="none";
        button2.style.display="none";
        button3.style.display="block";
        button4.style.display="block";

        input1.style.display="block";
        input2.style.display="block";
        input3.style.display="block";

    }

    button4.onclick=function(){

        input1.style.display="none";
        input2.style.display="none";
        input3.style.display="none";

        label1.style.display="block";
        label2.style.display="block";
        label3.style.display="block";

        button1.style.display="block";
        button2.style.display="block";
        button3.style.display="none";
        button4.style.display="none";

    }

    button3.onclick=function(){

        label1.innerHTML  = input1.value;
        label2.innerHTML  = input2.value;
        label3.innerHTML = input3.value;

        button1.style.display="block";
        button2.style.display="block";
        button3.style.display="none";
        button4.style.display="none";

        input1.style.display="none";
        input2.style.display="none";
        input3.style.display="none";

        label1.style.display="block";
        label2.style.display="block";
        label3.style.display="block";

    }

}

function insertimg(){
    imgs = URL.createObjectURL(event.target.files[0]);
}


