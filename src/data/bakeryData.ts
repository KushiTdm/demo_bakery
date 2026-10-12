export type ProductCategory = {
  id: string;
  label: string;
  icon: string;
  tagline: string;
  items: ProductItem[];
};

export type ProductItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
};

export const productCategories: ProductCategory[] = [
  {
    id: 'pains',
    label: 'Les Pains d\'Exception',
    icon: 'Wheat',
    tagline: 'Cuits sur pierre, pétris à la main',
    items: [
      {
        name: 'Tradition Label Rouge',
        description: 'Notre baguette signature, croûte croustillante et mie aérée, farine Label Rouge.',
        price: '1,40 €',
        image: 'https://images.pexels.com/photos/30164836/pexels-photo-30164836.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Label Rouge', 'Farine FR'],
      },
      {
        name: 'Pain au Levain Naturel',
        description: 'Levain chef nourri quotidiennement, fermentation 18h, goût authentique et acidulé.',
        price: '5,80 €',
        image: 'https://images.pexels.com/photos/8633662/pexels-photo-8633662.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Levain naturel', 'Bio'],
      },
      {
        name: 'Tourte de Seigle',
        description: 'Farine de seigle complète, mie dense et humide, parfait pour fromages et terrines.',
        price: '4,90 €',
        image: 'https://images.pexels.com/photos/28984953/pexels-photo-28984953.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Seigle', 'Sans gluten ajouté'],
      },
      {
        name: 'Pain de Campagne',
        description: 'Croûte épaisse dorée, mie crème aux alvéoles irrégulières, un classique intemporel.',
        price: '3,20 €',
        image: 'https://images.pexels.com/photos/461060/pexels-photo-461060.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Recette traditionnelle'],
      },
    ],
  },
  {
    id: 'viennoiseries',
    label: 'Viennoiseries Pur Beurre',
    icon: 'Croissant',
    tagline: 'Beurre AOP Charentes-Poitou, feuilletage 3 jours',
    items: [
      {
        name: 'Croissant Pur Beurre',
        description: '64 couches de feuilletage, beurre AOP Charentes-Poitou, doré et croustillant.',
        price: '1,20 €',
        image: 'https://images.pexels.com/photos/30853716/pexels-photo-30853716.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Pur Beurre AOP'],
      },
      {
        name: 'Pain au Chocolat',
        description: 'Deux barres de chocolat noir 70% dans un feuilletage tendre et beurré.',
        price: '1,30 €',
        image: 'https://images.pexels.com/photos/32422489/pexels-photo-32422489.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Pur Beurre AOP', 'Chocolat 70%'],
      },
      {
        name: 'Brioche Feuilletée',
        description: 'Brioche à tête, moelleuse au cœur, sucrée et parfumée à la fleur d\u2019oranger.',
        price: '2,80 €',
        image: 'https://images.pexels.com/photos/37020184/pexels-photo-37020184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Fleur d\u2019oranger'],
      },
      {
        name: 'Chouquette Sucrée',
        description: 'Chouquette légère saupoudrée de sucre perlé, parfaite avec un café.',
        price: '0,90 €',
        image: 'https://images.pexels.com/photos/14565940/pexels-photo-14565940.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Sucre perlé'],
      },
    ],
  },
  {
    id: 'patisseries',
    label: 'Pâtisseries Fines',
    icon: 'CakeSlice',
    tagline: 'Créations du chef, fraîches chaque jour',
    items: [
      {
        name: 'Tartelette aux Fraises',
        description: 'Pâte sablée vanillée, crème pâtissière à la gousse, fraises Gariguette.',
        price: '4,50 €',
        image: 'https://images.pexels.com/photos/32393658/pexels-photo-32393658.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Fraises Gariguette', 'Vanille bourbon'],
      },
      {
        name: 'Éclair au Chocolat',
        description: 'Pâte à chou, crème au chocolat noir, fondant miroir intense en cacao.',
        price: '3,80 €',
        image: 'https://images.pexels.com/photos/8250329/pexels-photo-8250329.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Chocolat noir'],
      },
      {
        name: 'Mille-feuille Vanille',
        description: 'Trois étages de feuilletage caramélisé, crème mousseline à la vanille.',
        price: '4,20 €',
        image: 'https://images.pexels.com/photos/13760716/pexels-photo-13760716.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Vanille bourbon'],
      },
      {
        name: 'Tarte au Citron Meringuée',
        description: 'Crémeux citron jaune et vert, meringue italienne brûlée au chalumeau.',
        price: '3,90 €',
        image: 'https://images.pexels.com/photos/8250338/pexels-photo-8250338.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Citron Menton'],
      },
    ],
  },
  {
    id: 'traiteur',
    label: 'Traiteur & Pause Déjeuner',
    icon: 'Sandwich',
    tagline: 'Préparés sur commande chaque matin',
    items: [
      {
        name: 'Sandwich Baguette Tradition',
        description: 'Jambon de Bayonne, beurre demi-sel, cornichons, dans notre baguette Tradition.',
        price: '6,50 €',
        image: 'https://images.pexels.com/photos/14380271/pexels-photo-14380271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Jambon Bayonne'],
      },
      {
        name: 'Quiche Lorraine',
        description: 'Pâte brisée maison, lardons fumés, crème fraîche et œufs fermiers.',
        price: '5,90 €',
        image: 'https://images.pexels.com/photos/20182342/pexels-photo-20182342.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Œufs fermiers'],
      },
      {
        name: 'Salade Composée du Marché',
        description: 'Mesclun, tomates, chèvre frais, noix, vinaigrette au miel et citron.',
        price: '7,20 €',
        image: 'https://images.pexels.com/photos/18338496/pexels-photo-18338496.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Bio', 'Local'],
      },
      {
        name: 'Croque-Monsieur',
        description: 'Pain de campagne, jambon, béchamel et Comté gratiné au four.',
        price: '6,80 €',
        image: 'https://images.pexels.com/photos/15362507/pexels-photo-15362507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Comté AOP'],
      },
    ],
  },
];

export type Review = {
  name: string;
  date: string;
  rating: number;
  text: string;
  avatar: string;
};

export const reviews: Review[] = [
  {
    name: 'Marguerite Lefèvre',
    date: 'Il y a 2 semaines',
    rating: 5,
    text: 'Le meilleur pain au levain que j\'ai mangé depuis des années. La croûte est croustillante, la mie est parfaite. On sent le travail artisanal et l\'amour du métier dans chaque bouchée.',
    avatar: 'https://images.pexels.com/photos/11579595/pexels-photo-11579595.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    name: 'Thomas Berger',
    date: 'Il y a 1 mois',
    rating: 5,
    text: 'Je viens chaque dimanche matin pour les croissants pur beurre. Ils sont d\'une qualité incomparable, dorés, feuilletés, fondants. Ma fille adore les pains au chocolat !',
    avatar: 'https://images.pexels.com/photos/35490803/pexels-photo-35490803.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    name: 'Sophie Marchand',
    date: 'Il y a 3 semaines',
    rating: 5,
    text: 'L\'éclair au chocolat est tout simplement divin. La crème est onctueuse, le chocolat intense. La boutique est charmante et chaleureuse, l\'accueil toujours souriant.',
    avatar: 'https://images.pexels.com/photos/16869444/pexels-photo-16869444.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    name: 'Olivier Dupont',
    date: 'Il y a 1 semaine',
    rating: 5,
    text: 'La quiche lorraine est un délice, parfaite pour ma pause déjeuner. Tout est frais, préparé sur place. Une vraie boulangerie de quartier comme on en trouve plus beaucoup.',
    avatar: 'https://images.pexels.com/photos/13430312/pexels-photo-13430312.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    name: 'Camille Rousseau',
    date: 'Il y a 2 mois',
    rating: 5,
    text: 'Le mille-feuille est une œuvre d\'art. Feuilletage croustillant, crème vanillée à souhait. Et la tartelette aux fraises en saison est à tomber. Mon adresse préférée !',
    avatar: 'https://images.pexels.com/photos/16160801/pexels-photo-16160801.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    name: 'Henri Laurent',
    date: 'Il y a 5 jours',
    rating: 5,
    text: 'Un pain de campagne digne de ce nom. La farine est de qualité, la cuisson sur pierre fait toute la différence. Le boulanger prend le temps d\'expliquer son métier, bravo !',
    avatar: 'https://images.pexels.com/photos/30269649/pexels-photo-30269649.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
];

export type GalleryImage = {
  url: string;
  alt: string;
  span?: string;
};

export const galleryImages: GalleryImage[] = [
  {
    url: 'https://images.pexels.com/photos/35993723/pexels-photo-35993723.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Pains artisanaux sur étagères en bois',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    url: 'https://images.pexels.com/photos/30853716/pexels-photo-30853716.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Croissants dorés alignés',
  },
  {
    url: 'https://images.pexels.com/photos/36445141/pexels-photo-36445141.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Pains et viennoiseries dans le four',
  },
  {
    url: 'https://images.pexels.com/photos/8250329/pexels-photo-8250329.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Éclairs et pâtisseries fines',
  },
  {
    url: 'https://images.pexels.com/photos/29380155/pexels-photo-29380155.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Intérieur chaleureux de la boulangerie',
    span: 'md:col-span-2',
  },
  {
    url: 'https://images.pexels.com/photos/13399520/pexels-photo-13399520.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Pains au levain en vitrine',
  },
  {
    url: 'https://images.pexels.com/photos/2253636/pexels-photo-2253636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Décor rustique de la boutique',
  },
  {
    url: 'https://images.pexels.com/photos/30918881/pexels-photo-30918881.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Miches de pain refroidissant sur grille en bois',
  },
];

export const openingHours = [
  { day: 'Lundi', hours: 'Fermé' },
  { day: 'Mardi', hours: '6h30 — 19h30' },
  { day: 'Mercredi', hours: '6h30 — 19h30' },
  { day: 'Jeudi', hours: '6h30 — 19h30' },
  { day: 'Vendredi', hours: '6h30 — 19h30' },
  { day: 'Samedi', hours: '7h00 — 20h00' },
  { day: 'Dimanche', hours: '7h00 — 13h00' },
];
