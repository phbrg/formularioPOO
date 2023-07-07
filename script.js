// função de verificação
function validaForm() {

    // pegando dados dos inputs
    const nome = document.getElementById("nome");
    const usuario = document.getElementById("usuario");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const rSenha = document.getElementById("rSenha");

    // criando objeto
    class Formulario {
        constructor(nome, usuario, email, senha, rSenha) {
            this.nome = nome;
            this.usuario = usuario;
            this.email = email;
            this.senha = senha;
            this.rSenha = rSenha;
        }

        // criando metodo de verificação se algum input esta vazio
        validaVazio() {
            if(this.nome.length <= 0) return false;
            if(this.usuario.length <= 0) return false;
            if(this.email.length <= 0) return false;
            if(this.senha.length <= 0) return false;
            if(this.rSenha.length <= 0) return false;

            return true;
        }

        // criando metodo que valida se o input usuario contem caracteres especiais
        validaCaracter() {
            if(!/^[a-zA-Z0-9]+$/.test(this.usuario)) return false;

            return true;
        }

        // criando metodo que verifica se o campo senha e repetir senha são iguais
        validaSenha() {
            if(this.senha !== this.rSenha) return false;

            return true;
        }

        // criando metodo que valida tamanho do usuario e senha
        validaTamanhos() {
            if(this.usuario.length < 3 || this.usuario.length > 12 || this.senha.length < 6) return false;

            return true;
        }

        // criando metodo que faz todas as validações em 1 só
        verificacaoFull() {
            if(this.validaVazio() === false) {
                alert("Todos campos devem estar preenchidos!");
                return;
            } else if(this.validaCaracter() === false) {
                alert("O usuario não pode conter caracteres especiais!");
                return;
            } else if(this.validaSenha() === false) {
                alert("As senhas não coincidem!");
                return;
            } else if(this.validaTamanhos() === false) {
                alert("Usuario ou senha com tamanhos invalidos!");
                return;
            } else {
                alert("Nenhum problema encontrado!");
            }
        }
    }
    const validacao = new Formulario(nome.value, usuario.value, email.value, senha.value, rSenha.value); // criando a validação
    validacao.verificacaoFull(); // realizando a verificação
}