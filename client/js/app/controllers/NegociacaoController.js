class NegociacaoController {
              
    #inputData;
    #inputQuantidade;
    #inputValor;
    #listaNegociacoes;
    
    constructor() {

        let $ = document.querySelector.bind(document);
        this.#inputData = $('#data');
        this.#inputQuantidade = $('#quantidade');
        this.#inputValor = $('#valor');
        this.#listaNegociacoes = new ListaNegociacoes();
    }
    
    adiciona(event) {
        
        event.preventDefault();
        this.#listaNegociacoes.adiciona(this.#criaNegociacao());
        this.#limpaFormulario();   
    }
    
    #criaNegociacao() {
        
        return new Negociacao(
            DateHelper.textoParaData(this.#inputData.value),
            this.#inputQuantidade.value,
            this.#inputValor.value);    
    }
    
    #limpaFormulario() {
     
        this.#inputData.value = '';
        this.#inputQuantidade.value = 1;
        this.#inputValor.value = 0.0;
        this.#inputData.focus();   
    }
}