
/**
 * Se precisa crear un programa que dado un número
 * arábico devuelva su representación en número Romano.
 */


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
    [13, 'XIII'],
    [40, 'XL'],
    [50, 'L'],
    [55, 'LV'],
    [60, 'LX'],
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
  });
});
 
function romanNumerals(arabicNumber: number): string {
  let valueTranslated = '';
  const values =  {
    C: '100',
    L: '50',
    XL: '40',
    X: '10',
    IX: '9',
    V: '5',
    IV: '4',
    I: '1',
  }

  for(const i in values)  {
    while(arabicNumber >= values[i]) {
      valueTranslated =  valueTranslated + i;
      arabicNumber = arabicNumber - values[i]
    }
  }
  return valueTranslated;
}
