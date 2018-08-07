const { expect } = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const { manipulacaoVetor } = require('../js/manipulacaoVetor');

lab.test('retorna true quando tiver elementos repetidos', () => {
    var vetor = [1,2,2,3];
    obj = new manipulacaoVetor();
    expect(obj.Repetidos(vetor)).to.equal(true);
});

lab.test('retorna mensagem de erro quando os dados forem invalidos', () => {
    var vetor = ['a', 'b' , 3];
    obj = new manipulacaoVetor();
    expect(obj.Repetidos(vetor)).to.equal('Dados invalidos');
});

lab.test('retorna mensagem de erro quando o vetor estiver vazio', () => {
    var vetor = [];
    obj = new manipulacaoVetor();
    expect(obj.Repetidos(vetor)).to.equal('Dados invalidos');
});
