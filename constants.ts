
import { Product, NewsArticle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'The Horizon Tent',
    category: 'Tents',
    price: 450,
    rentalPrice: 150,
    rating: 4.8,
    image: 'https://picsum.photos/seed/tent1/600/600',
    tags: ['Single Tent', 'Tent Fan', 'Sleeping Bag'],
    description: 'Ultra-lightweight tent designed for extreme weather conditions.'
  },
  {
    id: 'p2',
    name: 'The Solar Lantern Pro',
    category: 'Lighting',
    price: 85,
    rating: 4.5,
    image: 'https://picsum.photos/seed/lantern/600/600',
    tags: ['Solar', 'Waterproof', 'USB-C'],
    description: 'Long-lasting solar powered lantern with emergency beacon.'
  },
  {
    id: 'p3',
    name: 'Green Thermal Water Bottle',
    category: 'Accessories',
    price: 45,
    rating: 4.9,
    image: 'https://picsum.photos/seed/bottle/600/600',
    tags: ['Insulated', 'Steel', '1L'],
    description: 'Keeps drinks cold for 24h and hot for 12h.'
  },
  {
    id: 'p4',
    name: 'Couple Tent',
    category: 'Rental',
    price: 300,
    rentalPrice: 150,
    rating: 4.7,
    image: 'https://picsum.photos/seed/couple/600/600',
    tags: ['Single Tent', 'Tent Fan', 'Sleeping Bag', 'BBQ Stove', 'Headlamp'],
    description: 'Perfect for a romantic getaway under the stars.'
  },
  {
    id: 'p5',
    name: 'Small Group Tent',
    category: 'Rental',
    price: 400,
    rentalPrice: 120,
    rating: 4.6,
    image: 'https://picsum.photos/seed/group1/600/600',
    tags: ['4 Person', 'Spacious', 'Ventilated'],
    description: 'Ideal for small groups of friends or families.'
  },
  {
    id: 'p6',
    name: 'Large Expedition Tent',
    category: 'Rental',
    price: 800,
    rentalPrice: 180,
    rating: 5.0,
    image: 'https://picsum.photos/seed/party/600/600',
    tags: ['8 Person', 'Dividers', 'Awning'],
    description: 'Base camp quality tent for large expeditions.'
  },
  {
    id: 'p7',
    name: 'Summit Hiking Backpack',
    category: 'Accessories',
    price: 120,
    rating: 4.4,
    image: 'https://picsum.photos/seed/backpack/600/600',
    tags: ['40L', 'Waterproof', 'Ergonomic'],
    description: 'Spacious backpack with ergonomic support for long hikes.'
  },
  {
    id: 'p8',
    name: 'Portable Camping Stove',
    category: 'Cooking',
    price: 65,
    rating: 4.3,
    image: 'https://picsum.photos/seed/stove/600/600',
    tags: ['Propane', 'Compact', 'Windproof'],
    description: 'Foldable stove high heat output for quick meals.'
  },
  {
    id: 'p9',
    name: 'Ultra-Soft Sleeping Bag',
    category: 'Sleeping',
    price: 180,
    rating: 4.7,
    image: 'https://picsum.photos/seed/sleep/600/600',
    tags: ['Down', '-10C', 'Compact'],
    description: 'Premium down sleeping bag for freezing temperatures.'
  },
  {
    id: 'p10',
    name: 'LED Headlamp X200',
    category: 'Lighting',
    price: 35,
    rating: 4.2,
    image: 'https://picsum.photos/seed/headlamp/600/600',
    tags: ['Rechargeable', 'Bright', 'Lightweight'],
    description: 'Hands-free lighting with multiple brightness modes.'
  }
];

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Packages', href: '/packages' },
  { label: 'About', href: '/about' },
  { label: 'News', href: '/news' },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'n1',
    title: 'Top 10 Camping Spots for 2024',
    excerpt: 'Discover the hidden gems and breathtaking landscapes that are trending this season.',
    date: 'Oct 12, 2024',
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070&auto=format&fit=crop',
    category: 'Destinations'
  },
  {
    id: 'n2',
    title: 'Essential Gear for Winter Camping',
    excerpt: 'Don’t let the cold stop you. Here is the ultimate checklist for winter survival.',
    date: 'Nov 05, 2024',
    image: 'https://images.unsplash.com/photo-1457222639386-5f056396030f?q=80&w=2070&auto=format&fit=crop',
    category: 'Guides'
  },
  {
    id: 'n3',
    title: 'Sustainable Camping: Leave No Trace',
    excerpt: 'How to enjoy nature responsibly and ensure it stays beautiful for generations to come.',
    date: 'Dec 01, 2024',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070&auto=format&fit=crop',
    category: 'Eco-Friendly'
  }
];
