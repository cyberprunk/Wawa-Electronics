// WaWa Electronics – All product data keyed by category slug
const WAWA_DATA = {

  phones: {
    title: 'Phones',
    subtitle: 'The latest smartphones from the world\'s leading brands',
    heroImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80',
    emoji: '📱',
    brands: ['All', 'Apple', 'Samsung', 'Techno'],
    products: [
      {
        id: 'iphone-16-pro-max',
        name: 'iPhone 16 Pro Max',
        brand: 'Apple',
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=80',
        emoji: '📱', gradient: 'linear-gradient(135deg,#1c1c1e,#2c2c2e)',
        description: 'The most powerful iPhone ever built. Titanium design, the A18 Pro chip, and an impressive leap in battery life.',
        features: ['A18 Pro Chip', '6.9" Super Retina XDR', 'Pro Camera: 48MP + 5× Telephoto', 'All-day battery life', 'Titanium build', 'USB 3 high-speed'],
        specs: { 'Display': '6.9" OLED Super Retina XDR', 'Chip': 'Apple A18 Pro', 'Storage Options': '256GB / 512GB / 1TB', 'Main Camera': '48MP Fusion + 48MP UW + 12MP 5× Zoom', 'Battery': 'Up to 33hrs video playback', 'OS': 'iOS 18', 'Build': 'Titanium + Ceramic Shield' }
      },
      {
        id: 'iphone-15',
        name: 'iPhone 15',
        brand: 'Apple',
        badge: null,
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
        emoji: '📱', gradient: 'linear-gradient(135deg,#1c1c1e,#2c2c2e)',
        description: 'Dynamic Island comes to iPhone 15. Beautiful aluminium design with a durable Ceramic Shield front.',
        features: ['A16 Bionic Chip', '6.1" Super Retina XDR', '48MP Main Camera', 'Dynamic Island', 'USB-C connector', 'All-day battery'],
        specs: { 'Display': '6.1" OLED Super Retina XDR', 'Chip': 'Apple A16 Bionic', 'Storage Options': '128GB / 256GB / 512GB', 'Main Camera': '48MP Main + 12MP Ultra Wide', 'Battery': 'Up to 26hrs video playback', 'OS': 'iOS 18', 'Build': 'Aluminium + Ceramic Shield' }
      },
      {
        id: 'samsung-s24-ultra',
        name: 'Galaxy S24 Ultra',
        brand: 'Samsung',
        badge: 'Hot',
        image: 'https://images.unsplash.com/photo-1610945415814-7cd2e37861b7?auto=format&fit=crop&w=600&q=80',
        emoji: '📱', gradient: 'linear-gradient(135deg,#1a1a2e,#16213e)',
        description: 'The ultimate Galaxy experience. Built-in S Pen, 200MP camera, and titanium frame for professionals.',
        features: ['Snapdragon 8 Gen 3', '6.8" Dynamic AMOLED 2X', '200MP Quad Camera', 'Built-in S Pen', '5000mAh Battery', 'AI-powered features'],
        specs: { 'Display': '6.8" Dynamic AMOLED 2X, 120Hz', 'Processor': 'Snapdragon 8 Gen 3', 'Storage': '256GB / 512GB / 1TB', 'Camera': '200MP Main + 12MP UW + 2× 10MP Telephoto', 'Battery': '5000mAh, 45W Fast Charge', 'OS': 'Android 14, One UI 6.1', 'Build': 'Titanium Frame' }
      },
      {
        id: 'samsung-a55',
        name: 'Galaxy A55',
        brand: 'Samsung',
        badge: null,
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
        emoji: '📱', gradient: 'linear-gradient(135deg,#1a1a2e,#16213e)',
        description: 'Premium mid-range with flagship features — optical image stabilisation and an IP67 rating.',
        features: ['Exynos 1480 Chip', '6.6" Super AMOLED 120Hz', '50MP OIS Camera', 'IP67 Water Resistant', '5000mAh Battery', 'Samsung Knox Security'],
        specs: { 'Display': '6.6" Super AMOLED, 120Hz', 'Processor': 'Exynos 1480', 'Storage': '128GB / 256GB + expandable', 'Camera': '50MP Main + 12MP UW + 5MP Macro', 'Battery': '5000mAh, 25W Fast Charge', 'OS': 'Android 14, One UI 6.1', 'Rating': 'IP67' }
      },
      {
        id: 'techno-camon-30-pro',
        name: 'Camon 30 Pro',
        brand: 'Techno',
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=600&q=80',
        emoji: '📱', gradient: 'linear-gradient(135deg,#001a10,#002a18)',
        description: 'Pro-grade portrait camera powered by AI. Capture stunning low-light and studio-quality portraits.',
        features: ['Helio G99 Ultimate', '6.78" AMOLED 120Hz', '50MP AI Portrait Camera', '5000mAh Battery', '45W Flash Charge', 'AI Erase & Enhance'],
        specs: { 'Display': '6.78" AMOLED, 120Hz', 'Processor': 'MediaTek Helio G99 Ultimate', 'Storage': '256GB + expandable', 'Camera': '50MP Main + 50MP Portrait + 2MP Depth', 'Battery': '5000mAh, 45W Fast Charge', 'OS': 'Android 14, HiOS 14' }
      },
      {
        id: 'techno-spark-20-pro',
        name: 'Spark 20 Pro+',
        brand: 'Techno',
        badge: null,
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80',
        emoji: '📱', gradient: 'linear-gradient(135deg,#001a10,#002a18)',
        description: 'Slim and stylish with a massive battery and big display — perfect everyday smartphone.',
        features: ['Helio G88 Chip', '6.78" AMOLED 120Hz', '108MP Camera', '5000mAh Battery', '18W Charge', 'NFC Support'],
        specs: { 'Display': '6.78" AMOLED, 120Hz', 'Processor': 'MediaTek Helio G88', 'Storage': '128GB + expandable', 'Camera': '108MP Main + 2MP AI Lens', 'Battery': '5000mAh, 18W Charge', 'OS': 'Android 13, HiOS 13' }
      }
    ]
  },

  laptops: {
    title: 'Laptops',
    subtitle: 'Powerful laptops for work, creativity, and gaming',
    heroImage: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=80',
    emoji: '💻',
    brands: ['All', 'Samsung', 'Apple', 'HP', 'Dell'],
    products: [
      {
        id: 'samsung-book4-pro',
        name: 'Galaxy Book4 Pro',
        brand: 'Samsung',
        badge: 'Hot',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80',
        emoji: '💻', gradient: 'linear-gradient(135deg,#0a0a1a,#151530)',
        description: 'Ultra-slim powerhouse with a vibrant AMOLED display and Intel Core Ultra performance.',
        features: ['Intel Core Ultra 7', '16" Dynamic AMOLED 2X', 'Wi-Fi 6E + Bluetooth 5.3', '16GB / 32GB RAM', 'All-day 76Wh battery', 'Galaxy AI features'],
        specs: { 'Display': '16" Dynamic AMOLED 2X, 3K, 120Hz', 'Processor': 'Intel Core Ultra 7 155H', 'RAM': '16GB / 32GB LPDDR5X', 'Storage': '512GB / 1TB NVMe SSD', 'Graphics': 'Intel Arc + Intel Xe', 'Battery': '76Wh, up to 22hrs', 'Weight': '1.55kg', 'OS': 'Windows 11 Home' }
      },
      {
        id: 'samsung-book4-360',
        name: 'Galaxy Book4 360',
        brand: 'Samsung',
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
        emoji: '💻', gradient: 'linear-gradient(135deg,#0a0a1a,#151530)',
        description: '2-in-1 convertible laptop — use as a laptop, tent, or tablet with S Pen support.',
        features: ['Intel Core Ultra 5', '13.3" Full HD AMOLED Touch', '360° Hinge Design', 'S Pen included', 'Face Recognition', 'Fast Charge'],
        specs: { 'Display': '13.3" Full HD AMOLED Touchscreen', 'Processor': 'Intel Core Ultra 5 125H', 'RAM': '16GB LPDDR5X', 'Storage': '512GB NVMe SSD', 'Form Factor': '2-in-1 Convertible', 'Battery': '63Wh, 65W Fast Charge', 'Weight': '1.38kg', 'OS': 'Windows 11 Home' }
      },
      {
        id: 'macbook-air-m3',
        name: 'MacBook Air M3',
        brand: 'Apple',
        badge: null,
        image: 'https://images.unsplash.com/photo-1541807084-5c52e6a2dc44?auto=format&fit=crop&w=600&q=80',
        emoji: '💻', gradient: 'linear-gradient(135deg,#1c1c1e,#2c2c2e)',
        description: 'Impossibly thin and light with the M3 chip. Up to 18 hours battery, fanless, silent performance.',
        features: ['Apple M3 Chip', '13.6" Liquid Retina Display', '18hrs battery life', 'Fanless, silent design', '8GB / 16GB / 24GB Unified Memory', 'MagSafe 3 Charging'],
        specs: { 'Display': '13.6" Liquid Retina, 2560×1664', 'Chip': 'Apple M3 (8-core CPU, 10-core GPU)', 'Memory': '8GB / 16GB / 24GB Unified', 'Storage': '256GB / 512GB / 1TB / 2TB SSD', 'Battery': 'Up to 18hrs', 'Weight': '1.24kg', 'Ports': '2× USB-C / MagSafe 3 / 3.5mm', 'OS': 'macOS Sequoia' }
      },
      {
        id: 'hp-pavilion-15',
        name: 'HP Pavilion 15',
        brand: 'HP',
        badge: null,
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80',
        emoji: '💻', gradient: 'linear-gradient(135deg,#1a0a00,#2a1500)',
        description: 'Reliable everyday laptop with a Full HD display and Intel Core i5 performance.',
        features: ['Intel Core i5-1335U', '15.6" Full HD IPS', '8GB / 16GB DDR4', 'Fast SSD Storage', 'HD Webcam', 'Backlit Keyboard'],
        specs: { 'Display': '15.6" FHD IPS Anti-Glare', 'Processor': 'Intel Core i5-1335U', 'RAM': '8GB / 16GB DDR4', 'Storage': '512GB NVMe SSD', 'Graphics': 'Intel Iris Xe', 'Battery': 'Up to 8hrs', 'Weight': '1.75kg', 'OS': 'Windows 11 Home' }
      },
      {
        id: 'dell-inspiron-15',
        name: 'Dell Inspiron 15',
        brand: 'Dell',
        badge: null,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
        emoji: '💻', gradient: 'linear-gradient(135deg,#001020,#002040)',
        description: 'Best-in-class reliability with an AMD Ryzen processor and vibrant display.',
        features: ['AMD Ryzen 5 7530U', '15.6" FHD 120Hz', '16GB DDR5 RAM', '512GB SSD', 'Dedicated Graphics Option', 'Fast Charge 80% in 1hr'],
        specs: { 'Display': '15.6" FHD 120Hz', 'Processor': 'AMD Ryzen 5 7530U', 'RAM': '16GB DDR5', 'Storage': '512GB NVMe SSD', 'Graphics': 'AMD Radeon integrated', 'Battery': 'Up to 10hrs', 'Weight': '1.69kg', 'OS': 'Windows 11 Home' }
      }
    ]
  },

  headphones: {
    title: 'Headphones',
    subtitle: 'Immersive audio experiences from the world\'s best audio brands',
    heroImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1400&q=80',
    emoji: '🎧',
    brands: ['All', 'JBL', 'Aiwa'],
    products: [
      {
        id: 'jbl-live-770nc',
        name: 'Live 770NC',
        brand: 'JBL',
        badge: 'Hot',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
        emoji: '🎧', gradient: 'linear-gradient(135deg,#1a0d1a,#2a0a2a)',
        description: 'Wireless headphones with Adaptive Noise Cancelling. Feel the music, not the noise.',
        features: ['Adaptive ANC', '65hrs battery (ANC off)', 'JBL Spatial Sound', 'Multi-point connection (3 devices)', 'Foldable design', 'Google Fast Pair'],
        specs: { 'Driver': '40mm Dynamic', 'Frequency': '20Hz – 20kHz', 'Battery': 'Up to 65hrs (ANC off) / 50hrs (ANC on)', 'Charging': 'USB-C, 10min = 4hrs', 'Connectivity': 'Bluetooth 5.3, Multi-point', 'Foldable': 'Yes', 'Weight': '254g', 'Color Options': 'Black, White, Blue, Pink' }
      },
      {
        id: 'jbl-tune-720bt',
        name: 'Tune 720BT',
        brand: 'JBL',
        badge: null,
        image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80',
        emoji: '🎧', gradient: 'linear-gradient(135deg,#1a0d1a,#2a0a2a)',
        description: 'Wireless on-ear headphones with JBL Pure Bass Sound and 76-hour battery life.',
        features: ['JBL Pure Bass Sound', '76hrs battery life', 'Hands-free calls', 'Voice assistant support', 'Foldable flat design', 'Speed Charge'],
        specs: { 'Driver': '40mm Dynamic', 'Battery': 'Up to 76hrs', 'Charging': 'USB-C, Speed Charge', 'Connectivity': 'Bluetooth 5.3', 'Type': 'On-Ear', 'Weight': '160g' }
      },
      {
        id: 'jbl-tune-510bt',
        name: 'Tune 510BT',
        brand: 'JBL',
        badge: null,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
        emoji: '🎧', gradient: 'linear-gradient(135deg,#1a0d1a,#2a0a2a)',
        description: 'Affordable wireless on-ear with powerful JBL Pure Bass and 40 hours of playtime.',
        features: ['JBL Pure Bass', '40hrs battery', 'Lightweight 160g', 'Hands-free calls', 'Voice assistant', 'USB-C Charging'],
        specs: { 'Driver': '32mm', 'Battery': 'Up to 40hrs', 'Charging': 'USB-C', 'Connectivity': 'Bluetooth 5.0', 'Type': 'On-Ear', 'Weight': '160g' }
      },
      {
        id: 'aiwa-arc-1',
        name: 'ARC-1 Wireless ANC',
        brand: 'Aiwa',
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80',
        emoji: '🎧', gradient: 'linear-gradient(135deg,#001a2a,#002a40)',
        description: 'Premium over-ear headphones with Active Noise Cancellation and Hi-Res Audio certification.',
        features: ['Hybrid Active ANC', 'Hi-Res Audio Certified', '50mm Large Drivers', '30hrs battery', 'Soft memory foam cushions', 'Foldable for travel'],
        specs: { 'Driver': '50mm Dynamic', 'ANC': 'Hybrid Active Noise Cancelling', 'Battery': 'Up to 30hrs (ANC on)', 'Charging': 'USB-C', 'Connectivity': 'Bluetooth 5.0 + 3.5mm wire', 'Weight': '285g' }
      },
      {
        id: 'aiwa-aw-g1bk',
        name: 'HP-WL550 Over-Ear',
        brand: 'Aiwa',
        badge: null,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
        emoji: '🎧', gradient: 'linear-gradient(135deg,#001a2a,#002a40)',
        description: 'Rich stereo sound in a comfortable, stylish over-ear design. Great for home and commute.',
        features: ['40mm Drivers', 'Deep Bass Response', '25hrs battery', 'Foldable design', '3.5mm wired option', 'Built-in mic'],
        specs: { 'Driver': '40mm', 'Battery': 'Up to 25hrs', 'Charging': 'USB-C / Micro-USB', 'Connectivity': 'Bluetooth 5.0 + 3.5mm', 'Weight': '220g' }
      }
    ]
  },

  airpods: {
    title: 'AirPods & Earbuds',
    subtitle: 'True wireless earbuds — total freedom, premium sound',
    heroImage: 'https://images.unsplash.com/photo-1585386959836-5df27a00f541?auto=format&fit=crop&w=1400&q=80',
    emoji: '🎵',
    brands: ['All', 'Apple', 'Samsung', 'JBL'],
    products: [
      {
        id: 'airpods-pro-2',
        name: 'AirPods Pro (2nd Gen)',
        brand: 'Apple',
        badge: 'Hot',
        image: 'https://images.unsplash.com/photo-1585386959836-5df27a00f541?auto=format&fit=crop&w=600&q=80',
        emoji: '🎵', gradient: 'linear-gradient(135deg,#1c1c1e,#2c2c2e)',
        description: 'The ultimate AirPods with Adaptive Audio, next-level Active Noise Cancellation, and Transparency mode.',
        features: ['H2 chip', 'Adaptive Active ANC', 'Personalised Spatial Audio', '30hrs total battery (case)', 'MagSafe Charging Case', 'IP54 Water Resistant'],
        specs: { 'Chip': 'Apple H2', 'ANC': 'Adaptive Active Noise Cancellation', 'Battery': '6hrs (ANC on) + 24hrs case = 30hrs total', 'Charging': 'MagSafe / Lightning / Wireless', 'Connectivity': 'Bluetooth 5.3', 'Rating': 'IP54', 'Controls': 'Stem touch + force sensor' }
      },
      {
        id: 'airpods-4',
        name: 'AirPods 4',
        brand: 'Apple',
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1585386959836-5df27a00f541?auto=format&fit=crop&w=600&q=80',
        emoji: '🎵', gradient: 'linear-gradient(135deg,#1c1c1e,#2c2c2e)',
        description: 'AirPods redesigned. New acoustics, new custom driver, and a compact charging case.',
        features: ['H2 chip', 'Open-ear comfort fit', 'Personalised Spatial Audio', '30hrs total battery', 'USB-C Charging', 'IP54 Rating'],
        specs: { 'Chip': 'Apple H2', 'Battery': '5hrs + 25hrs case = 30hrs total', 'Charging': 'USB-C / Wireless (MagSafe version)', 'Connectivity': 'Bluetooth 5.3', 'Rating': 'IP54' }
      },
      {
        id: 'samsung-buds2-pro',
        name: 'Galaxy Buds2 Pro',
        brand: 'Samsung',
        badge: null,
        image: 'https://images.unsplash.com/photo-1614744904769-7cf1b7c1b3b7?auto=format&fit=crop&w=600&q=80',
        emoji: '🎵', gradient: 'linear-gradient(135deg,#1a1a2e,#16213e)',
        description: 'Premium Galaxy earbuds with intelligent ANC, 360° audio, and a Hi-Fi sound signature.',
        features: ['Intelligent ANC', '24-bit Hi-Fi Audio', '360° Audio with Head Tracking', '29hrs total battery', 'IPX7 waterproof', 'Earbud Fit Test'],
        specs: { 'Driver': '10mm Woofer + 6.1mm Tweeter', 'ANC': 'Intelligent Active Noise Cancellation', 'Battery': '5hrs + 24hrs case = 29hrs total', 'Charging': 'USB-C / Wireless', 'Connectivity': 'Bluetooth 5.3', 'Rating': 'IPX7' }
      },
      {
        id: 'jbl-tune-flex',
        name: 'Tune Flex',
        brand: 'JBL',
        badge: null,
        image: 'https://images.unsplash.com/photo-1585386959836-5df27a00f541?auto=format&fit=crop&w=600&q=80',
        emoji: '🎵', gradient: 'linear-gradient(135deg,#1a0d1a,#2a0a2a)',
        description: 'Open-ear stick design with JBL Pure Bass Sound and 32hrs total battery life.',
        features: ['JBL Pure Bass', 'Open/ANC dual mode', '32hrs total battery', 'IP54 Water Resistant', 'Voice Assistant', 'USB-C Charging'],
        specs: { 'Driver': '12mm Dynamic', 'Battery': '8hrs earbuds + 24hrs case = 32hrs total', 'Charging': 'USB-C', 'Connectivity': 'Bluetooth 5.2', 'Rating': 'IP54' }
      }
    ]
  },

  speakers: {
    title: 'Speakers',
    subtitle: 'Fill any space with incredible sound — indoors and outdoors',
    heroImage: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=1400&q=80',
    emoji: '🔊',
    brands: ['All', 'JBL', 'Aiwa'],
    products: [
      {
        id: 'jbl-partybox-310',
        name: 'PartyBox 310',
        brand: 'JBL',
        badge: 'Hot',
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80',
        emoji: '🔊', gradient: 'linear-gradient(135deg,#1a0000,#2a0808)',
        description: 'Bring the party anywhere. 240W of JBL Pro Sound, dazzling light show, and mic input.',
        features: ['240W Pro Sound', 'Dazzling light show', 'Wireless Mic & Guitar input', '18hrs battery life', 'Splash-proof', 'TWS Stereo pairing'],
        specs: { 'Output Power': '240W RMS', 'Battery': 'Up to 18hrs', 'Charging': 'AC Power', 'Connectivity': 'Bluetooth 5.1', 'Inputs': '3.5mm / RCA / USB', 'Rating': 'IPX4 Splash-proof', 'Weight': '16.8kg' }
      },
      {
        id: 'jbl-charge-5',
        name: 'Charge 5',
        brand: 'JBL',
        badge: null,
        image: 'https://images.unsplash.com/photo-1545454782-b1da82efb47e?auto=format&fit=crop&w=600&q=80',
        emoji: '🔊', gradient: 'linear-gradient(135deg,#1a0000,#2a0808)',
        description: 'Powerful portable speaker with 20hrs playtime and a built-in power bank to charge your devices.',
        features: ['JBL Pro Sound', '20hrs battery', 'Built-in power bank', 'IP67 Waterproof & Dustproof', 'PartyBoost multi-speaker', 'USB-C Charging'],
        specs: { 'Output Power': '30W RMS', 'Battery': 'Up to 20hrs', 'Charging': 'USB-C 20W', 'Connectivity': 'Bluetooth 5.1', 'Rating': 'IP67 Waterproof + Dustproof', 'Weight': '969g' }
      },
      {
        id: 'jbl-flip-6',
        name: 'Flip 6',
        brand: 'JBL',
        badge: null,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80',
        emoji: '🔊', gradient: 'linear-gradient(135deg,#1a0000,#2a0808)',
        description: 'Portable, rugged, and loud. The JBL Flip 6 delivers 30W sound with IP67 protection.',
        features: ['30W Powerful Sound', '12hrs battery', 'IP67 Waterproof', 'PartyBoost pairing', 'USB-C charging', 'Dustproof design'],
        specs: { 'Output Power': '30W RMS', 'Battery': 'Up to 12hrs', 'Charging': 'USB-C', 'Connectivity': 'Bluetooth 5.1', 'Rating': 'IP67', 'Weight': '550g' }
      },
      {
        id: 'aiwa-bluetooth-tower',
        name: 'Exos-9 Mega Bass',
        brand: 'Aiwa',
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1545454782-b1da82efb47e?auto=format&fit=crop&w=600&q=80',
        emoji: '🔊', gradient: 'linear-gradient(135deg,#001a2a,#002a40)',
        description: 'Room-filling tower speaker with massive bass, FM radio, and multi-device connectivity.',
        features: ['Mega Bass Woofer', 'FM Radio built-in', 'USB / SD Card / Aux', 'Bluetooth 5.0', 'Remote Control', 'LED Display'],
        specs: { 'Output Power': '60W Peak', 'Connectivity': 'Bluetooth 5.0 + AUX + USB + FM', 'Battery': 'AC Powered', 'Display': 'LED', 'Remote': 'Yes', 'Mic Input': 'Yes' }
      },
      {
        id: 'jbl-boombox-3',
        name: 'Boombox 3',
        brand: 'JBL',
        badge: null,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80',
        emoji: '🔊', gradient: 'linear-gradient(135deg,#1a0000,#2a0808)',
        description: 'The king of portable speakers. Massive 80W output, 24hrs battery, and IP67 protection.',
        features: ['80W Massive Sound', '24hrs battery life', 'IP67 Waterproof', 'Detachable power pack', 'PartyBoost enabled', 'USB-C Fast Charge'],
        specs: { 'Output Power': '80W RMS', 'Battery': 'Up to 24hrs', 'Charging': 'USB-C + AC Power', 'Rating': 'IP67', 'Connectivity': 'Bluetooth 5.3', 'Weight': '5.4kg' }
      }
    ]
  },

  televisions: {
    title: 'Televisions',
    subtitle: 'Stunning picture quality from the world\'s leading TV brands',
    heroImage: 'https://images.unsplash.com/photo-1593359677879-a4021f55b2f9?auto=format&fit=crop&w=1400&q=80',
    emoji: '📺',
    brands: ['All', 'Samsung', 'LG', 'Hisense', 'TCL'],
    products: [
      {
        id: 'samsung-qled-65',
        name: 'QLED 4K Smart TV 65"',
        brand: 'Samsung',
        badge: 'Hot',
        image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=600&q=80',
        emoji: '📺', gradient: 'linear-gradient(135deg,#1a1a2e,#16213e)',
        description: 'Quantum Dot technology delivers 100% colour volume in 4K. Quantum Processor 4K adapts every scene.',
        features: ['Quantum Dot 4K', 'Quantum Processor 4K', 'Quantum HDR', 'Object Tracking Sound', 'Multiple Voice Assistants', 'Gaming Hub built-in'],
        specs: { 'Screen Size': '65"', 'Resolution': '3840 × 2160 (4K)', 'Panel': 'QLED', 'HDR': 'Quantum HDR', 'Refresh Rate': '60Hz', 'Smart TV': 'Tizen OS', 'Ports': '4× HDMI, 2× USB', 'Audio': '20W 2.0ch' }
      },
      {
        id: 'samsung-qled-55',
        name: 'QLED 4K Smart TV 55"',
        brand: 'Samsung',
        badge: null,
        image: 'https://images.unsplash.com/photo-1593359677879-a4021f55b2f9?auto=format&fit=crop&w=600&q=80',
        emoji: '📺', gradient: 'linear-gradient(135deg,#1a1a2e,#16213e)',
        description: 'Brilliant 4K QLED picture with Quantum HDR — stunning for movies, sports, and gaming.',
        features: ['Quantum Dot 4K', 'Quantum HDR+', '100% Colour Volume', 'Smart TV – Tizen', 'Multiple Voice Assistants', '4K Upscaling AI'],
        specs: { 'Screen Size': '55"', 'Resolution': '3840 × 2160 (4K)', 'Panel': 'QLED', 'Refresh Rate': '60Hz', 'Smart TV': 'Tizen OS', 'Ports': '3× HDMI, 1× USB', 'Audio': '20W 2.0ch' }
      },
      {
        id: 'lg-oled-c4-55',
        name: 'OLED evo C4 55"',
        brand: 'LG',
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1593359677879-a4021f55b2f9?auto=format&fit=crop&w=600&q=80',
        emoji: '📺', gradient: 'linear-gradient(135deg,#1a0000,#2a0808)',
        description: 'Powered by the α9 AI Processor Gen7. OLED perfection — perfect blacks, infinite contrast.',
        features: ['OLED evo panel', 'α9 AI Processor Gen7', 'Dolby Vision IQ + Atmos', '120Hz for smooth gaming', '4× HDMI 2.1', 'webOS Smart TV'],
        specs: { 'Screen Size': '55"', 'Resolution': '3840 × 2160 (4K)', 'Panel': 'OLED evo', 'Refresh Rate': '120Hz', 'HDR': 'Dolby Vision IQ + HDR10 + HLG', 'Smart TV': 'webOS 24', 'Gaming': 'G-Sync, FreeSync, VRR, ALLM', 'Audio': '40W 2.1ch' }
      },
      {
        id: 'lg-nanocell-65',
        name: 'NanoCell 4K TV 65"',
        brand: 'LG',
        badge: null,
        image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=600&q=80',
        emoji: '📺', gradient: 'linear-gradient(135deg,#1a0000,#2a0808)',
        description: 'NanoCell technology filters impure colours for vivid, accurate colour from any viewing angle.',
        features: ['NanoCell 4K Display', 'α5 Processor 4K', 'Dolby Vision + Atmos', 'webOS Smart TV', 'ThinQ AI', '4K HDR Gaming'],
        specs: { 'Screen Size': '65"', 'Resolution': '3840 × 2160 (4K)', 'Panel': 'NanoCell IPS', 'Refresh Rate': '60Hz', 'Smart TV': 'webOS 23', 'Ports': '3× HDMI, 2× USB', 'Audio': '20W 2.0ch' }
      },
      {
        id: 'hisense-uled-55',
        name: 'ULED 4K Mini LED 55"',
        brand: 'Hisense',
        badge: 'Popular',
        image: 'https://images.unsplash.com/photo-1593359677879-a4021f55b2f9?auto=format&fit=crop&w=600&q=80',
        emoji: '📺', gradient: 'linear-gradient(135deg,#0a1a2a,#051520)',
        description: 'Mini LED backlighting with ULED technology. Outstanding brightness and local dimming.',
        features: ['ULED Mini LED', 'Dolby Vision IQ', '1500 nits peak brightness', 'Hi-View Engine Pro', 'VIDAA U7 Smart TV', 'AMD FreeSync Premium'],
        specs: { 'Screen Size': '55"', 'Resolution': '3840 × 2160 (4K)', 'Panel': 'Mini LED', 'HDR': 'Dolby Vision IQ', 'Refresh Rate': '144Hz', 'Smart TV': 'VIDAA U7', 'Gaming': 'AMD FreeSync Premium', 'Audio': '40W 2.1ch Dolby Atmos' }
      },
      {
        id: 'tcl-qled-55',
        name: 'C655 QLED 4K 55"',
        brand: 'TCL',
        badge: null,
        image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=600&q=80',
        emoji: '📺', gradient: 'linear-gradient(135deg,#1a0800,#2a1000)',
        description: 'TCL QLED with Google TV — Google Assistant built in and over 700,000 streaming apps.',
        features: ['QLED 4K', 'Google TV built-in', 'Dolby Vision + Atmos', '144Hz for gaming', 'AiPQ Processor 3.0', 'Game Master 3.0'],
        specs: { 'Screen Size': '55"', 'Resolution': '3840 × 2160 (4K)', 'Panel': 'QLED', 'Smart TV': 'Google TV', 'Refresh Rate': '144Hz', 'HDR': 'Dolby Vision IQ', 'Gaming': 'VRR, ALLM, FreeSync', 'Audio': '30W Dolby Atmos' }
      }
    ]
  },

  fridges: {
    title: 'Fridges & Refrigerators',
    subtitle: 'Keep your food fresh with the most energy-efficient refrigerators',
    heroImage: 'https://images.unsplash.com/photo-1571171755545-71b0a13b8f3e?auto=format&fit=crop&w=1400&q=80',
    emoji: '❄️',
    brands: ['All', 'LG', 'Samsung', 'Hisense'],
    products: [
      {
        id: 'lg-instaview-french',
        name: 'InstaView French Door',
        brand: 'LG',
        badge: 'Hot',
        image: 'https://images.unsplash.com/photo-1571171755545-71b0a13b8f3e?auto=format&fit=crop&w=600&q=80',
        emoji: '❄️', gradient: 'linear-gradient(135deg,#001520,#002030)',
        description: 'Knock twice on the glass panel to see inside without opening the door. Reduce cold air loss.',
        features: ['InstaView Door-in-Door', 'LinearCooling™', 'DoorCooling+™', 'Smart Diagnosis', 'Door Alarm', 'No Frost technology'],
        specs: { 'Capacity': '617L total', 'Configuration': 'French Door', 'Energy Rating': 'A++', 'Noise Level': '35dB', 'Door Alarm': 'Yes', 'Smart Features': 'ThinQ App, Smart Diagnosis', 'Dimensions': '91.2 × 73.5 × 178.7cm' }
      },
      {
        id: 'lg-side-by-side',
        name: 'Side-by-Side 675L',
        brand: 'LG',
        badge: null,
        image: 'https://images.unsplash.com/photo-1571171755545-71b0a13b8f3e?auto=format&fit=crop&w=600&q=80',
        emoji: '❄️', gradient: 'linear-gradient(135deg,#001520,#002030)',
        description: 'American-style side-by-side with InstaView and Door-in-Door convenience.',
        features: ['675L Capacity', 'InstaView technology', 'Water & Ice Dispenser', 'LinearCooling™', 'No Frost', 'ThinQ AI'],
        specs: { 'Capacity': '675L total', 'Configuration': 'Side-by-Side', 'Energy': 'A+', 'Dispenser': 'Water + Ice (cubed & crushed)', 'Smart': 'ThinQ App', 'Dimensions': '91.2 × 73.5 × 179cm' }
      },
      {
        id: 'samsung-bespoke-4door',
        name: 'Bespoke 4-Door French',
        brand: 'Samsung',
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1571171755545-71b0a13b8f3e?auto=format&fit=crop&w=600&q=80',
        emoji: '❄️', gradient: 'linear-gradient(135deg,#1a1a2e,#16213e)',
        description: 'Customisable panels, AI Energy mode, and a 21.5" built-in Family Hub screen.',
        features: ['21.5" Family Hub Display', 'Bespoke custom panels', 'AI Energy Mode', 'Beverage Centre', 'Triple Cooling zones', 'SmartThings Integration'],
        specs: { 'Capacity': '637L total', 'Configuration': '4-Door French', 'Display': '21.5" Family Hub', 'Energy': 'A++', 'Smart': 'SmartThings App', 'Customisation': 'Interchangeable door panels' }
      },
      {
        id: 'samsung-twin-cool-400',
        name: 'Twin Cooling Plus 400L',
        brand: 'Samsung',
        badge: 'Popular',
        image: 'https://images.unsplash.com/photo-1571171755545-71b0a13b8f3e?auto=format&fit=crop&w=600&q=80',
        emoji: '❄️', gradient: 'linear-gradient(135deg,#1a1a2e,#16213e)',
        description: 'Twin evaporators keep fridge and freezer humidity levels independent. No odour mixing.',
        features: ['Twin Cooling Plus™', '400L Capacity', 'No odour mixing', 'Power Freeze & Cool', 'All-Around Cooling', 'Digital Inverter Compressor'],
        specs: { 'Capacity': '400L total', 'Configuration': 'Double Door', 'Energy': 'A+', 'Cooling': 'Twin Evaporator System', 'Compressor': 'Digital Inverter 10yr warranty', 'Noise': '39dB' }
      },
      {
        id: 'hisense-350l-double',
        name: 'RT488N4ASU 350L',
        brand: 'Hisense',
        badge: null,
        image: 'https://images.unsplash.com/photo-1571171755545-71b0a13b8f3e?auto=format&fit=crop&w=600&q=80',
        emoji: '❄️', gradient: 'linear-gradient(135deg,#0a1a2a,#051520)',
        description: 'Energy-efficient double door fridge with No Frost and Multi Air Flow for even cooling.',
        features: ['350L Capacity', 'No Frost', 'Multi Air Flow', 'Super Freeze', 'LED Lighting', 'Door Alarm'],
        specs: { 'Capacity': '350L total', 'Configuration': 'Double Door', 'Energy': 'A+', 'No Frost': 'Yes', 'LED Lighting': 'Yes', 'Noise': '40dB' }
      },
      {
        id: 'hisense-200l-single',
        name: 'Single Door 200L',
        brand: 'Hisense',
        badge: null,
        image: 'https://images.unsplash.com/photo-1571171755545-71b0a13b8f3e?auto=format&fit=crop&w=600&q=80',
        emoji: '❄️', gradient: 'linear-gradient(135deg,#0a1a2a,#051520)',
        description: 'Compact and efficient single-door fridge — ideal for small homes, offices, and bedrooms.',
        features: ['200L Capacity', 'Low noise operation', 'Energy efficient', 'Adjustable shelves', 'Door storage bins', 'Crisper drawer'],
        specs: { 'Capacity': '200L', 'Configuration': 'Single Door with Ice Box', 'Energy': 'A++', 'Noise': '37dB', 'Colour': 'Silver / White' }
      }
    ]
  },

  cookers: {
    title: 'Cookers & Ovens',
    subtitle: 'Cook with precision — gas, electric, and induction options',
    heroImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=80',
    emoji: '🍳',
    brands: ['All', 'Geepas', 'Hisense', 'LG'],
    products: [
      {
        id: 'geepas-4burner-gas',
        name: '4-Burner Gas Cooker 60cm',
        brand: 'Geepas',
        badge: 'Hot',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80',
        emoji: '🍳', gradient: 'linear-gradient(135deg,#1a100a,#2a1500)',
        description: 'Heavy-duty 4-burner gas cooker with a large electric oven and auto-ignition.',
        features: ['4 Stainless Steel Burners', 'Large 60L Oven', 'Auto-ignition', 'Inner oven light', 'Cast iron pan supports', 'Stainless steel finish'],
        specs: { 'Burners': '4 (1 triple ring / 2 semi-rapid / 1 auxiliary)', 'Oven Capacity': '60L', 'Ignition': 'Auto (battery)', 'Grill': 'Yes', 'Oven Light': 'Yes', 'Dimensions': '60 × 60 × 85cm' }
      },
      {
        id: 'geepas-electric-cooker',
        name: 'Electric Cooker 60cm',
        brand: 'Geepas',
        badge: null,
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80',
        emoji: '🍳', gradient: 'linear-gradient(135deg,#1a100a,#2a1500)',
        description: 'Electric hotplates with a large fan-assisted oven. Clean, safe, and easy to use.',
        features: ['4 Ceramic Hotplates', 'Fan-assisted 60L oven', 'Auto-timer', 'Temperature control', 'Grill function', 'Child safety'],
        specs: { 'Hotplates': '4 Ceramic', 'Oven Capacity': '60L', 'Fan Oven': 'Yes', 'Timer': 'Auto shut-off', 'Grill': 'Yes', 'Power': '230V / 7000W total' }
      },
      {
        id: 'hisense-60cm-gas',
        name: 'HFG60131WGBK Gas Cooker',
        brand: 'Hisense',
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80',
        emoji: '🍳', gradient: 'linear-gradient(135deg,#0a1a2a,#051520)',
        description: 'Sleek stainless steel gas cooker with a cast iron pan rack and large 60L electric oven.',
        features: ['4 Gas Burners', '60L Electric Oven', 'Cast Iron Pan Supports', 'Auto-ignition', 'Oven Timer', 'Double-glazed door'],
        specs: { 'Burners': '4 Gas', 'Oven': '60L Electric', 'Pan Supports': 'Cast Iron', 'Ignition': 'Auto-electric', 'Finish': 'Stainless Steel / Black', 'Dimensions': '60 × 60 × 85cm' }
      },
      {
        id: 'geepas-2burner-tabletop',
        name: '2-Burner Table Top Gas',
        brand: 'Geepas',
        badge: null,
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80',
        emoji: '🍳', gradient: 'linear-gradient(135deg,#1a100a,#2a1500)',
        description: 'Compact and portable 2-burner gas hob — ideal for small kitchens and travel.',
        features: ['2 Gas Burners', 'Auto-ignition', 'Stainless steel top', 'Portable & lightweight', 'LPG compatible', 'Easy to clean'],
        specs: { 'Burners': '2 Gas', 'Ignition': 'Auto-piezo', 'Gas Type': 'LPG', 'Finish': 'Stainless Steel', 'Dimensions': '55 × 35 × 11cm' }
      }
    ]
  },

  cutlery: {
    title: 'Cutlery & Kitchen',
    subtitle: 'Premium kitchen essentials and utensils for the modern home',
    heroImage: 'https://images.unsplash.com/photo-1591489378430-ef2f4c626b35?auto=format&fit=crop&w=1400&q=80',
    emoji: '🍽️',
    brands: ['All', 'Geepas'],
    products: [
      {
        id: 'geepas-cutlery-24pc',
        name: '24-Piece Cutlery Set',
        brand: 'Geepas',
        badge: 'Popular',
        image: 'https://images.unsplash.com/photo-1591489378430-ef2f4c626b35?auto=format&fit=crop&w=600&q=80',
        emoji: '🍽️', gradient: 'linear-gradient(135deg,#1a1a0a,#252500)',
        description: 'Premium stainless steel cutlery set for 6 people — elegant and dishwasher safe.',
        features: ['24-piece set (serves 6)', 'High-grade stainless steel', 'Dishwasher safe', 'Mirror polished finish', 'Includes storage box', 'Rust-resistant'],
        specs: { 'Pieces': '24 (6× dinner knife, fork, dessert spoon, teaspoon)', 'Material': '18/10 Stainless Steel', 'Dishwasher Safe': 'Yes', 'Finish': 'Mirror Polish' }
      },
      {
        id: 'geepas-blender-1000w',
        name: '1000W Power Blender',
        brand: 'Geepas',
        badge: null,
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80',
        emoji: '🍳', gradient: 'linear-gradient(135deg,#1a1a0a,#252500)',
        description: 'Powerful 1000W blender with stainless steel blades for smoothies, juices, and sauces.',
        features: ['1000W motor', 'Stainless steel blades', '1.5L BPA-free jar', 'Ice crushing function', '3 speeds + pulse', 'Overheat protection'],
        specs: { 'Power': '1000W', 'Capacity': '1.5L BPA-Free', 'Blades': 'Stainless Steel 6-blade', 'Speeds': '3 + Pulse', 'Safety': 'Overheat protection' }
      },
      {
        id: 'geepas-rice-cooker',
        name: 'Digital Rice Cooker 1.8L',
        brand: 'Geepas',
        badge: null,
        image: 'https://images.unsplash.com/photo-1591489378430-ef2f4c626b35?auto=format&fit=crop&w=600&q=80',
        emoji: '🍽️', gradient: 'linear-gradient(135deg,#1a1a0a,#252500)',
        description: 'Cook perfect rice every time with auto keep-warm and a non-stick inner pot.',
        features: ['1.8L capacity (10 cups)', 'Auto keep-warm', 'Non-stick inner pot', 'Steam tray included', 'Measuring cup & spatula', 'Cool-touch handles'],
        specs: { 'Capacity': '1.8L (10 cups cooked rice)', 'Power': '700W', 'Keep Warm': 'Auto', 'Inner Pot': 'Non-stick coating', 'Accessories': 'Steam tray, cup, spatula' }
      },
      {
        id: 'geepas-kettle-1-8l',
        name: 'Stainless Steel Kettle 1.8L',
        brand: 'Geepas',
        badge: null,
        image: 'https://images.unsplash.com/photo-1591489378430-ef2f4c626b35?auto=format&fit=crop&w=600&q=80',
        emoji: '🍽️', gradient: 'linear-gradient(135deg,#1a1a0a,#252500)',
        description: 'Fast-boil electric kettle with automatic shut-off and boil-dry protection.',
        features: ['1.8L capacity', '2200W fast boil', 'Auto shut-off', 'Boil-dry protection', '360° swivel base', 'Water level indicator'],
        specs: { 'Capacity': '1.8L', 'Power': '2200W', 'Boil Time': '~3 minutes (full)', 'Safety': 'Auto shut-off + boil-dry', 'Base': '360° cordless' }
      },
      {
        id: 'geepas-microwave-23l',
        name: 'Digital Microwave 23L',
        brand: 'Geepas',
        badge: null,
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80',
        emoji: '🍳', gradient: 'linear-gradient(135deg,#1a1a0a,#252500)',
        description: '23L digital microwave with 800W power, 5 power levels, and pre-set cooking modes.',
        features: ['23L capacity', '800W power', '5 power levels', '8 auto-cook programs', 'Digital timer', 'Child safety lock'],
        specs: { 'Capacity': '23L', 'Power': '800W', 'Power Levels': '5', 'Pre-sets': '8 auto-cook programs', 'Child Lock': 'Yes', 'Turntable': '255mm glass plate' }
      }
    ]
  },

  appliances: {
    title: 'Home Appliances',
    subtitle: 'Smart appliances that make home life easier and more efficient',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80',
    emoji: '🏠',
    brands: ['All', 'LG', 'Samsung', 'Hisense', 'Geepas'],
    products: [
      {
        id: 'lg-washing-7kg',
        name: 'TurboWash 7kg',
        brand: 'LG',
        badge: 'Hot',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
        emoji: '🏠', gradient: 'linear-gradient(135deg,#1a0a1a,#200020)',
        description: 'TurboWash360° technology cleans a full load in just 39 minutes without compromising on quality.',
        features: ['TurboWash360° in 39min', 'AI DD™ Motor', '6 Motion technology', 'Steam care function', 'ThinQ WiFi control', 'A+++ Energy rating'],
        specs: { 'Capacity': '7kg wash', 'Spin Speed': '1400 RPM', 'Energy': 'A+++', 'Programmes': '14 wash cycles', 'Smart': 'ThinQ App, WiFi', 'Noise (spin)': '73dB', 'Dimensions': '60 × 55 × 85cm' }
      },
      {
        id: 'samsung-washing-8kg',
        name: 'EcoBubble 8kg Washer',
        brand: 'Samsung',
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
        emoji: '🏠', gradient: 'linear-gradient(135deg,#1a1a2e,#16213e)',
        description: 'EcoBubble™ technology penetrates fabrics faster for a powerful, gentle clean at lower temperatures.',
        features: ['EcoBubble™ technology', 'AI Wash automatically adjusts', '1400 RPM spin', 'SmartThings App', 'Hygiene Steam', 'A+++ Energy rating'],
        specs: { 'Capacity': '8kg wash', 'Spin Speed': '1400 RPM', 'Energy': 'A+++', 'Smart': 'SmartThings App', 'Programmes': '16 wash cycles', 'Noise (spin)': '72dB' }
      },
      {
        id: 'lg-microwave-20l',
        name: 'Solo Microwave 20L',
        brand: 'LG',
        badge: null,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
        emoji: '🏠', gradient: 'linear-gradient(135deg,#1a0a1a,#200020)',
        description: 'Compact 20L microwave with I-Wave™ even heating and EasyClean™ interior.',
        features: ['20L capacity', '700W output', 'EasyClean™ coating', 'I-Wave™ even heat', 'Smart Inverter', 'Child lock'],
        specs: { 'Capacity': '20L', 'Output Power': '700W', 'Control': 'Dial + Push', 'Interior': 'EasyClean™ Anti-bacterial', 'Safety': 'Child lock' }
      },
      {
        id: 'hisense-aircon-12000',
        name: 'Split AC 12000 BTU',
        brand: 'Hisense',
        badge: 'Popular',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
        emoji: '🏠', gradient: 'linear-gradient(135deg,#0a1a2a,#051520)',
        description: 'Energy-efficient split air conditioner with WiFi control, self-cleaning, and Smart Sleep mode.',
        features: ['12,000 BTU cooling', 'WiFi Smart Control', 'Self-cleaning function', 'Smart Sleep mode', '4D airflow', 'R32 eco-refrigerant'],
        specs: { 'Capacity': '12,000 BTU (3.5kW)', 'Energy': 'A++', 'Refrigerant': 'R32', 'Smart': 'HiSmart App WiFi', 'Noise (indoor)': '22dB', 'Coverage': 'Up to 30m²', 'Self Clean': 'Yes' }
      },
      {
        id: 'geepas-iron-2400w',
        name: '2400W Steam Iron',
        brand: 'Geepas',
        badge: null,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
        emoji: '🏠', gradient: 'linear-gradient(135deg,#1a0a1a,#200020)',
        description: '2400W steam iron with precision temperature control and anti-calc self-clean system.',
        features: ['2400W power', 'Variable steam control', 'Anti-scale system', '300mL water tank', 'Non-stick soleplate', 'Auto shut-off'],
        specs: { 'Power': '2400W', 'Steam Output': 'Up to 35g/min', 'Tank Capacity': '300mL', 'Soleplate': 'Non-stick Ceramic', 'Safety': 'Auto shut-off (2min horizontal, 8min vertical)' }
      }
    ]
  }

};

// Map category URL slugs to data keys
const SLUG_MAP = {
  phones: 'phones',
  laptops: 'laptops',
  headphones: 'headphones',
  airpods: 'airpods',
  speakers: 'speakers',
  televisions: 'televisions',
  fridges: 'fridges',
  cookers: 'cookers',
  cutlery: 'cutlery',
  appliances: 'appliances'
};
