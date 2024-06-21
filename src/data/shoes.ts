interface Shoe {
  id: number;
  brand: string;
  model: string;
  price: number;
  currency: string;
  sizes: number[];
  colors: string[];
  stock: number;
  description: string;
  release_date: string;
  materials: string[];
  weight: string;
  category: string;
  average_rating: number;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export const shoesData:Shoe[] = [
  {
    id: 1,
    brand: 'Nike',
    model: 'Air Max 270',
    price: 150,
    currency: 'USD',
    sizes: [7, 8, 9, 10, 11],
    colors: ['Black', 'White', 'Red'],
    stock: 25,
    description:
      "The Nike Air Max 270 features Nike's biggest heel Air unit yet for a super-soft ride that feels as impossible as it looks.",
    release_date: '2020-02-01',
    materials: ['Mesh', 'Rubber', 'Synthetic'],
    weight: '320g',
    category: 'Running',
    average_rating: 4.5,
    image_url: 'https://example.com/images/nike_air_max_270.jpg',
    created_at: '2020-01-01T10:00:00Z',
    updated_at: '2023-06-01T12:00:00Z',
  },
  {
    id: 2,
    brand: 'Adidas',
    model: 'UltraBoost 21',
    price: 180,
    currency: 'USD',
    sizes: [6, 7, 8, 9, 10, 11, 12],
    colors: ['Black', 'White', 'Blue'],
    stock: 30,
    description:
      'The Adidas UltraBoost 21 is the latest in the UltraBoost line, offering unparalleled comfort and energy return with each step.',
    release_date: '2021-01-15',
    materials: ['Primeknit', 'Boost Foam', 'Rubber'],
    weight: '340g',
    category: 'Running',
    average_rating: 4.7,
    image_url: 'https://example.com/images/adidas_ultraboost_21.jpg',
    created_at: '2021-01-01T11:00:00Z',
    updated_at: '2023-06-01T12:00:00Z',
  },
  {
    id: 3,
    brand: 'Puma',
    model: 'RS-X³ Puzzle',
    price: 110,
    currency: 'USD',
    sizes: [7, 8, 9, 10, 11],
    colors: ['Black', 'Gray', 'Green'],
    stock: 20,
    description:
      'The Puma RS-X³ Puzzle takes the signature RS-X to another level with more extreme detailing and vibrant colors.',
    release_date: '2019-10-20',
    materials: ['Textile', 'Rubber', 'Leather'],
    weight: '290g',
    category: 'Lifestyle',
    average_rating: 4.2,
    image_url: 'https://example.com/images/puma_rsx_puzzle.jpg',
    created_at: '2019-10-01T09:00:00Z',
    updated_at: '2023-06-01T12:00:00Z',
  },
  {
    id: 4,
    brand: 'New Balance',
    model: '990v5',
    price: 175,
    currency: 'USD',
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ['Gray', 'Navy', 'Black'],
    stock: 15,
    description:
      'The New Balance 990v5 blends modern performance and classic style to create a timeless sneaker for all.',
    release_date: '2018-04-12',
    materials: ['Pigskin', 'Mesh', 'Rubber'],
    weight: '360g',
    category: 'Lifestyle',
    average_rating: 4.6,
    image_url: 'https://example.com/images/new_balance_990v5.jpg',
    created_at: '2018-04-01T08:00:00Z',
    updated_at: '2023-06-01T12:00:00Z',
  },
  {
    id: 5,
    brand: 'Asics',
    model: 'Gel-Kayano 27',
    price: 160,
    currency: 'USD',
    sizes: [6, 7, 8, 9, 10, 11],
    colors: ['Black', 'Blue', 'Red'],
    stock: 10,
    description:
      'The Asics Gel-Kayano 27 provides excellent cushioning and support for long-distance runs, offering stability and comfort with every stride.',
    release_date: '2020-06-01',
    materials: ['Mesh', 'Foam', 'Rubber'],
    weight: '315g',
    category: 'Running',
    average_rating: 4.8,
    image_url: 'https://example.com/images/asics_gel_kayano_27.jpg',
    created_at: '2020-05-01T07:00:00Z',
    updated_at: '2023-06-01T12:00:00Z',
  },
];
