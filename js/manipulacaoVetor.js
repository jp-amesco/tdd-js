class manipulacaoVetor{

	MaiorElemento(vetor)
	{
		var elemento = 0;
		if (vetor.length == 0 || typeof(vetor) == 'string') {
			return 'dados invalidos'
		}
		for (var i = 0; i < vetor.length; i++) {
			if (isNaN(vetor[i])) {
				return 'dados invalidos';
			}
			if(vetor[i] >= elemento)
			{
				elemento = vetor[i];
			}
		}
		return elemento;
	}

	Media(vetor)
	{
		var media = 0;
		if(vetor.length == 0 || typeof(vetor) == 'string') {
			return 'dados invalidos';
		}

		for (var i = 0; i < vetor.length; i++) {
			if (isNaN(vetor[i])) {
				return 'dados invalidos';
			}
			media += vetor[i];   
		}
		media = media / (vetor.length);
		return media;
	}

	Repetidos(vetor)
	{
		var vetorRepetidos = [];
		var cont = 0;
		if(vetor.length == 0 || typeof(vetor) == 'string') {
			return 'Dados invalidos';
		}
		for (var i = 0; i < vetor.length; i++)
		{
			if (isNaN(vetor[i])) {
				return 'Dados invalidos';
			}
			var aux = vetor[i];			
			for (var j = 0; j < vetor.length; j++) {
				if (aux == vetor[j]) {
					cont++;
				}		
			}
			if (cont >= 2) {
				return true;
			}
			cont = 0;
		}
		return false;
	}
}

var teste = new manipulacaoVetor();
var veteste = [1,2,2,3,2,2,2,2,2,2];
console.log(teste.Repetidos(veteste));

module.exports = {manipulacaoVetor}