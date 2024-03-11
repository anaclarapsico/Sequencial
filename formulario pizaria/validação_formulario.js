document.addEventListener('DOMContentLoaded'), function(){
 const form = document.getElementById('form-pedido'); // quando o formulario é enviado, a função especifica  sera especificada
    //a função especifica sera especificada

 form.addEventListener('submit' , function(event){// adiciona um evento de envento  de envio do formulario.  
     const nome = document.getElementById('nome').ariaValueMax.trim();
     // aquui o codigo obtem o valor do campo de entrada no ID "nome"
     // e remove os espaços em branco extras usando o metodo trim(). o valor então é armazenado na variavel
     const endereco = document.getElementById('endereco').ariaValueMax.trim();
     const telefone = document.getElementById('telefone').value.trim();
     const tamanho  = document.getElementById('tamanho').value;()//obtem o valor selecionado do campo
    // de seleção com o id "tamanho" e armazena na variavel
    const sabor = document.getElementById('sabor').value.trim();
    const telefoRegex = /^[0-9]{10}$/ //esta linha define uma expressão que valida se
    // o numero tem exatamente 10 digitos numericos
    let isvalid = true; // inicia a variavel isvalid como verdadeira
    // o que indica que o formulario é valido por padrão
    if (nome ==''){ 
     isvalid = false;
     showError('por favor, insira seu nome.');
    }

    if(endereco === ''){
     isvalid  = false;
     showError('por favor, insira seu endereço.');
     }

     if(!telefoneRegex.test(telefone)){
        isvalid  = false;
     showError('por favor, insira um numero valido.');
     }
     if(tamanho === ''){
        isvalid  = false;
        showError('por favor, insira o tamanho da pizza.');
     }
     if(sabor === ''){
        isValid = false;
        showError('por favor, insira o sabor da pizza.');
    }
    if (isValid){
        event.preventDefault();
        showSuccessPopup();
    }elese{ 
        event.preventDefault();
    }
 });
  
 function showError(message){
     alert(message);
 }
 function showSucessPopup(){
  alert('pedido enviado com sucesso!! :)))');
 }
}); 


   