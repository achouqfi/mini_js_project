function insertion() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    var Btn = document.createElement("button");
    Btn.onclick=function(){
         this.parentNode.remove();
    };
    Btn.innerHTML="delete";
   

    if (inputValue === '') {
      alert("saisir votre tache!");
    } else {
        li.appendChild(t);
        li.appendChild(Btn);
      document.getElementById("contenu").appendChild(li);
    }
    document.getElementById("input").value = "";
}