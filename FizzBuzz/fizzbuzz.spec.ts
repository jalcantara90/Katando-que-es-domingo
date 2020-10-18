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
 *   { firstName: 'Estrella', secondName: 'Galicia', n: 15.3 } deberá retornar: 'GalEstr'
 *   { firstName: 'Fizz', secondName: 'Buzz', n: 15.3 }  deberá retornar: 'BuFi'
 *   { firstName: 'Coca', secondName: 'Cola', n: 15.3 } deberá retornar: 'LaCo'
 */

type FizzBuzzResult = number | 'Fizz' | 'Fi' | 'Buzz' | 'FizzBuzz' | 'Error';
type FizzBuzzTestType = [input: number, expected: FizzBuzzResult][];

describe('RefrescosPaco Should', () => {
  describe('Old FizzBuzz Should', () => {
    it('Receive one and return one', () => {
      const result = fizzBuzz(1);
      expect(result).toBe(1);
    });

    it('Receive two and return two', () => {
      const result = fizzBuzz(2);
      expect(result).toBe(2);
    });

    it('Receive four and return four', () => {
      const result = fizzBuzz(4);
      expect(result).toBe(4);
    });

    it('Recieve three and return three', () => {
      const result = fizzBuzz(3);
      expect(result).toBe('Fizz');
    });

    it('Receive six and return Fizz', () => {
      const result = fizzBuzz(6);
      expect(result).toBe('Fizz');
    });

    it('Receive nine and return Fizz', () => {
      const result = fizzBuzz(9);
      expect(result).toBe('Fizz');
    });

    it('Receive five and return Buzz', () => {
      const result = fizzBuzz(5);
      expect(result).toBe('Buzz');
    });

    it('Receive ten and return Buzz', () => {
      const result = fizzBuzz(10);
      expect(result).toBe('Buzz');
    });

    it('Receive 25 and return Buzz', () => {
      const result = fizzBuzz(25);
      expect(result).toBe('Buzz');
    });
    it('Recieve 15 and return FizzBuzz', () => {
      const result = fizzBuzz(15);
      expect(result).toBe('FizzBuzz');
    });
    it('Recieve 30 and return FizzBuzz', () => {
      const result = fizzBuzz(30);
      expect(result).toBe('FizzBuzz');
    });
    it('Recieve 45 and return FizzBuzz', () => {
      const result = fizzBuzz(45);
      expect(result).toBe('FizzBuzz');
    });
    it('Recieve -1 and return Error', () => {
      const result = fizzBuzz(-1);
      expect(result).toBe('Error');
    });
    it('Receive > 100 and return Error', () => {
      const result = fizzBuzz(101);
      expect(result).toBe('Error');
    });
    it('Receive is 100.5 and return Error', () => {
      const result = fizzBuzz(100.5);
      expect(result).toBe('Error');
    });
    it('Receive 3.5 and return Fi', () => {
      const result = fizzBuzz(3.5);
      expect(result).toBe('Fi');
    });
    it('Recieve 6.9 and return Fi', () => {
      const result = fizzBuzz(6.9);
      expect(result).toBe('Fi');
    });
    it('Recieve 20.3 and return Bu', () => {
      const result = fizzBuzz(20.3);
      expect(result).toBe('Bu');
    });
    it('Recieve 15.3 and return FiBu', () => {
      const result = fizzBuzz(15.3);
      expect(result).toBe('BuFi');
    });
  });

  describe('EstrellaGalicia', () => {
    it('Receive 15.3 and return CiaEstr', () => {
      const drink = refrescosPaco({
        firstName: 'Estrella',
        secondName: 'Galicia',
        n: 15.3
      });
  
      expect(drink).toBe('GalEstr');
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
    it('Receive 15.3 return LaCo', () => {
      const drink = refrescosPaco({
        firstName: 'Coca',
        secondName: 'Cola',
        n: 15.3,
      });
      expect(drink).toBe('LaCo');
    });
  });
});

type FirstName = 'Fizz' | 'Coca' | 'Estrella';
type SecondName = 'Buzz' | 'Cola' | 'Galicia';
type PacoDrink = { firstName: FirstName; secondName: SecondName; n: number };

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1) // LaCo
}

let refrescosPaco = ({ firstName, secondName, n }: PacoDrink) => {
  const isInteger = Number.isInteger(n);
  const input = Math.floor(n);

  if (!isInteger && input % 3 === 0 && input % 5 === 0) {
    return capitalize(secondName.substring(2, secondName.length) + firstName.substring(0, 2))
  }

  if (n % 3 === 0 && n % 5 === 0) {
    return firstName + secondName;
  }

  if (n % 3 === 0) {
    return firstName;
  }

  if (n % 5 === 0) {
    return secondName;
  }

  return n;
};

let fizzBuzz = (n: number) => {
  if (n < 0 || n > 100) {
    return 'Error';
  }

  let res = '';
  const isInteger = Number.isInteger(n);
  const input = Math.floor(n);
  const isDivisiblethree = input % 3 === 0;
  const isDivisibleFive = input % 5 === 0;

  if (isDivisiblethree) {
    res = res + (!isInteger ? 'Fi' : 'Fizz');
  }

  if (isDivisibleFive) {
    res = res + (!isInteger ? 'Bu' : 'Buzz');
  }

  if (res === 'FiBu') {
    return 'BuFi';
  }

  return res || n;
};
