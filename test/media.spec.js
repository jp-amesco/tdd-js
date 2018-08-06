const { expect } = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const { manipulacaoVetor } = require('../js/manipulacaoVetor');

lab.test('retorna true quando a resposta for a media de todos os elementos do vetor', () => {
    var vetor = [1,2,3,4];
    obj = new manipulacaoVetor();
    expect(obj.Media(vetor)).to.equal(2.5);
});

lab.test('retorna true quando a resposta for uma mensagem de erro se os dados forem invalidos', () => {
    var vetor = '1234856';
    obj = new manipulacaoVetor();
    expect(obj.Media(vetor)).to.equal('dados invalidos');
});

lab.test('retorna true quando a resposta for uma mensagem de erro se o vetor estiver vazio', () => {
    var vetor = [];
    obj = new manipulacaoVetor();
    expect(obj.Media(vetor)).to.equal('dados invalidos');
});
