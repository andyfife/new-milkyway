import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Andrew',
      email: 'andrewlintonfife@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
  ],
  products: [
    {
      _id_old: '63c248906063366ffcfa4beb',
      slug: 'title',
      name: 'TITLE',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/title.png',
      date: '01/13/23',
      number: '465',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/title.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/titled.mp4',

      created: '2023-01-14T06:15:44.871Z',
      updated: '2023-01-15T18:39:31.985Z',
    },
    {
      _id_old: '63b90b206063366ffcfa4bea',
      slug: 'spoken',
      name: 'SPOKEN',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/spoken.png',
      date: '01/06/23',
      number: '455',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/spoken.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/spoken.mp4',

      created: '2023-01-07T06:03:12.836Z',
      updated: '2023-01-07T06:03:58.773Z',
    },
    {
      _id_old: '63afda2a6063366ffcfa4be9',
      slug: 'wooden',
      name: 'WOODEN',

      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/wooden1.png',
      date: '12/30/22',
      number: '410',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/wooden.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/wooden.mp4',

      created: '2022-12-31T06:43:54.386Z',
      updated: '2022-12-31T06:44:50.090Z',
    },
    {
      _id_old: '63a6a3fe6063366ffcfa4be8',
      slug: 'quick',
      name: 'QUICK',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/quick.png',
      date: '12/23/22',
      number: '401',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/quick.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/quick.mp4',

      created: '2022-12-24T07:02:22.449Z',
      updated: '2022-12-24T07:03:05.022Z',
    },
  ],
};

export default data;
