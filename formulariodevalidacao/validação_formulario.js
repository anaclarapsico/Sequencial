document.addEventListener('DOMContentLoaded'), function(){
    const form = document.getElementById('form-validação'); // quando o formulario é enviado, a função especifica  sera especificada
       //a função especifica sera especificada
   
    form.addEventListener('submit' , function(event){// adiciona um evento de envento  de envio do formulario.  
        const nome = document.getElementById('nome').ariaValueMax.trim();
        // aquui o codigo obtem o valor do campo de entrada no ID "nome"
        // e remove os espaços em branco extras usando o metodo trim(). o valor então é armazenado na variavel
        const data de nasci = document.getElementById('data de nascimento').ariaValueMax.trim();
        const genero  = document.getElementById('genero').value;()//obtem o valor selecionado do campo
       // de seleção com o id "genero" e armazena na variavel
       const endereço = document.getElementById('endereço').value.trim();
       const telefone = document.getElementById('telefone').value.trim();
       const telefoRegex = /^[0-9]{10}$/ //esta linha define uma expressão que valida se
       // o numero tem exatamente 10 digitos numericos
       const insira seu email = document.getElementById('insira seu email').value.trim();
       const insira o nome da escola = document.getElementById('insira o nome da escola').value.trim();
       const qual sua serie atual? = document.getElementById('qual sua serie atua?').value.trim();
       const nome responsavel = document.getElementById('nome responsavel').value.trim();
       const contato responsavel = document.getElementById('contato do responsavel').value.trim();
       const CPF = document.getElementById('insira seu CPF').value.trim();
       const RG = document.getElementById('insira seu RG').value.trim();
       let isvalid = true; // inicia a variavel isvalid como verdadeira
       // o que indica que o formulario é valido por padrão
       
       if (nome === '') {
        isValid = false;
        showError('Por favor, insira seu nome.');
    }

    if (endereco === '') {
        isValid = false;
        showError('Por favor, insira seu endereço.');
    }

    if (!telefoneRegex.test(telefone)) {
        isValid = false;
        showError('Por favor, insira um número de telefone válido (apenas números, 10 dígitos).');
    }

    if (genero === '') {
        isValid = false;
        showError('Por favor, insira seu gênero.');
    }

    // Adicione validações para os outros campos

    if (cpf !== '' && !cpf.test(document.getElementById('cpf').value.trim())) {
        isValid = false;
        showError('Por favor, insira um CPF válido.');
    }
    
    if (rg !== '' && !rg.test(document.getElementById('rg').value.trim())) {
        isValid = false;
        showError('Por favor, insira um RG válido.');
    }
    if (isValid) {
        event.preventDefault();
        showSuccessPopup();
    } else {
        event.preventDefault();
    }

});
    function showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error';
        errorDiv.textContent = message;





    }
    function showSucessPopup(){
     alert(' enviado com sucesso!! :)))');
    }
   }); 
   ssss