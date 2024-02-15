const SHOP_DATA = [
  {
    title: 'Pole Dance',
    items: [
      {
        id: 1,
        name: 'Pole Dance Beginner Level 1',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 20,
        location: 'Brussels',
        dayOfTheWeek: 'Monday',
        timeslot: '18:00-19:00',
        stock: 12
      },
      {
        id: 2,
        name: 'Pole Dance Beginner Level 2',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 20,
        location: 'Brussels',
        dayOfTheWeek: 'Monday',
        timeslot: '19:00-20:00',
        stock:12
      },
      {
        id: 3,
        name: 'Pole Dance Intermediate Level 1',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 20,
        location: 'Brussels',
        dayOfTheWeek: 'Tuesday',
        timeslot: '18:00-19:00',
        stock: 9
      },
      {
        id: 4,
        name: 'Pole Dance Beginner Level 1',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 20,
        location: 'Brussels',
        dayOfTheWeek: 'Tuesday',
        timeslot: '19:00-20:00',
        stock: 10
      },
      {
        id: 5,
        name: 'Pole Dance Beginner Level 1',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 20,
        location: 'Brussels',
        dayOfTheWeek: 'Wednesday',
        timeslot: '19:00-20:00',
        stock: 10
      },
      {
        id: 6,
        name: 'Pole Dance Beginner Level 2',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 20,
        location: 'Leuven',
        dayOfTheWeek: 'Thursday',
        timeslot: '20:00-21:00',
        stock: 10
      },
      {
        id: 7,
        name: 'Pole Dance Intermediate Level 2',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 20,
        location: 'Leuven',
        dayOfTheWeek: 'Tuesday',
        timeslot: '19:00-20:00',
        stock: 10
      },
      {
        id: 8,
        name: 'Pole Dance Intermediate Level 3',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 20,
        location: 'Leuven',
        dayOfTheWeek: 'Tuesday',
        timeslot: '20:00-21:00',
        stock: 10
      },
      {
        id: 9,
        name: 'Pole Dance Advanced',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 20,
        location: 'Namur',
        dayOfTheWeek: 'Saturday',
        timeslot: '10:00-11:00',
        stock: 0
      },
    ],
  },
  {
    title: 'Aerial Hoop',
    items: [
      {
        id: 10,
        name: 'Aerial Hoop Beginners',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 20,
        location: 'Brussels',
        dayOfTheWeek: 'Saturday',
        timeslot: '10:00-11:00',
        stock: 10

      },
      {
        id: 11,
        name: 'Aerial Hoop Intermediate',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 20,
        location: 'Brussels',
        dayOfTheWeek: 'Saturday',
        timeslot: '11:00-12:00',
        stock: 8
      },
      {
        id: 12,
        name: 'Aerial Hoop Advanced',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 20,
        location: 'Leuven',
        dayOfTheWeek: 'Tuesday',
        timeslot: '19:30-20:30',
        stock: 2
      },
     
    ],
  },
  {
    title: 'Yoga',
    items: [
      {
        id: 18,
        name: 'Hatha Yoga Beginners',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 25,
        location: 'Leuven',
        dayOfTheWeek: 'Tuesday',
        timeslot: '19:30-20:30',
        stock: 2
      },
      {
        id: 19,
        name: 'Hatha Yoga Beginners',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 25,
        location: 'Brussels',
        dayOfTheWeek: 'Tuesday',
        timeslot: '19:30-20:30',
        stock: 10
      },
      {
        id: 20,
        name: 'Power Yoga Beginners',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 25,
        location: 'Leuven',
        dayOfTheWeek: 'Tuesday',
        timeslot: '19:30-20:30',
        stock: 5
      },
      {
        id: 21,
        name: 'Ashtanga Yoga Intermediate',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 25,
        location: 'Namur',
        dayOfTheWeek: 'Sunday',
        timeslot: '11:00-12:00',
        stock: 1
      },
      {
        id: 22,
        name: 'Hatha Yoga Beginners',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 25,
        location: 'Namur',
        dayOfTheWeek: 'Sunday',
        timeslot: '11:00-12:00',
        stock: 0
      },
    ],
  },
  {
    title: 'Contemporary dance',
    items: [
      {
        id: 23,
        name: 'Contemporary Dance Beginners',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 30,
        location: 'Namur',
        dayOfTheWeek: 'Sunday',
        timeslot: '17:00-18:00',
        stock: 3
      },
      {
        id: 24,
        name: 'Contemporary Dance Intermediate',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 30,
        location: 'Namur',
        dayOfTheWeek: 'Sunday',
        timeslot: '18:00-19:00',
        stock: 7
      },
      {
        id: 25,
        name: 'Contemporary Dance Advanced',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 30,
        location: 'Namur',
        dayOfTheWeek: 'Sunday',
        timeslot: '19:00-20:00',
        stock: 4
      },
    
    ],
  },
  {
    title: 'Heels Dance',
    items: [
      {
        id: 30,
        name: 'Heels Floor Flow All Levels',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 30,
        location: 'Brussels',
        dayOfTheWeek: 'Saturday',
        timeslot: '10:00-11:00',
        stock: 4
      },
      {
        id: 31,
        name: 'Cabaret Heels All Levels',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 30,
        location: 'Brussels',
        dayOfTheWeek: 'Saturday',
        timeslot: '11:30-12:30',
        stock: 8
      },
      {
        id: 33,
        name: 'Sexy Heels Chair Flow All Levels',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 30,
        location: 'Brussels',
        dayOfTheWeek: 'Saturday',
        timeslot: '13:30-14:30',
        stock: 4
      }
    ],
  },
];

export default SHOP_DATA;