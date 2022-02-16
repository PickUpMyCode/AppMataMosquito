function comecar(){
    var dificulade = document.getElementById('dificuldade').value

    if(dificulade != ""){
        sessionStorage.setItem("dificuldade", dificulade)

        open("app.html", "_self")
    }else{
        alert("Selecione uma dificuldade!")
    }

}