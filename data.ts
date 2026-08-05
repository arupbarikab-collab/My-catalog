import { Product } from './types';

export const initialProducts: Product[] = [
  {
    id: "1",
    name: "ETERNAL PROMISE RING",
    category: "Rings",
    sku: "SG-R-001",
    weight: "4.2g",
    metal: "18kt White Gold",
    stock: "In Stock",
    description: "Exquisite oval-cut diamond solitaire ring featuring a hidden halo setting, crafted for the modern romantic. VVS1 clarity.",
    images: ["https://images.unsplash.com/photo-1605100804763-247f6612089b?auto=format&fit=crop&q=80&w=800"],
    styleTip: "Perfect for proposals or celebrating milestones.",
    featured: true,
    price: "$18,500"
  },
  {
    id: "2",
    name: "DIAMOND HOOP EARRINGS",
    category: "Earrings",
    sku: "SG-E-002",
    weight: "8.5g",
    metal: "18kt White Gold",
    stock: "Low Stock",
    description: "Classic inside-out diamond hoop earrings. Pave set diamonds ensure brilliance from every angle.",
    images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800"],
    styleTip: "Transition effortlessly from boardroom to evening gala.",
    featured: true,
    price: "$7,900"
  },
  {
    id: "3",
    name: "DIAMOND RIVIERE NECKLACE",
    category: "Necklaces",
    sku: "SG-N-003",
    weight: "24.5g",
    metal: "Platinum",
    stock: "Made to Order",
    description: "A spectacular cascade of graduating round brilliant diamonds, meticulously matched for color and clarity.",
    images: ["https://images.unsplash.com/photo-1599643478514-4a4e0f69a509?auto=format&fit=crop&q=80&w=800"],
    styleTip: "The ultimate statement piece for black-tie events.",
    featured: true,
    price: "$45,000"
  },
  {
    id: "4",
    name: "SAPPHIRE TEARDROP PENDANT",
    category: "Necklaces",
    sku: "SG-N-004",
    weight: "6.1g",
    metal: "18kt Yellow Gold",
    stock: "In Stock",
    description: "Deep blue Ceylon sapphire surrounded by a halo of brilliant white diamonds, suspended on a delicate gold chain.",
    images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800"],
    styleTip: "Adds a pop of royal elegance to any neckline.",
    featured: false,
    price: "$4,200"
  },
  {
    id: "5",
    name: "TENNIS BRACELET CLASSIQUE",
    category: "Bracelets",
    sku: "SG-B-005",
    weight: "14.3g",
    metal: "18kt White Gold",
    stock: "In Stock",
    description: "A seamless line of brilliant-cut diamonds, set in a flexible four-prong design for maximum comfort and sparkle.",
    images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800"],
    styleTip: "Stack with your favorite watch or wear solo.",
    featured: true,
    price: "$9,200"
  },
  {
    id: "6",
    name: "VINTAGE KUNDAN CHOKER",
    category: "Bridal Sets",
    sku: "SG-BR-006",
    weight: "85.8g",
    metal: "22kt Gold",
    stock: "Made to Order",
    description: "Heirloom-quality Polki Kundan bridal choker set with matching oversized earrings. Hand-enamelled meenakari back.",
    images: ["https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=800"],
    styleTip: "The crowning jewel for your wedding trousseau.",
    featured: true,
    price: "$12,800"
  }
];
