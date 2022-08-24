export interface Meal {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

export const meals = [
    {
      id: 1,
      name: 'Croissant',
      price: '₹ 300.25',
      description: 'One of our specials, this desert is wonderful for all occasions, flakey, soft, and crunchy all at once.',
      image: 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'Red Velvet Cake',
      price: '₹ 460.35',
      description: 'Buttermilk infused melt-in-the-mouth cakes layered with slightly sour cream cheese',
      image: 'https://images.pexels.com/photos/7438498/pexels-photo-7438498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      name: 'Chocolate muffins',
      price: '₹ 120.45',
      description: 'Warm and spongy, freshly baked. You will never eat just one.',
      image: 'https://images.pexels.com/photos/7190694/pexels-photo-7190694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },

    {
        id: 4,
        name: 'Eclair Choux Pastry',
        price: '₹ 370.25',
        description: 'Crunchy outer choux shell with rich chocolate ganache inside',
        image: 'https://images.pexels.com/photos/8774282/pexels-photo-8774282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

      }
  ];