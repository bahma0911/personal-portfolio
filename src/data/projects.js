import cascadeImage from '../image/cascade.jpg'
import zionsImage from '../image/zions.jpg'
import ecommerceImage from '../image/e-commerce.jpg'
import wineImage from '../image/wine.jpg'
import sweetsImage from '../image/sweets.jpg'
import qrImage from '../image/qr.jpg'
import meowgramImage from '../image/meowgram.png'

const projects = [
  {
    id: 'cascade-coffee',
    title: 'Cascade coffee Menu',
    description: 'A MERN menu website created for a cafe, featuring product listings, responsive layout, and brand visuals.',
    image: cascadeImage,
    tech: ['MERN', 'React', 'MongoDB'],
    github: 'https://github.com/bahma0911',
    demo: 'https://cascade-bax3.onrender.com',
    category: 'Fullstack',
  },
  {
    id: 'zions-pastry',
    title: 'Zions Pastry Website',
    description: 'A commercial pastry website designed to highlight menu favorites and brand storytelling for Zions pastry.',
    image: zionsImage,
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/bahma0911',
    demo: 'https://demopastry.netlify.app/',
    category: 'Frontend',
  },
  {
    id: 'multi-vendor-saas',
    title: 'Multi-Vendor E-Commerce',
    description: 'A full-stack marketplace platform built using MERN for managing products, vendors, and user orders.',
    image: ecommerceImage,
    tech: ['MERN', 'Node.js', 'Express'],
    github: 'https://github.com/bahma0911',
    demo: 'https://bahma.com.et',
    category: 'Fullstack',
  },
  {
    id: 'wine-shop',
    title: 'Wine Shop Website',
    description: 'A MERN-based wine shop landing page with product showcases, elegant styling, and checkout readiness.',
    image: wineImage,
    tech: ['MERN', 'React', 'Node.js'],
    github: 'https://github.com/bahma0911',
    demo: 'https://helen-9bya.onrender.com',
    category: 'Fullstack',
  },
  {
    id: 'nani-sweets',
    title: 'Nani Sweets Shop',
    description: 'A homemade sweets storefront built with MERN, highlighting products, contact details, and order flow.',
    image: sweetsImage,
    tech: ['MERN', 'React', 'MongoDB'],
    github: 'https://github.com/bahma0911',
    demo: 'https://nanisweets.netlify.app/',
    category: 'Fullstack',
  },
  {
    id: 'wedding-qr-gallery',
    title: 'Wedding QR Gallery',
    description: 'An online gallery with a sharable QR code experience so anyone can scan and share wedding moments.',
    image: qrImage,
    tech: ['MERN', 'React', 'MongoDB'],
    github: 'https://github.com/bahma0911',
    demo: 'https://wedding-qr-front.onrender.com',
    category: 'Fullstack',
  },
  {
    id: 'meowgram',
    title: 'Meowgram',
    description: 'A fun Instagram-style app for cat lovers, currently in progress as a MERN social media project.',
    image: meowgramImage,
    tech: ['MERN', 'React', 'MongoDB'],
    github: 'https://github.com/bahma0911',
    demo: 'https://meowgram-social--bemnis.replit.app/',
    category: 'Fullstack',
  },
]

export default projects
