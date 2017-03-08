export default {
  overview: {
    title: 'Super nice pair of jeans',
    price: '23.23',
    sku: 'ABC123',
    description: 'This is the description, make it good.',
    categories: [
      {
        title: 'Dresses',
        url: '/dresses'
      },
      {
        title: 'Women',
        url: '/women'
      }
    ],
    options: {
      title: 'Leather',
      options: [
        {
          value: 'brown',
          description: 'Brown'
        },
        {
          value: 'black',
          description: 'Black'
        }
      ]
    }
  },
  info: {
    markup: '<p><span>Vintage-style faux leather short overalls. <strong>Long adjustable</strong> straps with brass detailing, exposed zip at back, and side slant pockets with single rear welt pocket.</span><br/><br /><span>100% Polyester</span></p>'
  },
  gallery: {
    imageUrlRegular: 'https://images-eu.ssl-images-amazon.com/images/I/41Aq54fKr8L._AC_UL260_SR200,260_.jpg',
    imageUrlLarge: 'https://images-eu.ssl-images-amazon.com/images/I/41Aq54fKr8L._AC_UL501_SR385,501_FMwebp_QL65_.jpg',
    alt: 'Cheap Monday Men\'s Tight Blue Dry Slim Jeans',
    title: 'Cheap Monday Men\'s Tight Blue Dry Slim Jeans',
    items: [
      {
        imageUrlRegular: 'https://images-eu.ssl-images-amazon.com/images/I/41aN%2B08IeLL._AC_UL260_SR200,260_.jpg',
        imageUrlLarge: 'https://images-eu.ssl-images-amazon.com/images/I/41aN%2B08IeLL._AC_UL501_SR385,501_FMwebp_QL65_.jpg',
        alt: 'Cheap Monday Men\'s Tight Cut Grey Jeans',
        title: 'Cheap Monday Men\'s Tight Cut Grey Jeans'
      },
      {
        imageUrlRegular: 'https://images-eu.ssl-images-amazon.com/images/I/41ubWWMSwPL._AC_UL260_SR200,260_.jpg',
        imageUrlLarge: 'https://images-eu.ssl-images-amazon.com/images/I/41ubWWMSwPL._AC_UL501_SR385,501_FMwebp_QL65_.jpg',
        alt: 'G-Star RAW Men\'s 5620 3d Slim Jeans',
        title: 'G-Star RAW Men\'s 5620 3d Slim Jeans'
      },
      {
        imageUrlRegular: 'https://images-eu.ssl-images-amazon.com/images/I/41iU+aI00bL._AC_UL260_SR200,260_.jpg',
        imageUrlLarge: 'https://images-eu.ssl-images-amazon.com/images/I/41iU+aI00bL._AC_UL501_SR385,501_FMwebp_QL65_.jpg',
        alt: 'Hilfiger Denim Men\'s Jeans',
        title: 'Hilfiger Denim Men\'s Jeans'
      }
    ]
  },
  shipping: {
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    giftwrap: {
      available: true,
      cost: 0.99
    },
    methods: [
      {
        name: 'Royal Mail',
        imageSrc: 'http://www.tfingi.com/repo/royal-mail.png'
      },
      {
        name: 'UPS',
        imageSrc: 'http://www.tfingi.com/repo/ups-logo.png'
      }
    ]
  }
};
