let verificadorSort = true;

let valoresArray =  [
    {
        identificador: 1, 
        nome: "Vinicius", 
        email: "vinicius@gmail.com", 
        data: "1994-09-05T00:00:00.000"
    }, {
        identificador: 2, 
        nome: "Antonio", 
        email: "antonio@gmail.com", 
        data: "1994-09-03T00:00:00.000"
    }, {
        identificador: 3, 
        nome: "Lucas", 
        email: "lucas@gmail.com", 
        data: "1996-01-19T00:00:00.000"
    }, {
        identificador: 4, 
        nome: "Marcio", 
        email: "marcio@gmail.com", 
        data: "1995-12-24T00:00:00.000"
    }];

const valoresMap = valoresArray.map((item, index) => {
    return {
        identificador : item.identificador,
        nome : item.nome,
        email : item.email,
        data : item.data
    }
});

const preencherTabela = () => {
    const tbody = document.getElementById("tbody");
    const converteData = (data) => {
        return dataConvertida = new Date(data).toLocaleDateString('pt-BR');
    };

    const rows = valoresMap.map((item, index) => {
        return `<tr>
            <td>` + item.identificador + `</td>
            <td>` + item.nome + `</td>
            <td>` + item.email + `</td>
            <td>` + converteData(item.data) + `</td>
        </tr>`;
    });

    tbody.innerHTML = rows.join('');
}

const calcularPaginas = (tamanhoArray, quantidade) => {
    const tfoot = document.getElementById("tfoot");
    let numeroDePaginas = parseInt(tamanhoArray/quantidade);
    if ((tamanhoArray % quantidade) > 0){
        numeroDePaginas++;
    }
    tfoot.innerHTML = "<tr><td colspan='4'>"+ 1 + "/"+ numeroDePaginas +"</td></tr>";
}

const valoresSort = (tipo) => {
    switch(tipo){
        case "nome":
            tbody.innerHTML = "";
            if (verificadorSort === true){
                valoresMap.sort((a,b) => (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0));
                verificadorSort = false;
                thIdentificador.innerHTML = "N";
                thNome.innerHTML = "Nome<i class='fa fa-arrow-circle-down'></i>";
                thEmail.innerHTML = "Email";
                thData.innerHTML = "Data";
            }else{
                valoresMap.sort((a,b) => (a.nome < b.nome) ? 1 : ((b.nome < a.nome) ? -1 : 0));
                verificadorSort = true;
                thNome.innerHTML = "Nome<i class='fa fa-arrow-circle-up'></i>";
            }
            preencherTabela();
        break;

        case "email":
            tbody.innerHTML = "";
            if (verificadorSort === true){
                valoresMap.sort((a,b) => (a.email > b.email) ? 1 : ((b.email > a.email) ? -1 : 0));
                verificadorSort = false;
                thIdentificador.innerHTML = "N";
                thNome.innerHTML = "Nome";
                thEmail.innerHTML = "Email<i class='fa fa-arrow-circle-down'></i>";
                thData.innerHTML = "Data";
            }else{
                valoresMap.sort((a,b) => (a.email < b.email) ? 1 : ((b.email < a.email) ? -1 : 0));
                verificadorSort = true;
                thEmail.innerHTML = "Email<i class='fa fa-arrow-circle-up'></i>";
            }

            preencherTabela();
            verificador = false;
        break;

        case "data":
            tbody.innerHTML = "";
            if (verificadorSort === true){
                valoresMap.sort((a,b) => (a.data > b.data) ? 1 : ((b.data > a.data) ? -1 : 0));
                verificadorSort = false;
                thIdentificador.innerHTML = "N";
                thNome.innerHTML = "Nome";
                thEmail.innerHTML = "Email";
                thData.innerHTML = "Data<i class='fa fa-arrow-circle-down'></i>";
            }else{
                valoresMap.sort((a,b) => (a.data < b.data) ? 1 : ((b.data < a.data) ? -1 : 0));
                verificadorSort = true;
                thData.innerHTML = "Data<i class='fa fa-arrow-circle-up'></i>";
            }

            preencherTabela();
            verificador = false;
        break;

        case "identificador":
            tbody.innerHTML = "";
            if (verificadorSort === true){
                valoresMap.sort((a,b) => (a.identificador > b.identificador) ? 1 : ((b.identificador > a.identificador) ? -1 : 0));
                verificadorSort = false;
                thIdentificador.innerHTML = "N<i class='fa fa-arrow-circle-down'></i>";
                thNome.innerHTML = "Nome";
                thEmail.innerHTML = "Email";
                thData.innerHTML = "Data";
            }else{
                valoresMap.sort((a,b) => (a.identificador < b.identificador) ? 1 : ((b.identificador < a.identificador) ? -1 : 0));
                verificadorSort = true;
                thIdentificador.innerHTML = "N<i class='fa fa-arrow-circle-up'></i>";
            }

            preencherTabela();
            verificador = false;
        break;
    }
}

window.onload = () => {
    preencherTabela();
    calcularPaginas(valoresArray.length, 5);
    document.getElementById("thIdentificador").innerHTML = "N<i class='fa fa-arrow-circle-up'></i>";
    document.getElementById("thNome").innerHTML = "Nome<i class='fa fa-arrow-circle-up'></i>";
    document.getElementById("thEmail").innerHTML = "Email<i class='fa fa-arrow-circle-up'></i>";
    document.getElementById("thData").innerHTML = "Data<i class='fa fa-arrow-circle-up'></i>";
}



