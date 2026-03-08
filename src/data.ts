export interface Product {
  id: string;
  brand: 'Samsung' | 'Apple' | 'Tecno' | 'Oppo';
  name: string;
  price: number;
  image: string;
  specs: {
    ram: string;
    storage: string;
    camera: string;
    battery: string;
    display: string;
  };
  description: string;
}

export const products: Product[] = [
  // APPLE (20 Products)
  {
    id: 'apple-1',
    brand: 'Apple',
    name: 'iPhone 15 Pro Max',
    price: 495000,
    image: 'https://picsum.photos/seed/iphone15promax/400/400',
    specs: { ram: '8GB', storage: '256GB', camera: '48MP Triple', battery: '4441mAh', display: '6.7" OLED' },
    description: 'The ultimate iPhone with Titanium design and A17 Pro chip.'
  },
  {
    id: 'apple-2',
    brand: 'Apple',
    name: 'iPhone 15 Pro',
    price: 445000,
    image: 'https://picsum.photos/seed/iphone15pro/400/400',
    specs: { ram: '8GB', storage: '128GB', camera: '48MP Triple', battery: '3274mAh', display: '6.1" OLED' },
    description: 'Pro performance in a compact titanium build.'
  },
  {
    id: 'apple-3',
    brand: 'Apple',
    name: 'iPhone 15 Plus',
    price: 365000,
    image: 'https://picsum.photos/seed/iphone15plus/400/400',
    specs: { ram: '6GB', storage: '128GB', camera: '48MP Dual', battery: '4383mAh', display: '6.7" OLED' },
    description: 'Big screen, big battery, Dynamic Island.'
  },
  {
    id: 'apple-4',
    brand: 'Apple',
    name: 'iPhone 15',
    price: 325000,
    image: 'https://picsum.photos/seed/iphone15/400/400',
    specs: { ram: '6GB', storage: '128GB', camera: '48MP Dual', battery: '3349mAh', display: '6.1" OLED' },
    description: 'The new standard with Dynamic Island and 48MP camera.'
  },
  {
    id: 'apple-5',
    brand: 'Apple',
    name: 'iPhone 14 Pro Max',
    price: 410000,
    image: 'https://picsum.photos/seed/iphone14promax/400/400',
    specs: { ram: '6GB', storage: '256GB', camera: '48MP Triple', battery: '4323mAh', display: '6.7" OLED' },
    description: 'A magical new way to interact with iPhone.'
  },
  {
    id: 'apple-6',
    brand: 'Apple',
    name: 'iPhone 14 Pro',
    price: 380000,
    image: 'https://picsum.photos/seed/iphone14pro/400/400',
    specs: { ram: '6GB', storage: '128GB', camera: '48MP Triple', battery: '3200mAh', display: '6.1" OLED' },
    description: 'Pro camera system and Always-On display.'
  },
  {
    id: 'apple-7',
    brand: 'Apple',
    name: 'iPhone 14 Plus',
    price: 295000,
    image: 'https://picsum.photos/seed/iphone14plus/400/400',
    specs: { ram: '6GB', storage: '128GB', camera: '12MP Dual', battery: '4323mAh', display: '6.7" OLED' },
    description: 'Go big with the iPhone 14 Plus.'
  },
  {
    id: 'apple-8',
    brand: 'Apple',
    name: 'iPhone 14',
    price: 265000,
    image: 'https://picsum.photos/seed/iphone14/400/400',
    specs: { ram: '6GB', storage: '128GB', camera: '12MP Dual', battery: '3279mAh', display: '6.1" OLED' },
    description: 'Reliable performance and great cameras.'
  },
  {
    id: 'apple-9',
    brand: 'Apple',
    name: 'iPhone 13 Pro Max',
    price: 320000,
    image: 'https://picsum.photos/seed/iphone13promax/400/400',
    specs: { ram: '6GB', storage: '128GB', camera: '12MP Triple', battery: '4352mAh', display: '6.7" OLED' },
    description: 'ProMotion display and massive battery life.'
  },
  {
    id: 'apple-10',
    brand: 'Apple',
    name: 'iPhone 13 Pro',
    price: 290000,
    image: 'https://picsum.photos/seed/iphone13pro/400/400',
    specs: { ram: '6GB', storage: '128GB', camera: '12MP Triple', battery: '3095mAh', display: '6.1" OLED' },
    description: 'The Pro experience from the 13 series.'
  },
  {
    id: 'apple-11',
    brand: 'Apple',
    name: 'iPhone 13',
    price: 215000,
    image: 'https://picsum.photos/seed/iphone13/400/400',
    specs: { ram: '4GB', storage: '128GB', camera: '12MP Dual', battery: '3227mAh', display: '6.1" OLED' },
    description: 'Your new superpower.'
  },
  {
    id: 'apple-12',
    brand: 'Apple',
    name: 'iPhone 13 Mini',
    price: 185000,
    image: 'https://picsum.photos/seed/iphone13mini/400/400',
    specs: { ram: '4GB', storage: '128GB', camera: '12MP Dual', battery: '2406mAh', display: '5.4" OLED' },
    description: 'Small size, big performance.'
  },
  {
    id: 'apple-13',
    brand: 'Apple',
    name: 'iPhone 12 Pro Max',
    price: 240000,
    image: 'https://picsum.photos/seed/iphone12promax/400/400',
    specs: { ram: '6GB', storage: '128GB', camera: '12MP Triple', battery: '3687mAh', display: '6.7" OLED' },
    description: 'The first 5G iPhone in Max size.'
  },
  {
    id: 'apple-14',
    brand: 'Apple',
    name: 'iPhone 12',
    price: 165000,
    image: 'https://picsum.photos/seed/iphone12/400/400',
    specs: { ram: '4GB', storage: '64GB', camera: '12MP Dual', battery: '2815mAh', display: '6.1" OLED' },
    description: 'Blast past fast.'
  },
  {
    id: 'apple-15',
    brand: 'Apple',
    name: 'iPhone SE (2022)',
    price: 145000,
    image: 'https://picsum.photos/seed/iphonese2022/400/400',
    specs: { ram: '4GB', storage: '64GB', camera: '12MP Single', battery: '2018mAh', display: '4.7" LCD' },
    description: 'Love the power. Love the price.'
  },
  {
    id: 'apple-16',
    brand: 'Apple',
    name: 'iPhone 11 Pro Max',
    price: 180000,
    image: 'https://picsum.photos/seed/iphone11promax/400/400',
    specs: { ram: '4GB', storage: '64GB', camera: '12MP Triple', battery: '3969mAh', display: '6.5" OLED' },
    description: 'Classic Pro Max experience.'
  },
  {
    id: 'apple-17',
    brand: 'Apple',
    name: 'iPhone 11',
    price: 125000,
    image: 'https://picsum.photos/seed/iphone11/400/400',
    specs: { ram: '4GB', storage: '64GB', camera: '12MP Dual', battery: '3110mAh', display: '6.1" LCD' },
    description: 'Just the right amount of everything.'
  },
  {
    id: 'apple-18',
    brand: 'Apple',
    name: 'iPhone XR',
    price: 85000,
    image: 'https://picsum.photos/seed/iphonexr/400/400',
    specs: { ram: '3GB', storage: '64GB', camera: '12MP Single', battery: '2942mAh', display: '6.1" LCD' },
    description: 'Brilliant in every way.'
  },
  {
    id: 'apple-19',
    brand: 'Apple',
    name: 'iPhone XS Max',
    price: 110000,
    image: 'https://picsum.photos/seed/iphonexsmax/400/400',
    specs: { ram: '4GB', storage: '64GB', camera: '12MP Dual', battery: '3174mAh', display: '6.5" OLED' },
    description: 'Welcome to the big screens.'
  },
  {
    id: 'apple-20',
    brand: 'Apple',
    name: 'iPhone X',
    price: 75000,
    image: 'https://picsum.photos/seed/iphonex/400/400',
    specs: { ram: '3GB', storage: '64GB', camera: '12MP Dual', battery: '2716mAh', display: '5.8" OLED' },
    description: 'Say hello to the future.'
  },

  // SAMSUNG (20 Products)
  {
    id: 'samsung-1',
    brand: 'Samsung',
    name: 'Galaxy S24 Ultra',
    price: 425000,
    image: 'https://picsum.photos/seed/s24ultra/400/400',
    specs: { ram: '12GB', storage: '256GB', camera: '200MP Quad', battery: '5000mAh', display: '6.8" AMOLED' },
    description: 'The ultimate AI phone with S-Pen.'
  },
  {
    id: 'samsung-2',
    brand: 'Samsung',
    name: 'Galaxy S24+',
    price: 345000,
    image: 'https://picsum.photos/seed/s24plus/400/400',
    specs: { ram: '12GB', storage: '256GB', camera: '50MP Triple', battery: '4900mAh', display: '6.7" AMOLED' },
    description: 'Powerful performance with a stunning display.'
  },
  {
    id: 'samsung-3',
    brand: 'Samsung',
    name: 'Galaxy S24',
    price: 285000,
    image: 'https://picsum.photos/seed/s24/400/400',
    specs: { ram: '8GB', storage: '128GB', camera: '50MP Triple', battery: '4000mAh', display: '6.2" AMOLED' },
    description: 'Compact flagship with Galaxy AI.'
  },
  {
    id: 'samsung-4',
    brand: 'Samsung',
    name: 'Galaxy Z Fold 5',
    price: 520000,
    image: 'https://picsum.photos/seed/zfold5/400/400',
    specs: { ram: '12GB', storage: '256GB', camera: '50MP Triple', battery: '4400mAh', display: '7.6" Foldable' },
    description: 'Unfold your world with the ultimate multitasking tool.'
  },
  {
    id: 'samsung-5',
    brand: 'Samsung',
    name: 'Galaxy Z Flip 5',
    price: 285000,
    image: 'https://picsum.photos/seed/zflip5/400/400',
    specs: { ram: '8GB', storage: '256GB', camera: '12MP Dual', battery: '3700mAh', display: '6.7" Foldable' },
    description: 'Pocket-sized perfection with a larger cover screen.'
  },
  {
    id: 'samsung-6',
    brand: 'Samsung',
    name: 'Galaxy S23 Ultra',
    price: 340000,
    image: 'https://picsum.photos/seed/s23ultra/400/400',
    specs: { ram: '12GB', storage: '256GB', camera: '200MP Quad', battery: '5000mAh', display: '6.8" AMOLED' },
    description: 'Epic camera that captures every detail.'
  },
  {
    id: 'samsung-7',
    brand: 'Samsung',
    name: 'Galaxy A54 5G',
    price: 145000,
    image: 'https://picsum.photos/seed/a54/400/400',
    specs: { ram: '8GB', storage: '128GB', camera: '50MP Triple', battery: '5000mAh', display: '6.4" AMOLED' },
    description: 'Awesome 5G for everyone.'
  },
  {
    id: 'samsung-8',
    brand: 'Samsung',
    name: 'Galaxy A34 5G',
    price: 115000,
    image: 'https://picsum.photos/seed/a34/400/400',
    specs: { ram: '8GB', storage: '128GB', camera: '48MP Triple', battery: '5000mAh', display: '6.6" AMOLED' },
    description: 'Vivid screen and long-lasting battery.'
  },
  {
    id: 'samsung-9',
    brand: 'Samsung',
    name: 'Galaxy A24',
    price: 78000,
    image: 'https://picsum.photos/seed/a24/400/400',
    specs: { ram: '6GB', storage: '128GB', camera: '50MP Triple', battery: '5000mAh', display: '6.5" AMOLED' },
    description: 'Smooth scrolling and clear photos.'
  },
  {
    id: 'samsung-10',
    brand: 'Samsung',
    name: 'Galaxy A14',
    price: 45000,
    image: 'https://picsum.photos/seed/a14/400/400',
    specs: { ram: '4GB', storage: '64GB', camera: '50MP Triple', battery: '5000mAh', display: '6.6" LCD' },
    description: 'Essential features at an affordable price.'
  },
  {
    id: 'samsung-11',
    brand: 'Samsung',
    name: 'Galaxy A04',
    price: 32000,
    image: 'https://picsum.photos/seed/a04/400/400',
    specs: { ram: '3GB', storage: '32GB', camera: '50MP Dual', battery: '5000mAh', display: '6.5" LCD' },
    description: 'Simple and reliable.'
  },
  {
    id: 'samsung-12',
    brand: 'Samsung',
    name: 'Galaxy M54 5G',
    price: 155000,
    image: 'https://picsum.photos/seed/m54/400/400',
    specs: { ram: '8GB', storage: '256GB', camera: '108MP Triple', battery: '6000mAh', display: '6.7" AMOLED' },
    description: 'Monster battery and powerful camera.'
  },
  {
    id: 'samsung-13',
    brand: 'Samsung',
    name: 'Galaxy M34 5G',
    price: 95000,
    image: 'https://picsum.photos/seed/m34/400/400',
    specs: { ram: '6GB', storage: '128GB', camera: '50MP Triple', battery: '6000mAh', display: '6.5" AMOLED' },
    description: 'The battery king.'
  },
  {
    id: 'samsung-14',
    brand: 'Samsung',
    name: 'Galaxy S21 FE',
    price: 165000,
    image: 'https://picsum.photos/seed/s21fe/400/400',
    specs: { ram: '8GB', storage: '128GB', camera: '12MP Triple', battery: '4500mAh', display: '6.4" AMOLED' },
    description: 'Fan edition with flagship features.'
  },
  {
    id: 'samsung-15',
    brand: 'Samsung',
    name: 'Galaxy A73 5G',
    price: 185000,
    image: 'https://picsum.photos/seed/a73/400/400',
    specs: { ram: '8GB', storage: '256GB', camera: '108MP Quad', battery: '5000mAh', display: '6.7" AMOLED' },
    description: 'Premium mid-range experience.'
  },
  {
    id: 'samsung-16',
    brand: 'Samsung',
    name: 'Galaxy A53 5G',
    price: 125000,
    image: 'https://picsum.photos/seed/a53/400/400',
    specs: { ram: '8GB', storage: '128GB', camera: '64MP Quad', battery: '5000mAh', display: '6.5" AMOLED' },
    description: 'Reliable 5G performance.'
  },
  {
    id: 'samsung-17',
    brand: 'Samsung',
    name: 'Galaxy A33 5G',
    price: 98000,
    image: 'https://picsum.photos/seed/a33/400/400',
    specs: { ram: '6GB', storage: '128GB', camera: '48MP Quad', battery: '5000mAh', display: '6.4" AMOLED' },
    description: 'Water resistant and powerful.'
  },
  {
    id: 'samsung-18',
    brand: 'Samsung',
    name: 'Galaxy A13',
    price: 42000,
    image: 'https://picsum.photos/seed/a13/400/400',
    specs: { ram: '4GB', storage: '64GB', camera: '50MP Quad', battery: '5000mAh', display: '6.6" LCD' },
    description: 'Great value for money.'
  },
  {
    id: 'samsung-19',
    brand: 'Samsung',
    name: 'Galaxy A03 Core',
    price: 24000,
    image: 'https://picsum.photos/seed/a03core/400/400',
    specs: { ram: '2GB', storage: '32GB', camera: '8MP Single', battery: '5000mAh', display: '6.5" LCD' },
    description: 'Entry-level essential.'
  },
  {
    id: 'samsung-20',
    brand: 'Samsung',
    name: 'Galaxy Note 20 Ultra',
    price: 195000,
    image: 'https://picsum.photos/seed/note20ultra/400/400',
    specs: { ram: '12GB', storage: '256GB', camera: '108MP Triple', battery: '4500mAh', display: '6.9" AMOLED' },
    description: 'The last great Note.'
  },
  {
    id: 'samsung-21',
    brand: 'Samsung',
    name: 'Galaxy Watch 6 Classic',
    price: 89000,
    image: 'https://picsum.photos/seed/watch6classic/400/400',
    specs: { ram: '2GB', storage: '16GB', camera: 'N/A', battery: '425mAh', display: '1.5" AMOLED' },
    description: 'The timeless classic with a rotating bezel.'
  },

  // TECNO (20 Products)
  {
    id: 'tecno-1',
    brand: 'Tecno',
    name: 'Phantom V Fold',
    price: 245000,
    image: 'https://picsum.photos/seed/phantomvfold/400/400',
    specs: { ram: '12GB', storage: '256GB', camera: '50MP Triple', battery: '5000mAh', display: '7.85" Foldable' },
    description: 'Tecnos first foldable flagship.'
  },
  {
    id: 'tecno-2',
    brand: 'Tecno',
    name: 'Phantom X2 Pro',
    price: 185000,
    image: 'https://picsum.photos/seed/phantomx2pro/400/400',
    specs: { ram: '12GB', storage: '256GB', camera: '50MP Triple', battery: '5160mAh', display: '6.8" AMOLED' },
    description: 'Worlds first retractable portrait lens.'
  },
  {
    id: 'tecno-3',
    brand: 'Tecno',
    name: 'Camon 20 Premier',
    price: 125000,
    image: 'https://picsum.photos/seed/camon20premier/400/400',
    specs: { ram: '8GB', storage: '512GB', camera: '50MP Triple', battery: '5000mAh', display: '6.67" AMOLED' },
    description: 'Master of night photography.'
  },
  {
    id: 'tecno-4',
    brand: 'Tecno',
    name: 'Camon 20 Pro 5G',
    price: 85000,
    image: 'https://picsum.photos/seed/camon20pro5g/400/400',
    specs: { ram: '8GB', storage: '256GB', camera: '64MP Triple', battery: '5000mAh', display: '6.67" AMOLED' },
    description: 'Fast 5G and great cameras.'
  },
  {
    id: 'tecno-5',
    brand: 'Tecno',
    name: 'Spark 20 Pro+',
    price: 55000,
    image: 'https://picsum.photos/seed/spark20proplus/400/400',
    specs: { ram: '8GB', storage: '256GB', camera: '108MP Dual', battery: '5000mAh', display: '6.78" AMOLED' },
    description: 'Premium design in the Spark series.'
  },
  {
    id: 'tecno-6',
    brand: 'Tecno',
    name: 'Spark 20',
    price: 36000,
    image: 'https://picsum.photos/seed/spark20/400/400',
    specs: { ram: '8GB', storage: '128GB', camera: '50MP Dual', battery: '5000mAh', display: '6.6" LCD' },
    description: 'Balanced performance for everyday use.'
  },
  {
    id: 'tecno-7',
    brand: 'Tecno',
    name: 'Pova 5 Pro 5G',
    price: 65000,
    image: 'https://picsum.photos/seed/pova5pro/400/400',
    specs: { ram: '8GB', storage: '256GB', camera: '50MP Dual', battery: '5000mAh', display: '6.78" LCD' },
    description: 'Gaming focused with LED lights.'
  },
  {
    id: 'tecno-8',
    brand: 'Tecno',
    name: 'Pova 5',
    price: 48000,
    image: 'https://picsum.photos/seed/pova5/400/400',
    specs: { ram: '8GB', storage: '128GB', camera: '50MP Dual', battery: '6000mAh', display: '6.78" LCD' },
    description: 'Massive battery for gamers.'
  },
  {
    id: 'tecno-9',
    brand: 'Tecno',
    name: 'Pop 8',
    price: 24000,
    image: 'https://picsum.photos/seed/pop8/400/400',
    specs: { ram: '4GB', storage: '64GB', camera: '13MP Dual', battery: '5000mAh', display: '6.6" LCD' },
    description: 'Budget friendly entry.'
  },
  {
    id: 'tecno-10',
    brand: 'Tecno',
    name: 'Pop 7 Pro',
    price: 21000,
    image: 'https://picsum.photos/seed/pop7pro/400/400',
    specs: { ram: '3GB', storage: '64GB', camera: '13MP Dual', battery: '5000mAh', display: '6.6" LCD' },
    description: 'Essential Pop series.'
  },
  {
    id: 'tecno-11',
    brand: 'Tecno',
    name: 'Camon 19 Neo',
    price: 42000,
    image: 'https://picsum.photos/seed/camon19neo/400/400',
    specs: { ram: '6GB', storage: '128GB', camera: '48MP Triple', battery: '5000mAh', display: '6.8" LCD' },
    description: 'Stylish design and good selfies.'
  },
  {
    id: 'tecno-12',
    brand: 'Tecno',
    name: 'Spark 10 Pro',
    price: 45000,
    image: 'https://picsum.photos/seed/spark10pro/400/400',
    specs: { ram: '8GB', storage: '128GB', camera: '50MP Triple', battery: '5000mAh', display: '6.8" LCD' },
    description: 'Glow in the dark design.'
  },
  {
    id: 'tecno-13',
    brand: 'Tecno',
    name: 'Spark 10',
    price: 34000,
    image: 'https://picsum.photos/seed/spark10/400/400',
    specs: { ram: '4GB', storage: '128GB', camera: '50MP Dual', battery: '5000mAh', display: '6.6" LCD' },
    description: 'Reliable Spark performance.'
  },
  {
    id: 'tecno-14',
    brand: 'Tecno',
    name: 'Pova Neo 3',
    price: 38000,
    image: 'https://picsum.photos/seed/povaneo3/400/400',
    specs: { ram: '4GB', storage: '128GB', camera: '16MP Dual', battery: '7000mAh', display: '6.82" LCD' },
    description: 'Unbeatable 7000mAh battery.'
  },
  {
    id: 'tecno-15',
    brand: 'Tecno',
    name: 'Phantom X',
    price: 95000,
    image: 'https://picsum.photos/seed/phantomx/400/400',
    specs: { ram: '8GB', storage: '256GB', camera: '50MP Triple', battery: '4700mAh', display: '6.7" AMOLED' },
    description: 'Tecnos first premium flagship.'
  },
  {
    id: 'tecno-16',
    brand: 'Tecno',
    name: 'Camon 18 Premier',
    price: 55000,
    image: 'https://picsum.photos/seed/camon18premier/400/400',
    specs: { ram: '8GB', storage: '256GB', camera: '64MP Triple', battery: '4750mAh', display: '6.7" AMOLED' },
    description: 'Gimbal camera technology.'
  },
  {
    id: 'tecno-17',
    brand: 'Tecno',
    name: 'Spark Go 2024',
    price: 26000,
    image: 'https://picsum.photos/seed/sparkgo2024/400/400',
    specs: { ram: '4GB', storage: '64GB', camera: '13MP Dual', battery: '5000mAh', display: '6.6" LCD' },
    description: 'Smart choice for budget users.'
  },
  {
    id: 'tecno-18',
    brand: 'Tecno',
    name: 'Pop 5 LTE',
    price: 18000,
    image: 'https://picsum.photos/seed/pop5lte/400/400',
    specs: { ram: '2GB', storage: '32GB', camera: '8MP Dual', battery: '5000mAh', display: '6.5" LCD' },
    description: 'Basic 4G connectivity.'
  },
  {
    id: 'tecno-19',
    brand: 'Tecno',
    name: 'Spark 8C',
    price: 29000,
    image: 'https://picsum.photos/seed/spark8c/400/400',
    specs: { ram: '4GB', storage: '128GB', camera: '13MP Dual', battery: '5000mAh', display: '6.6" LCD' },
    description: 'Smooth 90Hz display on a budget.'
  },
  {
    id: 'tecno-20',
    brand: 'Tecno',
    name: 'Camon 17 Pro',
    price: 38000,
    image: 'https://picsum.photos/seed/camon17pro/400/400',
    specs: { ram: '8GB', storage: '256GB', camera: '64MP Quad', battery: '5000mAh', display: '6.8" LCD' },
    description: 'High performance Camon.'
  },

  // OPPO (20 Products)
  {
    id: 'oppo-1',
    brand: 'Oppo',
    name: 'Find X6 Pro',
    price: 295000,
    image: 'https://picsum.photos/seed/findx6pro/400/400',
    specs: { ram: '12GB', storage: '256GB', camera: '50MP Triple', battery: '5000mAh', display: '6.82" AMOLED' },
    description: 'The ultimate camera flagship from Oppo.'
  },
  {
    id: 'oppo-2',
    brand: 'Oppo',
    name: 'Reno 11 Pro',
    price: 165000,
    image: 'https://picsum.photos/seed/reno11pro/400/400',
    specs: { ram: '12GB', storage: '256GB', camera: '50MP Triple', battery: '4600mAh', display: '6.7" AMOLED' },
    description: 'Portrait expert with stunning design.'
  },
  {
    id: 'oppo-3',
    brand: 'Oppo',
    name: 'Reno 11',
    price: 125000,
    image: 'https://picsum.photos/seed/reno11/400/400',
    specs: { ram: '8GB', storage: '256GB', camera: '50MP Triple', battery: '5000mAh', display: '6.7" AMOLED' },
    description: 'Balanced performance and great cameras.'
  },
  {
    id: 'oppo-4',
    brand: 'Oppo',
    name: 'Reno 11 F',
    price: 95000,
    image: 'https://picsum.photos/seed/reno11f/400/400',
    specs: { ram: '8GB', storage: '256GB', camera: '64MP Triple', battery: '5000mAh', display: '6.7" AMOLED' },
    description: 'Slim and powerful.'
  },
  {
    id: 'oppo-5',
    brand: 'Oppo',
    name: 'A98 5G',
    price: 88000,
    image: 'https://picsum.photos/seed/oppoa98/400/400',
    specs: { ram: '8GB', storage: '256GB', camera: '64MP Triple', battery: '5000mAh', display: '6.72" LCD' },
    description: 'Fast charging and smooth performance.'
  },
  {
    id: 'oppo-6',
    brand: 'Oppo',
    name: 'A78',
    price: 68000,
    image: 'https://picsum.photos/seed/oppoa78/400/400',
    specs: { ram: '8GB', storage: '256GB', camera: '50MP Dual', battery: '5000mAh', display: '6.43" AMOLED' },
    description: 'Premium feel in the A series.'
  },
  {
    id: 'oppo-7',
    brand: 'Oppo',
    name: 'A58',
    price: 52000,
    image: 'https://picsum.photos/seed/oppoa58/400/400',
    specs: { ram: '8GB', storage: '128GB', camera: '50MP Dual', battery: '5000mAh', display: '6.72" LCD' },
    description: 'Reliable everyday companion.'
  },
  {
    id: 'oppo-8',
    brand: 'Oppo',
    name: 'A38',
    price: 38000,
    image: 'https://picsum.photos/seed/oppoa38/400/400',
    specs: { ram: '4GB', storage: '128GB', camera: '50MP Dual', battery: '5000mAh', display: '6.56" LCD' },
    description: 'Affordable and capable.'
  },
  {
    id: 'oppo-9',
    brand: 'Oppo',
    name: 'A18',
    price: 32000,
    image: 'https://picsum.photos/seed/oppoa18/400/400',
    specs: { ram: '4GB', storage: '128GB', camera: '8MP Dual', battery: '5000mAh', display: '6.56" LCD' },
    description: 'Essential Oppo experience.'
  },
  {
    id: 'oppo-10',
    brand: 'Oppo',
    name: 'Find N3 Flip',
    price: 265000,
    image: 'https://picsum.photos/seed/findn3flip/400/400',
    specs: { ram: '12GB', storage: '256GB', camera: '50MP Triple', battery: '4300mAh', display: '6.8" Foldable' },
    description: 'The best flip camera system.'
  },
  {
    id: 'oppo-11',
    brand: 'Oppo',
    name: 'Reno 10 Pro+',
    price: 195000,
    image: 'https://picsum.photos/seed/reno10proplus/400/400',
    specs: { ram: '12GB', storage: '256GB', camera: '50MP Triple', battery: '4700mAh', display: '6.74" AMOLED' },
    description: 'Periscope telephoto lens flagship.'
  },
  {
    id: 'oppo-12',
    brand: 'Oppo',
    name: 'Reno 8 Pro',
    price: 145000,
    image: 'https://picsum.photos/seed/reno8pro/400/400',
    specs: { ram: '12GB', storage: '256GB', camera: '50MP Triple', battery: '4500mAh', display: '6.7" AMOLED' },
    description: 'MariSilicon X powered imaging.'
  },
  {
    id: 'oppo-13',
    brand: 'Oppo',
    name: 'A77s',
    price: 75000,
    image: 'https://picsum.photos/seed/oppoa77s/400/400',
    specs: { ram: '8GB', storage: '128GB', camera: '50MP Dual', battery: '5000mAh', display: '6.56" LCD' },
    description: 'Fiberglass-leather design.'
  },
  {
    id: 'oppo-14',
    brand: 'Oppo',
    name: 'A57',
    price: 45000,
    image: 'https://picsum.photos/seed/oppoa57/400/400',
    specs: { ram: '4GB', storage: '64GB', camera: '13MP Dual', battery: '5000mAh', display: '6.56" LCD' },
    description: 'Classic A series reliability.'
  },
  {
    id: 'oppo-15',
    brand: 'Oppo',
    name: 'A17',
    price: 36000,
    image: 'https://picsum.photos/seed/oppoa17/400/400',
    specs: { ram: '4GB', storage: '64GB', camera: '50MP Dual', battery: '5000mAh', display: '6.56" LCD' },
    description: 'Leather-feel design.'
  },
  {
    id: 'oppo-16',
    brand: 'Oppo',
    name: 'Find X5 Pro',
    price: 185000,
    image: 'https://picsum.photos/seed/findx5pro/400/400',
    specs: { ram: '12GB', storage: '256GB', camera: '50MP Triple', battery: '5000mAh', display: '6.7" AMOLED' },
    description: 'Ceramic design flagship.'
  },
  {
    id: 'oppo-17',
    brand: 'Oppo',
    name: 'Reno 7',
    price: 85000,
    image: 'https://picsum.photos/seed/reno7/400/400',
    specs: { ram: '8GB', storage: '128GB', camera: '64MP Triple', battery: '4500mAh', display: '6.43" AMOLED' },
    description: 'Retro ultra-slim design.'
  },
  {
    id: 'oppo-18',
    brand: 'Oppo',
    name: 'A96',
    price: 65000,
    image: 'https://picsum.photos/seed/oppoa96/400/400',
    specs: { ram: '8GB', storage: '128GB', camera: '50MP Dual', battery: '5000mAh', display: '6.59" LCD' },
    description: 'Enduring quality.'
  },
  {
    id: 'oppo-19',
    brand: 'Oppo',
    name: 'A16',
    price: 28000,
    image: 'https://picsum.photos/seed/oppoa16/400/400',
    specs: { ram: '3GB', storage: '32GB', camera: '13MP Triple', battery: '5000mAh', display: '6.52" LCD' },
    description: 'Long-lasting battery.'
  },
  {
    id: 'oppo-20',
    brand: 'Oppo',
    name: 'Find N2 Flip',
    price: 195000,
    image: 'https://picsum.photos/seed/findn2flip/400/400',
    specs: { ram: '8GB', storage: '256GB', camera: '50MP Dual', battery: '4300mAh', display: '6.8" Foldable' },
    description: 'Oppos first global flip phone.'
  }
];
