
/**
 * Se precisa crear un programa que dado un número
 * arábico devuelva su representación en número Romano.
 * 
 * TPP
 * ({}–>null) no code at all->code that employs null
* (null->constant)
* (constant->constant+) a simple constant to a more complex constant
* (constant->scalar) replacing a constant with a variable or an argument
* (statement->statements) adding more unconditional statements.
* (unconditional->if) splitting the execution path
* (scalar->array)
* (array->container)
* (statement->recursion)
* (if->while)
* (expression->function) replacing an expression with a function or algorithm
* (variable->assignment) replacing the value of a variable.

 */

type RomanNumeralsTestType = [input: number, expected: string];

describe('RomanNumerals Should', () => {

  it('Recive un 1 y devuelve un numero I', () => { 
    const result = romanNumerals(1);
    expect(result).toBe('I');
  });

  it('Recibe un 2 y devuelve un numero II', () => {
    const result = romanNumerals(2);
    expect(result).toBe('II');
  });
  
  it('Recibe un 3 y devuelve un numero III',() => {
    const result = romanNumerals(3);
    expect(result).toBe('III');
  });

  it('Recibe un 5 y devuelve un numero V', () =>{
    const result = romanNumerals(5);
    expect(result).toBe('V');
  });

  [
    [6, 'VI'],
    [7, 'VII'],
    [8, 'VIII']
  ].forEach(([input,expected]: [number, string]) => {
    it (`Recibe un ${input} y devuelve un numero ${expected}`, () => {
      const result = romanNumerals(input);
      expect(result).toBe(expected);
    })
  });

  it('Recibe un 10 y devuelve un numero X', () => {
    const result = romanNumerals(10);
    expect(result).toBe('X');
  });
  [
    [11, 'XI'],
    [12, 'XII'],
    [13, 'XIII']
  ].forEach(([input,expected]: [number, string]) => {
    it (`Recibe un ${input} y devuelve un numero ${expected}`, () => {
      const result = romanNumerals(input);
      expect(result).toBe(expected);
    })
  });

  it("Recibe un 20 y devuelve un numero XX", () =>{
    const result = romanNumerals(20);
    expect(result).toBe('XX');
  });

  it("Recibe un 30 y devuelve un numero XXX", () =>{
    const result = romanNumerals(30);
    expect(result).toBe('XXX');
  });

  it("Recibe un 4 y devuelve un numero IV", () => {
    const result = romanNumerals(4);
    expect(result).toBe('IV');
  })
});

function romanNumerals(numValue: number): string {

  let numToRoman: string = '';
  const romanNum = {
    "5": 'V',
    "10": 'X',
    "1": 'I'
  }

  if (numValue.toString().length >= 2) {
    let loop = numValue
    for (let index = 10;  index <= loop ; index += 10) {
      numToRoman += romanNum[10];
      numValue = numValue -10;
    }
  }
  
  if ((numValue + 1) % 5 === 0) {
      numToRoman += romanNum[1];
  }

  if (numValue >= 4 && numValue < 10) { 
    numToRoman += romanNum[5];
    numValue = numValue - 5;
  } // V

  for (let index = 1; index <= numValue ; index += 1) {
    numToRoman += romanNum[1];
  } // I

  
 return numToRoman;
}


 