/**
 * Se necesita crear una clase que nos permita crear bolsas.
 *  - Habrán dos tipos de bolsas:
 *    · Mochila: Permitirá almacenar hasta 8 objetos.
 *    · Bolsa: Permitirá almacenar un máximo de 4 objetos y seleccionar una categoría de forma que solo pueda almacenar objetos de esa categoría.
 *  - Todas las bolsas deberán ordenar los objetos alfabéticamente.
 *  - Los diferentes tipos de bolsas deberán poder utilizarse de forma isomórfica.
 * 
 * Habrá que crear una clase que nos permita crear heroes que podrán llevar objetos.
 *  - Al ser creado un nuevo heroe deberá inicializar el inventario vacío.
 *  - Deberá tener un método que permita añadir nuevas bolsas.
 *  - Necesitará un método que permita añadir un objeto al inventario en la primera bolsa que tenga huecos disponible.
 *  - Se podrán añadir varios objetos a la vez.
 *  - Cada vez que se añada un nuevo objeto se reordenarán los objetos en todas las bolsas.
 *  - El heroe podrá llevar equipada una mochila y un máximo de 4 bolsas categorizadas.
 */

enum ItemCategory {
  clothes = 'Clothes',
  metals = 'Metals',
  weapons = 'Weapons',
  herbs = 'Herbs'
}

class Item {
  constructor(public name: string, public category: ItemCategory) {}
}
const leather = new Item('Leather', ItemCategory.clothes);
const linen = new Item('Linen', ItemCategory.clothes);
const wool = new Item('Wool', ItemCategory.clothes);
const cooper = new Item('Cooper', ItemCategory.metals);
const goold = new Item('Goold', ItemCategory.metals);
const iron = new Item('Iron', ItemCategory.metals);
const silver = new Item('Silver', ItemCategory.metals);
const axe = new Item('Axe', ItemCategory.weapons);
const dagger = new Item('Dagger', ItemCategory.weapons);
const sword = new Item('Sword', ItemCategory.weapons);
const mace = new Item('Mace', ItemCategory.weapons);
const cherryBlossom = new Item('Cherry Blossom', ItemCategory.herbs);
const marigold = new Item('Mariigold', ItemCategory.herbs);
const rose = new Item('Rose', ItemCategory.herbs);
const seaweed = new Item('Seaweed', ItemCategory.herbs);

describe('Inventory manager', () => {
  describe('When backpack', () => {
    it('should initialize as expected', () => {
      const backpack = new BackPack();

      expect(backpack.items).toHaveLength(0)
    });

    it('should add new item inside backpack', () => {
      const backpack = new BackPack()
      backpack.add(leather);
      expect(backpack.items).toHaveLength(1);
    });

    it('should not add more than 8 items', () => {
      const backpack = new BackPack();

      new Array(10)
      .fill(iron)
      .forEach((item) => backpack.add(item));

      expect(backpack.items).toHaveLength(8);
    });
  });

  describe('When hand bag', () =>{
    it('should initialize as expected', () => {
      const handBack = new HandBag(ItemCategory.metals);

      expect(handBack.items).toHaveLength(0)
    });

    it('should not add more than 4 items', () => {
      const handBack = new HandBag(ItemCategory.metals);
      new Array(5).fill(iron).forEach(item => handBack.add(item));

      expect(handBack.items).toHaveLength(4);
    })

    it('should order by every time we add some item on the bag', () => {
      const handBack = new HandBag(ItemCategory.metals);
      [silver, iron, cooper].forEach(item => handBack.add(item));
      const result = [cooper, iron, silver]; 

      expect(handBack.items).toMatchObject(result);
    });

    it('Should only add items of selected category', () => {
      const metalsHandbag = new HandBag(ItemCategory.metals);
      [leather, linen, wool, cooper].forEach(item => metalsHandbag.add(item));
      const result = [cooper];

      expect(metalsHandbag.items).toMatchObject(result);
    })
  })
})

class Bag { 
  private _items: Item[] = [];

  get items () {
    return this._items;
  }

  protected add(item: Item) {
    this.items.push(item);
    this.sortItems(this.items);
  };

  private sortItems(items: Item[]): Item[] {
    return items.sort((itemA: Item, itemB: Item): number => {
      if(itemA.name > itemB.name) {
        return 1;
      }

      if (itemA.name < itemB.name) {
        return -1;
      }

      return 0;
    });
  }
}

class HandBag extends Bag {
  itemCategory: string;
  
  constructor(itemCategory: string) {
    super();
    this.itemCategory = itemCategory;
  }

  add(item: Item) {
    if (item.category === this.itemCategory) {
      if (this.items.length < 4) {
        super.add(item);
      }
    }
  }
}

class BackPack extends Bag {

  constructor() {
    super();
  }
  
  add(item: Item){
    if( this.items.length < 8) {
      super.add(item);
    }
  }
}


// Inventory manager when backpack add 2 items should works