// since there is no backend at the moment,
// data.ts servers as a mock data source.

import { Item } from './app/shared/Models/itms';

export const Item_Array: Item[] = [
    {
        id: 1,
        name: 'Laptop',
        price: 999.99,
        tags: ['electronics', 'computers'],
        rating: 4.8,
        description: 'Powerful laptop for all your computing needs.',
        imageUrl: 'assets/Images/laptop.jpg',
        favorite: true,
        origin: ['USA', 'Taiwan'],
    },
    {
        id: 2,
        name: 'Headphones',
        price: 149.95,
        tags: ['electronics', 'audio'],
        rating: 4.6,
        description: 'High-quality headphones with immersive sound.',
        imageUrl: 'assets/Images/headphones.jpg',
        favorite: false,
        origin: ['Japan', 'South Korea'],
    },
    {
        id: 3,
        name: 'Smartphone',
        price: 799.0,
        tags: ['electronics', 'mobile'],
        rating: 4.9,
        description: 'Cutting-edge smartphone with advanced features.',
        imageUrl: 'assets/Images/smartphone.jpg',
        favorite: true,
        origin: ['USA', 'China'],
    },
    {
        id: 4,
        name: 'Coffee Maker',
        price: 49.99,
        tags: ['home', 'kitchen'],
        rating: 4.3,
        description: 'Brew the perfect cup of coffee at home.',
        imageUrl: 'assets/Images/coffee-maker.jpg',
        favorite: false,
        origin: ['Italy', 'Switzerland'],
    },
    {
        id: 5,
        name: 'Running Shoes',
        price: 129.95,
        rating: 4.7,
        tags: ['shoes', 'Running'],
        description: 'Comfortable and durable shoes for running.',
        imageUrl: 'assets/Images/shoes.jpg',
        favorite: true,
        origin: ['Vietnam', 'China'],
    }
];
