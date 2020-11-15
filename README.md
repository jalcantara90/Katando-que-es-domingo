# Katando qué es domingo!

En este repositorio iremos subiendo los resultados y retos de las katas que iremos haciendo cada dos semanas.

##  **FizzBuzz** (Kata TDD) 18/10/20:
> Escribe un programa que devuelva los números del 0 al 100, 
sustituyendo los múltiplos de 3 por la palabra Fizz y, a su vez, los múltiplos de 5 por Buzz.
Para los números que a su vez son múltiplos de 3 y 5, utiliza el combinado FizzBuzz.

Para ejecutar el set de test de fizzbuzz lanzar:
> nnpm run test:fizzbuzz

### ImproKata:
> Si se recibe un número con decimales cuya parte entera es:
Divisible entre 3, en lugar de Fizz devuelve Fi.
Divisible entre 5, en lugar de Fizz devuelve Bu.

### ImproKata 2:
> Nuestra empresa (Refrescos Paco) tiene diferentes tipos de refrescos, que se componen de 2 palabras con diferentes modelos dentro de cada una las marcas y se requiere que en base a la marca introducida y un número la máquina de refrescos sea capaz de entregar el adecuado, para ello se deberá aplicar la siguiente lógica.
1. La máquina solo permite un número entre el 0 y el 100, 
2. Para los números divisibles entre 3 deberá devolver el refresco que corresponda con la primera palabra que forma el refresco ej: (FizzBuzz) Fizz, (CocaCola) Coca, (EstrellaGalicia) Estrella.
3. Si el número tiene decimales y su parte entera (truncada) es divisible entre 3, deberá entregar un refresco que contenga la mitad de la primera palabra del nombre del refresco ej: (FizzBuzz) Fi, (CocaCola) Co, (EstrellaGalicia) Estr.
4. Para los números divisibles entre 5 deberá devolver el refresco que corresponda con la primera palabra que forma el refresco ej: (FizzBuzz) Buzz, (CocaCola) Cola, (EstrellaGalicia) Galicia.
5. Si el número tiene decimales y su parte entera (truncada) es divisible entre 5, deberá entregar un refresco que contenga la mitad de la primera palabra del nombre del refresco ej: (FizzBuzz) Bu, (CocaCola) Co, (EstrellaGalicia) Gal.
6. Para los números divisibles entre 3 y 5 deberá devolver el refresco que corresponda con las dos palabras que forman el refresco ej: (FizzBuzz) FizzBuzz, (CocaCola) CocaCola, (EstrellaGalicia) EstrellaGalicia.
7. Si el número tiene decimales y su parte entera (truncada) es divisible entre 3 y 5, deberá entregar un refresco que contenga la mitad de la segunda palabra  junto con la mitad de la primera ej: (FizzBuzz) BuFi, (CocaCola) LaCo, (EstrellaGalicia) GalEstr.
 firstName ej:
 { firstName: 'Estrella', secondName: 'Galicia', n: 15.3 } deberá retornar: 'GalEstr'
 { firstName: 'Fizz', secondName: 'Buzz', n: 15.3 }  deberá retornar: 'BuFi'
 { firstName: 'Coca', secondName: 'Cola', n: 15.3 } deberá retornar: 'LaCo'

##  **RomanNumerals** (Kata TDD) 1/11/20:
> Se precisa crear un programa que dado un número arábico devuelva su representación en número Romano..

### Aplicar TPP (Transformation Priority Premise)
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

Para ejecutar el set de test de Roman numerals lanzar:
> npm run test:romannumbers

##  **InventoryManager** (Kata TDD | Estructuras de datos | Herencia) 15/11/20:
 > Se necesita crear clases que nos permitan crear bolsas.
* Habrán dos tipos de bolsas:
  - Mochila: Permitirá almacenar hasta 8 objetos.
  - Bolsa: Permitirá almacenar un máximo de 4 objetos y seleccionar una categoría de forma que solo pueda almacena objetos de esa categoría.
 * Todas las bolsas deberán ordenar los objetos alfabéticamente.
 * Los diferentes tipos de bolsas deberán poder utilizarse de forma isomórfica.

Para ejecutar el set de test de Inventory manager lanzar:
> npm run test:inventory
 
 ## **InventoryManager parte 2 (Kata TDD | Estructuras de datos | Herencia) 29/11/20:**
 
 > Habrá que crear una clase que nos permita crear heroes que podrán llevar objetos:
   - Al ser creado un nuevo heroe deberá inicializar el inventario vacío.
   - Deberá tener un método que permita añadir nuevas bolsas.
   - Necesitará un método que permita añadir un objeto al inventario en la primera bolsa que tenga huecos disponible.
   - Se podrán añadir varios objetos a la vez.
   - Cada vez que se añada un nuevo objeto se reordenarán los objetos en todas las bolsas.
   - El heroe podrá llevar equipada una mochila y un máximo de 4 bolsas.

Para ejecutar el set de test de Inventory manager lanzar:
> npm run test:inventory