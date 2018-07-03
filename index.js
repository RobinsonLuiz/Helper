var input = document.querySelector('#emlinha');
var chat = document.querySelector('#chat');
var mapper = [
    "git",
    "--help",
    "version",
    "status",
    "add",
    "checkout",
    "commit",
    "merge",
    "config",
    "clone",
    "branch",
    "pull",
    "push",
    "fetch",
]

var resposta = {
    "git":"Bem vindo ao GIT HELPER por favor utilize o comando git junto com o comando no qual está precisando de ajuda",
    "--help":"Em Construção, em breve novidades!",
    "version":"Versão 0.1",
    "status":"Mostrar o status da árvore de trabalho",
    "add":"Adicione o conteúdo do arquivo ao índice",
    "checkout":"Alterne ramificações ou restaure arquivos da árvore de trabalho",
    "commit":"Registrar alterações no repositório",
    "merge":"Junte dois ou mais históricos de desenvolvimento juntos",
    "config":"Utilize , config --global user.name -> 'meuusuario' e config --global user.email -> 'meuemail@mail.com para fazer as configurações iniciais",
    "clone":"Clone um repositório em um novo diretório",
    "branch":"Listar, criar ou excluir filiais",
    "pull":"Buscar e integrar com outro repositório ou uma filial local",
    "push":"Atualizar referências remotas junto com objetos associados",
    "fetch":"Baixar objetos e refs de outro repositório",
}
var achou = false;
input.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        achou = false;
        var todos = input.querySelectorAll('#textInput');
        var githelper = document.createElement('div');
        githelper.classList.add('githelper');
        for (var i = 0; i < todos.length; i++) {
            if(todos[i].focus) {
                if (todos[i].value.toLowerCase().includes('git')) {
                    mapper.map((chaves) => {
                        if (todos[i].value.toLowerCase().includes(chaves)) {
                            for (var prop in resposta) {
                                if (chaves.toLowerCase().includes(prop)) {
                                    achou = true;
                                    githelper.textContent = resposta[prop];
                                    break;
                                } else {
                                    githelper.textContent = "Não encontramos uma solução , desculpe";
                                }
                            }
                        }
                    })
                    this.appendChild(githelper);
                } else {
                    githelper.textContent = "Por favor utilize a palavra git no inicio";
                }
            }
            todos[i].setAttribute('disabled','disable');
            todos[i].focus = false;
            this.appendChild(githelper);
        }
        let span = document.createElement('span');
        span.textContent = "> ";
        var input2 = document.createElement('input');
        input2.id = "textInput";
        input2.classList.add('input');
        input2.placeholder = "Qual Comando você precisa de ajuda?";
        input2.type = "text";
        this.appendChild(span);
        this.appendChild(input2);
        input2.focus();
     }
})

$(document).ready(function(){
    $(".contatos").click(function(event){
        event.preventDefault();
        $(".divcontato").animate({
            left: '0',
            opacity: '1',
            height: '30vh',
            width: '30vh',
        });
    });
});

$(document).ready(function() {
    $(".fecharContatos").click(function(event) {
        event.preventDefault();
        $(".divcontato").animate({
            left: '-200px',
            opacity: '0',
            height: '0',
            width: '0'
        });
    })
})