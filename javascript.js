var localiza = document.getElementById("search")
var nomes = document.getElementById("sideRigth")
var lista = document.getElementsByTagName("li")
filtro = input.value.toUpperCase()

for (i = 0; i < li.length; i++){
    a = li[i].getElementsByTagName("a")[0]
    textValue = a.textContent || a.innerText
    if (textValue.toUpperCase().indexOf(filter) > -1){
        li[i].style.diplay=""
    } else{
        li[i].style.display = "none"
     }
    }
