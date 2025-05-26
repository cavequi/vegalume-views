function revelaEsconde(conteudo){
    if (conteudo === "localizacao"){
        document.getElementById("p-localizacao").classList.toggle("mostrar");
        document.getElementById("btn-localizacao").classList.toggle("menos");
    }
    if (conteudo === "horarios"){
        document.getElementById("p-horarios").classList.toggle("mostrar");
        document.getElementById("btn-horarios").classList.toggle("menos");
    }
    if (conteudo === "contatos"){
        document.getElementById("p-contatos").classList.toggle("mostrar");
        document.getElementById("btn-contatos").classList.toggle("menos");
    }
}