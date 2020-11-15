/**
 * Escribe un programa que devuelva
 * los números del 0 al 100, sustituyendo los múltiplos de 3 por la palabra Fizz y, a su
 * vez, los múltiplos de 5 por Buzz. Para los números que a su vez son múltiplos de 3 y
 * 5, utiliza el combinado FizzBuzz,
 * sí la parte entera del número es divisible entre 3, en lugar de Fizz devuelve Fi
 * sí la parte entera del número es divisible entre 5, en lugar de Buzz devuelve Bu
 *
 * Nuestra empresa tiene diferentes tipos de refrescos, y se quiere aplicar la misma logica en las marcas FizzBuzz, CocaCola, EstrellaGalicia
 * Queda pendiente: Al recibir un número con décimales cuya parte entera sea divisible entre 3 y 5 deberá devolver:
 *  - Un string compuesto, por la mitad de carácteres empezando por secondName, seguido de la mitad de carácteres de firstName ej:
 *   { firstName: 'Estrella', secondName: 'Galicia', n: 15.3 } deberá retornar: 'GaliEstr'
 *   { firstName: 'Fizz', secondName: 'Buzz', n: 15.3 }  deberá retornar: 'BuFi'
 *   { firstName: 'Coca', secondName: 'Cola', n: 15.3 } deberá retornar: 'CoCo'
 */

type FizzBuzzResult = number | 'Fizz' | 'Fi' | 'Buzz' | 'FizzBuzz' | 'Error';
type FizzBuzzTestType = [input: number, expected: FizzBuzzResult][];

describe('RefrescosPaco Should', () => {

  describe('EstrellaGalicia', () => {
    it('Receive EstrellaGalicia and 3 and return Estrella', () => {
      const drink = refrescosPaco({
        firstName: 'Estrella',
        secondName: 'Galicia',
        n: 3,
      });
      expect(drink).toBe('Estrella');
    });
    it('Receive EstrellaGalicia and 6.3 and return Estr', () => {
      const drink = refrescosPaco({
        firstName: 'Estrella',
        secondName: 'Galicia',
        n: 6.3,
      });
      expect(drink).toBe('Estr');
    });
    it('Receive EstrellaGalicia and 5.3 and return Gali', () => {
      const drink = refrescosPaco({
        firstName: 'Estrella',
        secondName: 'Galicia',
        n: 5.3,
      });
      expect(drink).toBe('Gali');
    });
    it('Receive 15.3 and return GaliEstr', () => {
      const drink = refrescosPaco({
        firstName: 'Estrella',
        secondName: 'Galicia',
        n: 15.3
      });

      expect(drink).toBe('GaliEstr');
    })
  });
  describe('FizzBuzz', () => {
    it('Receive FizzBuzz and 3 and return Fizz', () => {
      const drink = refrescosPaco({
        firstName: 'Fizz',
        secondName: 'Buzz',
        n: 3,
      });
      expect(drink).toBe('Fizz');
    });

    it('Receive FizzBuzz and 5 and return Buzz', () => {
      const drink = refrescosPaco({
        firstName: 'Fizz',
        secondName: 'Buzz',
        n: 5,
      });
      expect(drink).toBe('Buzz');
    });

    it('Receive FizzBuzz and 15 and return FizzBuzz', () => {
      const drink = refrescosPaco({
        firstName: 'Fizz',
        secondName: 'Buzz',
        n: 15,
      });
      expect(drink).toBe('FizzBuzz');
    });
    it('Recieve 15.3 return BuFi', () => {
      const drink = refrescosPaco({
        firstName: 'Fizz',
        secondName: 'Buzz',
        n: 15.3,
      });
      expect(drink).toBe('BuFi');
    });
    it('Recieve 25.2 return Bu', () => {
      const drink = refrescosPaco({
        firstName: 'Fizz',
        secondName: 'Buzz',
        n: 25.2,
      });
      expect(drink).toBe('Bu');
    });
  });

  describe('CocaCola', () => {
    it('Receive 1 should return 1', () => {
      const drink = refrescosPaco({
        firstName: 'Coca',
        secondName: 'Cola',
        n: 1,
      });
      expect(drink).toBe(1);
    });

    it('Receive 2 should return 2', () => {
      const drink = refrescosPaco({
        firstName: 'Coca',
        secondName: 'Cola',
        n: 2,
      });
      expect(drink).toBe(2);
    });

    it('Receive 4 should return 4', () => {
      const drink = refrescosPaco({
        firstName: 'Coca',
        secondName: 'Cola',
        n: 4,
      });
      expect(drink).toBe(4);
    });

    it('Receive 3 return Coca', () => {
      const drink = refrescosPaco({
        firstName: 'Coca',
        secondName: 'Cola',
        n: 3,
      });
      expect(drink).toBe('Coca');
    });
    it('Receive 3 return Cola', () => {
      const drink = refrescosPaco({
        firstName: 'Coca',
        secondName: 'Cola',
        n: 5,
      });
      expect(drink).toBe('Cola');
    });
    it('Recieve 15 return CocaCola', () => {
      const drink = refrescosPaco({
        firstName: 'Coca',
        secondName: 'Cola',
        n: 15,
      });
      expect(drink).toBe('CocaCola');
    });
    it('Receive 15.3 return CoCo', () => {
      const drink = refrescosPaco({
        firstName: 'Coca',
        secondName: 'Cola',
        n: 15.3,
      });
      //debe ser CoCo ('Co'ca'Co'la) no LaCo ya que es FiBu ('Fi'zz'Bu'zz) no FiZz
      expect(drink).toBe('CoCo');
    });
  });
});

type FirstName = 'Fizz' | 'Coca' | 'Estrella';
type SecondName = 'Buzz' | 'Cola' | 'Galicia';
type PacoDrink = { firstName: FirstName; secondName: SecondName; n: number };

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
const halfWord = (s) => {
  let wordHalf = Math.ceil(s.length / 2);
  return s.substring(0, wordHalf);
}

let refrescosPaco = ({ firstName, secondName, n }: PacoDrink) => {

  if (n < 0 || n > 100) {
    return 'Error';
  }

  const isInteger = Number.isInteger(n);
  const input = Math.floor(n);
  const isDivisiblethree = input % 3 === 0;
  const isDivisibleFive = input % 5 === 0;
  const isDivThreeFive = isDivisiblethree && isDivisibleFive;
  let res = '';

  if (isDivisiblethree) {
    isInteger ? res += firstName : res += capitalize(halfWord(isDivThreeFive ? secondName : firstName));
  }

  if (isDivisibleFive) {
    isInteger ? res += secondName : res += capitalize(halfWord(isDivThreeFive ? firstName : secondName));
  }

  return res || n;
};