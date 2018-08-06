const { expect } = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const { manipulacaoVetor } = require('../js/manipulacaoVetor');

lab.test('retorna true quando elemento foi o maior elemento do vetor', () => {
    var vetor = [1,2,3,4];
    obj = new manipulacaoVetor();
    expect(obj.MaiorElemento(vetor)).to.equal(4);
});

lab.test('retorna true quando elemento for uma mensagem de erro ao receber dados incorretos', () => {
    var vetor = [null ,'b','c', null];
    obj = new manipulacaoVetor();
    expect(obj.MaiorElemento(vetor)).to.equal('dados invalidos');
});

lab.test('retorna true quando elemento for uma mensagem de erro ao receber vetor vazio', () => {
    var vetor = [];
    obj = new manipulacaoVetor();
    expect(obj.MaiorElemento(vetor)).to.equal('dados invalidos');
});