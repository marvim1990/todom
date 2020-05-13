let tarefas = [{
        id: 1,
        texto: "Escovar os dentes",
        prioridade: 3,
        feito: true
    },
    {
        id: 2,
        texto: "gravar desafio",
        prioridade: 1,
        feito: true
    }, {
        id: 1,
        texto: "fazer almoço",
        prioridade: 2,
        feito: false
    }, {
        id: 1,
        texto: "pagar escolas",
        prioridade: 3,
        feito: false
    }
]
const render = (tarefas) => {
    let table = document.getElementById("table")
    table.innerText = "";

    // criando lista de tarefas
    for (const tarefa of tarefas) {
        // criando uma tabela
        let row = document.createElement('tr');

        // criar checkbox
        let checkBox = document.createElement('input')
        checkBox.setAttribute("type", "checkbox")

        // criar celula com checbox
        let tdCheck = document.createElement('td');
        tdCheck.appendChild(checkBox);

        // adicionar esse td a row 
        row.appendChild(tdCheck);

        // criar td texto
        let tdTexto = document.createElement('td');
        tdTexto.innerText = tarefa.texto;
        row.appendChild(tdTexto)

        // criar td de ações
        let tdAcoes = document.createElement('td');
        let i = document.createElement('i');
        i.className = "material-icons";
        i.innerText = "delete";
        tdAcoes.appendChild(i);
        row.appendChild(tdAcoes);

        table.appendChild(row);

    }
}


const create =(texto,prioridade) =>{
    return{
        id:tarefas[tarefas.length -1].id+1,
        texto,
        prioridade,
        feito:false
    }
}
// capturar elementos da pagina
let form = document.getElementById('form')


// primeira forma
// form.onsubmit = (event)=>{
//     evt.preventDefault();
// }

// segunda forma
form.addEventListener('submit',(event)=>{
    // evitar comportamento padrao do form
    event.preventDefault();

    // capturar o texto digitado pelo usuario
    let texto= document.getElementById("tf_2do").value;
    // verificar se existe prioridade setada
    let strInicio = texto.substr(0,3);
    switch (strInicio) {
        case '#1':
            prioridade =1;
            texto = texto.slice(3);
            break;
        case '#2':
            prioridade =2;
            texto = texto.slice(3);
            break;
        case '#3':
            prioridade =3;
            texto = texto.slice(3);
            break;
        default:
            prioridade = ';'
            break;
    }

    
    // criar o objeto tarefa sabendo o texto e a prioridade
    let tarefa = create(texto,prioridade);

    // adicionar o objetotarefa ao arrey de tarefas
    tarefas.push(tarefa);

    // renderizar a minha lista novamente
    render(tarefas);
    
    // limpar campo do input
    document.getElementById('tf_2do').value =""
});

render(tarefas);