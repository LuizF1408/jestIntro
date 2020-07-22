const Math = require('./op');

describe('este programa soma 3 numeros', () => {
    it('soma de 1,2 e 3 deve ser 6', () => {
        expect(Math.sum(1, 2, 3)).toBe(6);
    })

});

describe('este programa multiplica 2 numeros', () => {
    it('multiplicação de 2 e 2 é 4', () => {
        expect(Math.multi( 2, 2)).toBe(4);
    })

});

describe('soma 2 parametros e multiplica pelo 3 parametro', () => {
    it('2+2*2 é igual 8', () => {
        expect(Math.ex4(2,2,2)).toBe(8);
    })

});

describe('este programa calcula exponenciação ', () => {
    it('2 elevado a 2 é 4', () => {
        expect(Math.ex5(2,2)).toBe(4);
    })

});




