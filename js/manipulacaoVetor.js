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
}
var teste = new manipulacaoVetor();
aaa ='12374';
teste.Media(aaa);
module.exports = {manipulacaoVetor}