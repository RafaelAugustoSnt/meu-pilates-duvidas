const botaoDuvida = document.querySelector(".botao");


botaoDuvida.addEventListener("click", validacao);
botaoDuvida.addEventListener("keyup", () =>{
    if('keyup' === 13){
        validacao;
    };
});
function validacao(e){
    var $inputs = document.querySelectorAll(".inputs");
    var index = 0;
    while($inputs[index]){
        console.log($inputs[index].value);
        if($inputs[index].value === ''){
            alert('Preencha todos os campos por favor');
            e.preventDefault()
            return;
        }
        index++;
    }
    alert('Sua duvida foi enviada! entraremos em contato com a sua resposta');
};