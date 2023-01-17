import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Andrew',
      email: 'andrewlintonfife@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      _id_old: '63c248906063366ffcfa4beb',
      slug: 'TITLE',
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
      slug: 'SPOKEN',
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
      slug: 'WOODEN',
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
      slug: 'QUICK',
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
    {
      _id_old: '639d61286063366ffcfa4be7',
      slug: 'ONWARDS',
      name: 'ONWARDS',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/onwards.png',
      date: '12/16/22',
      number: '400',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/onwards.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/onwards.mp4',

      created: '2022-12-17T06:26:48.669Z',
      updated: '2022-12-17T06:27:31.387Z',
    },
    {
      _id_old: '639437106063366ffcfa4be6',
      slug: 'moving',
      name: 'MOVING',

      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/moving.png',
      date: '12/09/22',
      number: '375',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/moving.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/moving.mp4',
    },
    {
      _id_old: '638af4cc8720263e5a17479c',
      slug: 'turn',
      name: 'TURN',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/turn.png',
      date: '12/02/22',
      number: '350',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/turn.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/turn.mp4',

      created: '2022-12-03T07:03:40.172Z',
      updated: '2022-12-03T07:04:53.451Z',
    },
    {
      _id_old: '6381b7184b5cf7e1585fe0ec',
      slug: 'TONIC',
      name: 'TONIC',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/tonic.png',
      date: '11/25/22',
      number: '315',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/tonic.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/tonic.mp4',

      created: '2022-11-26T06:50:00.879Z',
      updated: '2022-12-02T00:30:35.184Z',
    },
    {
      _id_old: '63787451212b1590aad359e0',
      slug: 'MIST',
      name: 'MIST',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/mist.png',
      date: '11/18/22',
      number: '311',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/mist.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/mist.mp4',

      created: '2022-11-19T06:14:41.431Z',
      updated: '2022-11-19T06:15:26.474Z',
    },
    {
      _id_old: '636f3925212b1590aad359de',
      slug: 'COAST',
      name: 'COAST',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/coast.png',
      date: '11/11/22',
      number: '310',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/coast.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/coast.mp4',

      created: '2022-11-12T06:11:49.980Z',
      updated: '2022-11-12T06:12:36.872Z',
    },
    {
      _id_old: '6365f4a8212b1590aad359dd',
      slug: 'SURF',
      name: 'SURF',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/surf.png',
      date: '11/04/22',
      number: '308',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/surf.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/surf.mp4',

      created: '2022-11-05T05:29:12.528Z',
      updated: '2022-11-05T05:31:18.695Z',
    },
    {
      _id_old: '635cb933212b1590aad359dc',
      slug: 'DEFINITION',
      name: 'DEFINITION',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/definition.png',
      date: '10/28/22',
      number: '306',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/definition.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/definition.mp4',

      created: '2022-10-29T05:25:07.618Z',
      updated: '2022-10-29T05:25:55.904Z',
    },
    {
      _id_old: '63537af7212b1590aad359da',
      slug: 'PLUS',
      name: 'PLUS',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/plus.png',
      date: '10/21/22',
      number: '303',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/plus.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/plus.mp4',

      created: '2022-10-22T05:09:11.600Z',
      updated: '2022-10-22T05:09:53.003Z',
    },
    {
      _id_old: '634a40f1212b1590aad359d9',
      slug: 'NUMBERS',
      name: 'NUMBERS',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/numbers.png',
      date: '10/14/22',
      number: '302',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/numbers.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/numbers.mp4',

      created: '2022-10-15T05:11:13.317Z',
      updated: '2022-10-15T05:12:49.002Z',
    },
    {
      _id_old: '63414225212b1590aad359d8',
      slug: 'EDGE',
      name: 'EDGE',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/edge.png',
      date: '10/07/22',
      number: '301',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/edge.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/edge.mp4',

      created: '2022-10-08T09:25:57.783Z',
      updated: '2022-10-08T10:23:14.380Z',
    },
    {
      _id_old: '6337d03e212b1590aad359d7',
      slug: 'KEY',
      name: 'KEY',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/key.png',
      date: '09/30/22',
      number: '300',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/key.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/key.mp4',

      created: '2022-10-01T05:29:34.996Z',
      updated: '2022-10-01T05:30:55.433Z',
    },
    {
      _id_old: '632e9190212b1590aad359d6',
      slug: 'SPY',
      name: 'SPY',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/spy.png',
      date: '09/23/22',
      number: '299',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/spy5.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/spy.mp4',

      created: '2022-09-24T05:11:44.860Z',
      updated: '2022-09-25T02:16:03.222Z',
    },
    {
      _id_old: '63255ec5212b1590aad359d5',
      slug: 'GAME',
      name: 'GAME',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/game.png',
      date: '09/16/22',
      number: '295',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/game.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/game.mp4',

      created: '2022-09-17T05:44:37.019Z',
      updated: '2022-09-17T05:45:43.415Z',
    },
    {
      _id_old: '631c1cbc212b1590aad359d4',
      slug: 'LATERS',
      name: 'LATERS',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/laters.png',
      date: '09/09/22',
      number: '290',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/laters17.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/laters.mp4',

      created: '2022-09-10T05:12:28.859Z',
      updated: '2022-09-10T23:04:05.109Z',
    },
    {
      _id_old: '6312e1922c2cf00b2ffacb8f',
      slug: 'CH1',
      name: 'CH1',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/ch1.png',
      date: '09/02/22',
      number: '280',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/ch1.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/ch1.mp4',

      created: '2022-09-03T05:09:38.474Z',
      updated: '2022-09-03T05:10:35.085Z',
    },
    {
      _id_old: '6309a895faa8a60b12aee43e',
      slug: 'BREEZE',
      name: 'BREEZE',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/breeze.png',
      date: '08/26/22',
      number: '274',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/breeze.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/breeze.mp4',

      created: '2022-08-27T05:16:05.374Z',
      updated: '2022-08-27T05:21:47.070Z',
    },
    {
      _id_old: '630075e0faa8a60b12aee43d',
      slug: '71',
      name: '71',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/71.png',
      date: '08/19/22',
      number: '260',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/71.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/71_new.mp4',

      created: '2022-08-20T05:49:20.751Z',
      updated: '2022-08-20T17:02:04.571Z',
    },
    {
      _id_old: '62f73327faa8a60b12aee43c',
      slug: 'SET',
      name: 'SET',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/set.png',
      date: '08/12/22',
      number: '250',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/set.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/set.mp4',

      created: '2022-08-13T05:14:15.922Z',
      updated: '2022-08-13T05:15:26.300Z',
    },
    {
      _id_old: '62edfb9ffaa8a60b12aee43a',
      slug: 'WAVE',
      name: 'WAVE',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/wave.png',
      date: '08/05/22',
      number: '244',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/wave.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/wave.mp4',

      created: '2022-08-06T05:26:55.687Z',
      updated: '2022-08-06T05:28:07.557Z',
    },
    {
      _id_old: '62e4c3b51bc1c90927036ddc',
      slug: 'WEATHER',
      name: 'WEATHER',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/weather.png',
      date: '07/29/22',
      number: '242',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/weather.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/weather.mp4',

      created: '2022-07-30T05:37:57.974Z',
      updated: '2022-07-30T05:39:49.275Z',
    },
    {
      _id_old: '62db85011bc1c90927036dda',
      slug: 'HAPPENING',
      name: 'HAPPENING',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/happening.png',
      date: '07/22/22',
      number: '230',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/happening.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/happening.mp4',

      created: '2022-07-23T05:20:01.148Z',
      updated: '2022-07-23T05:21:11.411Z',
    },
    {
      _id_old: '62d24a371bc1c90927036dd8',
      slug: 'B_MOVIE',
      name: 'B MOVIE',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/bmovie.png',
      date: '07/15/22',
      number: '216',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/bmovie.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/bmovie.mp4',

      created: '2022-07-16T05:18:47.341Z',
      updated: '2022-07-16T05:20:10.521Z',
    },
    {
      _id_old: '62c91060aadde208fddc5152',
      slug: 'ROSES',
      name: 'ROSES',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/roses.png',
      date: '07/08/22',
      number: '214',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/roses.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/roses_stream.m4v',
      description: 'Prune',

      created: '2022-07-09T05:21:36.428Z',
      updated: '2022-07-09T05:24:58.007Z',
    },
    {
      _id_old: '62bfd2e8df02ee096360f297',
      slug: 'VERSUS',
      name: 'VERSUS',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/versus.png',
      date: '07/01/22',
      number: '212',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/versus.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/versus_end.mp4',
      description: 'gotta be for',

      created: '2022-07-02T05:08:56.089Z',
      updated: '2022-07-02T21:23:54.862Z',
    },
    {
      _id_old: '62b72f65df02ee096360f296',
      slug: 'CARRY',
      name: 'CARRY',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/carry.png',
      date: '06/24/22',
      number: '210',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/carry.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/carry.mp4',

      created: '2022-06-25T15:53:09.012Z',
      updated: '2022-06-25T15:54:14.767Z',
    },
    {
      _id_old: '62ae3968df02ee096360f295',
      slug: 'THEORY',
      name: 'THEORY',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/theory.png',
      date: '06/17/22',
      number: '208',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/theory.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/theory.mp4',

      created: '2022-06-18T20:45:28.939Z',
      updated: '2022-06-18T20:46:30.289Z',
    },
    {
      _id_old: '62a4cb21df02ee096360f293',
      slug: 'GRAVITY',
      name: 'GRAVITY',
      seller: { _id_old: '6279a43dcce4316bbd3c1501' },
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/gravity.png',
      date: '06/10/22',
      number: '205',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/gravity.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/gravity.mp4',

      created: '2022-06-11T17:04:33.888Z',
      updated: '2022-06-11T17:05:33.589Z',
    },
    {
      _id_old: '629ae73fdf02ee096360f290',
      slug: 'FORCE',
      name: 'FORCE',
      seller: null,
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/force.png',
      date: '06/03/22',
      number: '204',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/force.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/force.mp4',
      description: 'They are everywhere',

      created: '2022-06-04T05:01:51.953Z',
      updated: '2022-06-04T05:03:28.281Z',
    },
    {
      _id_old: '6291ad89b54fe409934652ab',
      slug: 'BRIEf',
      name: 'BRIEF',
      seller: null,
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/brief.png',
      date: '05/27/22',
      number: '202',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/brief.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/brief.mp4',
      description: 'One more time',

      created: '2022-05-28T05:05:13.615Z',
      updated: '2022-05-28T05:07:16.074Z',
    },
    {
      _id_old: '627f390c76c75e6d5ab120f8',
      slug: 'VOTE',
      name: 'VOTE',
      seller: null,
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/vote.png',
      date: '05/13/22',
      number: '199',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/vote.mp3',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/vote.mp4',
      description: 'They count',

      created: '2022-05-14T05:07:24.942Z',
      updated: '2022-05-14T05:09:21.789Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c1500',
      slug: 'DEBUT',
      name: 'DEBUT',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/debut.png',
      date: '05/08/20',
      number: '100',
      description: 'Look Out!',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/newmilk1.wav',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/debut.mp3',

      created: '2022-05-09T23:31:01.892Z',
      updated: '2022-05-09T23:43:16.570Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14ff',
      slug: 'LADIES_NIGHT',
      name: 'LADIES NIGHT',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/ladiesnight.png',
      date: '05/08/20',
      number: '101',
      description: 'Look Out!',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/mwf2.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/mwf2.mp3',

      created: '2022-05-09T23:31:01.892Z',
      updated: '2022-05-09T23:31:01.892Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14fe',
      slug: 'AMERICANA_NOSTALGIA',
      name: 'AMERICANA NOSTALGIA',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/amer_nos.png',
      date: '05/15/20',
      number: '102',
      description: 'Look back enough',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/amer_nos.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/amer_nos.mp3',

      created: '2022-05-09T23:31:01.892Z',
      updated: '2022-05-09T23:31:01.892Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14fd',
      slug: 'PSYCHEDELIC_INTENT',
      name: 'PSYCHEDELIC INTENT',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/psych.png',
      date: '05/22/20',
      number: '103',
      description: 'psych',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/psych.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/psych.mp3',

      created: '2022-05-09T23:31:01.891Z',
      updated: '2022-05-09T23:31:01.891Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14fc',
      slug: 'SINGALONG',
      name: 'SINGALONG',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/singalong.png',
      date: '05/29/20',
      number: '104',
      description: 'Sing Sing Sing',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/singalong.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/singalong.mp3',

      created: '2022-05-09T23:31:01.891Z',
      updated: '2022-05-09T23:31:01.891Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14fb',
      slug: 'RFK',
      name: 'RFK',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/rfk.png',
      date: '06/05/20',
      number: '105',
      description: 'RFK Remember',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/rfk.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/rfk.mp3',

      created: '2022-05-09T23:31:01.891Z',
      updated: '2022-05-09T23:31:01.891Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14fa',
      slug: 'MODS_v_ROCKERS',
      name: 'MODS v ROCKERS',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/mods.png',
      date: '06/19/20',
      number: '106',
      description: 'Lovely beach day',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/mvr.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/mvr.mp3',

      created: '2022-05-09T23:31:01.891Z',
      updated: '2022-05-09T23:31:01.891Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14f9',
      slug: 'LFC',
      name: 'LFC',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/LFC.png',
      date: '06/26/20',
      number: '107',
      description: 'Walk On',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/LFC.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/LFC.mp3',

      created: '2022-05-09T23:31:01.891Z',
      updated: '2022-05-09T23:31:01.891Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14f8',
      slug: 'DANCE',
      name: 'DANCE',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/dance.PNG',
      date: '07/03/20',
      number: '108',
      description: "That's what we do.",
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/dance.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/dance.mp3',

      created: '2022-05-09T23:31:01.890Z',
      updated: '2022-05-09T23:31:01.890Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14f7',
      slug: 'FRISCO',
      name: 'FRISCO',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/sf.png',
      date: '07/10/20',
      number: '109',
      description: "Don't you ever....",
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/sf.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/sf.mp3',

      created: '2022-05-09T23:31:01.890Z',
      updated: '2022-05-09T23:31:01.890Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14f6',
      slug: 'SUMMER',
      name: 'SUMMER',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/summer.png',
      date: '07/17/20',
      number: '110',
      description: 'Summer',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/summer.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/summer.mp3',

      created: '2022-05-09T23:31:01.890Z',
      updated: '2022-05-09T23:31:01.890Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14f5',
      slug: 'MIX',
      name: 'MIX',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/415fm.png',
      date: '07/24/20',
      number: '111',
      description: 'Ends Rather Abruptly',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/mix.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/mix.mp3',

      created: '2022-05-09T23:31:01.890Z',
      updated: '2022-05-09T23:31:01.890Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14f4',
      slug: 'SUNRISE',
      name: 'SUNRISE',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/venus_small.png',
      date: '07/31/20',
      number: '112',
      description: 'Happens Everyday',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/start.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/start.mp3',

      created: '2022-05-09T23:31:01.890Z',
      updated: '2022-05-09T23:31:01.890Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14f3',
      slug: 'STORMY',
      name: 'STORMY',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/swirl.png',
      date: '08/07/20',
      number: '113',
      description: 'Lost in Space- Audio commences at 48sec',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/stormy.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/stormy.mp3',

      created: '2022-05-09T23:31:01.890Z',
      updated: '2022-05-09T23:31:01.890Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14f2',
      slug: 'COM',
      name: 'COM',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/common_small.png',
      date: '08/14/20',
      number: '114',
      description: 'Dot your eyes',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/com.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/com.mp3',

      created: '2022-05-09T23:31:01.889Z',
      updated: '2022-05-09T23:31:01.889Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14f1',
      slug: 'FIRES',
      name: 'FIRES',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/fires_small.png',
      date: '08/21/20',
      number: '115',
      description: 'Started then stopped',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/fires.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/fires.mp3',

      created: '2022-05-09T23:31:01.889Z',
      updated: '2022-05-09T23:31:01.889Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14f0',
      slug: 'SUM_OF',
      name: 'SUM OF',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/sumof_small.png',
      date: '08/28/20',
      number: '116',
      description: 'Sum of some of them',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/sumof.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/sumof.mp3',

      created: '2022-05-09T23:31:01.889Z',
      updated: '2022-05-09T23:31:01.889Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14ef',
      name: 'ORANGE',
      slug: 'ORANGE',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/orange_small.png',
      date: '09/11/20',
      number: '117',
      description: 'When the sky was orange',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/orange.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/orange.mp3',

      created: '2022-05-09T23:31:01.889Z',
      updated: '2022-05-09T23:31:01.889Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14ee',
      slug: 'JIMI',
      name: 'JIMI',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/para_small.png',
      date: '09/18/20',
      number: '118',
      description: '50 Years to the day',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/para.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/para.mp3',

      created: '2022-05-09T23:31:01.889Z',
      updated: '2022-05-09T23:31:01.889Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14ed',
      slug: 'COOL',
      name: 'COOL',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/cool_small.png',
      date: '09/25/20',
      number: '119',
      description: 'Just Cool',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/cool.mp3',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/cool.mp3',

      created: '2022-05-09T23:31:01.888Z',
      updated: '2022-05-09T23:31:01.888Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14ec',
      slug: 'SKY',
      name: 'SKY',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/sky.png',
      date: '10/02/2021',
      number: '120',
      description: 'Look up!',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/sky.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/sky.mp3',

      created: '2022-05-09T23:31:01.888Z',
      updated: '2022-05-09T23:31:01.888Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14eb',
      slug: 'SOMEWHERE',
      name: 'SOMEWHERE',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/somewhere.png',
      date: '10/09/20',
      number: '121',
      description: 'Somewhere on the internet',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/somewhere.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/somewhere.mp3',

      created: '2022-05-09T23:31:01.888Z',
      updated: '2022-05-09T23:31:01.888Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14ea',
      slug: 'HOT',
      name: 'HOT',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/hot.png',
      date: '10/16/20',
      number: '122',
      description: 'Hot',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/hot.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/hot.mp3',

      created: '2022-05-09T23:31:01.866Z',
      updated: '2022-05-09T23:31:01.866Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14e9',
      slug: 'SEVEN',
      name: 'SEVEN',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/seven.png',
      date: '10/16/20',
      number: '123',
      description: 'Coup attempt to dance',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/seven.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/seven.mp3',

      created: '2022-05-09T23:31:01.866Z',
      updated: '2022-05-09T23:31:01.866Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14e8',
      slug: 'LOADED',
      name: 'LOADED',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/rls.png',
      date: '10/30/20',
      number: '124',
      description: 'I want to do that...',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/loaded.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/loaded.mp3',

      created: '2022-05-09T23:31:01.865Z',
      updated: '2022-05-09T23:31:01.865Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14e7',
      slug: 'PEOPLE',
      name: 'PEOPLE',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/people.png',
      date: '11/06/20',
      number: '125',
      description: 'Voices and sounds ',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/peeps.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/peeps.mp3',

      created: '2022-05-09T23:31:01.865Z',
      updated: '2022-05-09T23:31:01.865Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14e6',
      slug: 'CONDOR',
      name: 'CONDOR',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/condor.png',
      date: '11/13/20',
      number: '126',
      description: 'All manner of deception',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/condor_step.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/condor_step.mp3',

      created: '2022-05-09T23:31:01.865Z',
      updated: '2022-05-09T23:31:01.865Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14e5',
      slug: 'KRAKEN',
      name: 'KRAKEN',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/kraken.png',
      date: '11/20/20',
      number: '127',
      description: 'It shall be released',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/kraken.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/kraken.mp3',

      created: '2022-05-09T23:31:01.865Z',
      updated: '2022-05-09T23:31:01.865Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14e4',
      slug: 'TICK TOCK',
      name: 'TICK TOCK',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/tick_tock.png',
      date: '11/27/20',
      number: '128',
      description: 'Getting kinda late....',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/tick_tock.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/tick_tock.mp3',

      created: '2022-05-09T23:31:01.864Z',
      updated: '2022-05-09T23:31:01.864Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14e3',
      slug: 'SHOES',
      name: 'SHOES',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/shoes.png',
      date: '12/04/20',
      number: '129',
      description: 'Do not want to be in them',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/shoes.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/shoes.mp3',

      created: '2022-05-09T23:31:01.864Z',
      updated: '2022-05-09T23:31:01.864Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14e2',
      slug: 'TESTING',
      name: 'TESTING',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/testing.png',
      date: '12/11/20',
      number: '130',
      description: 'sSit down and do your best',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/testing.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/testing.mp3',

      created: '2022-05-09T23:31:01.864Z',
      updated: '2022-05-09T23:31:01.864Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14e1',
      slug: 'BLUE',
      name: 'BLUE',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/blue.png',
      date: '12/18/20',
      number: '131',
      description: 'which color is this?',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/blue.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/blue.mp3',

      created: '2022-05-09T23:31:01.864Z',
      updated: '2022-05-09T23:31:01.864Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14e0',
      slug: 'DELAWARE',
      name: 'DELAWARE',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/delaware.png',
      date: '12/25/21',
      number: '132',
      description: 'cross it',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/delaware.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/delaware.mp3',

      created: '2022-05-09T23:31:01.863Z',
      updated: '2022-05-09T23:31:01.863Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14df',
      slug: 'FIRST',
      name: 'FIRST',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/first.png',
      date: '01/01/21',
      number: '133',
      description: 'what?',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/first.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/first.mp3',

      created: '2022-05-09T23:31:01.863Z',
      updated: '2022-05-09T23:31:01.863Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14de',
      slug: 'FORT',
      name: 'FORT',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/fort.png',
      date: '01/08/21',
      number: '134',
      description: 'yes',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/fort.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/fort.mp3',

      created: '2022-05-09T23:31:01.863Z',
      updated: '2022-05-09T23:31:01.863Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14dd',
      slug: 'FEMA',
      name: 'FEMA',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/fema.png',
      date: '01/15/21',
      number: '135',
      description: 'Italy',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/fema.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/fema.mp3',

      created: '2022-05-09T23:31:01.862Z',
      updated: '2022-05-09T23:31:01.862Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14dc',
      slug: 'FOCUS',
      name: 'FOCUS',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/focus.png',
      date: '01/22/21',
      number: '136',
      description: 'tunes',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/focus.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/focus.mp3',

      created: '2022-05-09T23:31:01.862Z',
      updated: '2022-05-09T23:31:01.862Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14db',
      slug: 'UNFINISHED',
      name: 'UNFINISHED',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/unfinished.png',
      date: '01/29/21',
      number: '137',
      description: 'more tunes',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/unfinished.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/unfinished.mp3',

      created: '2022-05-09T23:31:01.862Z',
      updated: '2022-05-09T23:31:01.862Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14da',
      slug: 'STARE',
      name: 'STARE',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/stare.png',
      date: '02/05/21',
      number: '138',
      description: 'wow ',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/stare.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/stare.mp3',

      created: '2022-05-09T23:31:01.862Z',
      updated: '2022-05-09T23:31:01.862Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14d9',
      slug: 'THE_END_Of',
      name: 'THE END OF',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/endof.png',
      date: '02/12/21',
      number: '139',
      description: 'more tunes',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/theendof.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/theendof.mp3',

      created: '2022-05-09T23:31:01.861Z',
      updated: '2022-05-09T23:31:01.861Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14d8',
      slug: 'MASK',
      name: 'MASK',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/mask.png',
      date: '02/19/21',
      number: '140',
      description: 'If I am wearing one,should I wear two?',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/mask.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/mask.mp3',

      created: '2022-05-09T23:31:01.861Z',
      updated: '2022-05-09T23:31:01.861Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14d7',
      slug: 'HOPE',
      name: 'HOPE',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/hope.png',
      date: '02/26/21',
      number: '141',
      description: 'Hope the Change',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/hope.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/hope.mp3',

      created: '2022-05-09T23:31:01.861Z',
      updated: '2022-05-09T23:31:01.861Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14d6',
      slug: 'SILKY',
      name: 'SILKY',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/silky.png',
      date: '03/05/21',
      number: '142',
      description: 'Smooth comes to mind',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/silky.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/silky.mp3',

      created: '2022-05-09T23:31:01.861Z',
      updated: '2022-05-09T23:31:01.861Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14d5',
      slug: 'FREE',
      name: 'FREE',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/free.png',
      date: '03/12/21',
      number: '143',
      description: 'Free at last',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/free.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/free.mp3',

      created: '2022-05-09T23:31:01.860Z',
      updated: '2022-05-09T23:31:01.860Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14d4',
      slug: 'RELENTLESS',
      name: 'RELENTLESS',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/relentless.png',
      date: '03/19/21',
      number: '144',
      description: 'Keep at it.',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/relentless.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/relentless.mp3',

      created: '2022-05-09T23:31:01.860Z',
      updated: '2022-05-09T23:31:01.860Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14d3',
      slug: 'GIVEN',
      name: 'GIVEN',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/given.png',
      date: '03/26/21',
      number: '145',
      description: 'If it is going in, might as well be snumbereways',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/given.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/given.mp3',

      created: '2022-05-09T23:31:01.860Z',
      updated: '2022-05-09T23:31:01.860Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14d2',
      name: 'YUMA',
      slug: 'YUMA',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/yuma.png',
      date: '04/02/21',
      number: '146',
      description: 'who needs a description',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/yuma.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/yuma.mp3',

      created: '2022-05-09T23:31:01.846Z',
      updated: '2022-05-09T23:31:01.846Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14d1',
      slug: 'SILENCE',
      name: 'SILENCE',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/silence.png',
      date: '04/09/21',
      number: '147',
      description: 'Golden',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/silence.mp4',
      mp3: 'https://milkywayfiasco.com/mp3/silence.mp3',

      created: '2022-05-09T23:31:01.846Z',
      updated: '2022-05-09T23:31:01.846Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14d0',
      slug: 'FAMILIAR',
      name: 'FAMILIAR',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/familiar.png',
      date: '04/16/21',
      number: '148',
      description: 'faces all around',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/familiar.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/familiar.mp3',

      created: '2022-05-09T23:31:01.846Z',
      updated: '2022-05-09T23:31:01.846Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14cf',
      slug: 'COUNT',
      name: 'COUNT',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/count.png',
      date: '04/23/21',
      number: '149',
      description: 'your blessings',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/count.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/count.mp3',

      created: '2022-05-09T23:31:01.845Z',
      updated: '2022-05-09T23:31:01.845Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14ce',
      slug: 'STILL',
      name: 'STILL',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/still.png',
      date: '04/30/21',
      number: '150',
      description: 'stephen',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/still.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/still.mp3',

      created: '2022-05-09T23:31:01.845Z',
      updated: '2022-05-09T23:31:01.845Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14cd',
      slug: 'TIME',
      name: 'TIME',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/time.png',
      date: '05/07/21',
      number: '151',
      description: 'who side it on',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/time.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/time.mp3',

      created: '2022-05-09T23:31:01.845Z',
      updated: '2022-05-09T23:31:01.845Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14cc',
      slug: 'CRYPTO',
      name: 'CRYPTO',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/crypto.png',
      date: '05/14/21',
      number: '152',
      description: 'change',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/crypto.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/crypto.mp3',

      created: '2022-05-09T23:31:01.845Z',
      updated: '2022-05-09T23:31:01.845Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14cb',
      slug: 'INSIDE',
      name: 'INSIDE',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/inside.png',
      date: '05/21/21',
      number: '153',
      description: 'If it is going in, might as well be sideways',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/inside.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/inside.mp3',

      created: '2022-05-09T23:31:01.844Z',
      updated: '2022-05-09T23:31:01.844Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14ca',
      slug: '25',
      name: '25',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/25.png',
      date: '05/28/21',
      number: '154',
      description: 'which way',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/25.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/25.mp3',

      created: '2022-05-09T23:31:01.844Z',
      updated: '2022-05-09T23:31:01.844Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14c9',
      slug: 'UP',
      name: 'UP',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/up.png',
      date: '06/04/21',
      number: '155',
      description: 'Nobody escapes this',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/up.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/up.mp3',

      created: '2022-05-09T23:31:01.844Z',
      updated: '2022-05-09T23:31:01.844Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14c8',
      number: '156',
      slug: 'DETAIL',
      name: 'DETAIL',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/detail.png',
      date: '06/11/21',
      description: 'Right in front of you',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/detail.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/detail.mp3',

      created: '2022-05-09T23:31:01.843Z',
      updated: '2022-05-09T23:31:01.843Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14c7',
      number: '157',
      slug: 'CATCH',
      name: 'CATCH',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/catch.png',
      date: '06/18/21',
      description: 'He shoots he scores',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/catch.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/catch.mp3',

      created: '2022-05-09T23:31:01.843Z',
      updated: '2022-05-09T23:31:01.843Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14c6',
      number: '158',
      slug: 'RESULT',
      name: 'RESULT',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/result.png',
      date: '06/25/21',
      description: 'They are in',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/result.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/result.mp3',

      created: '2022-05-09T23:31:01.843Z',
      updated: '2022-05-09T23:31:01.843Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14c5',
      number: '159',
      slug: 'FOLD',
      name: 'FOLD',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/fold.png',
      date: '07/02/21',
      description: 'You gotta know',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/fold.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/fold.mp3',

      created: '2022-05-09T23:31:01.843Z',
      updated: '2022-05-09T23:31:01.843Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14c4',
      number: '160',
      slug: 'BRIDGE',
      name: 'BRIDGE',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/bridge.png',
      date: '07/09/21',
      description: 'i love my mum',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/bridge.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/bridge.mp3',

      created: '2022-05-09T23:31:01.842Z',
      updated: '2022-05-09T23:57:07.248Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14c3',
      number: '161',
      slug: 'TANGENT',
      name: 'TANGENT',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/tangent.png',
      date: '07/16/21',
      description: 'Keep yourself in-between',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/tangent.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/tangent.mp3',

      created: '2022-05-09T23:31:01.842Z',
      updated: '2022-05-09T23:31:01.842Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14c2',
      number: '162',
      slug: 'KEEP',
      name: 'KEEP',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/keep.png',
      date: '07/23/21',
      description: 'If you hold on, you will still have it',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/keep.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/keep.mp3',

      created: '2022-05-09T23:31:01.842Z',
      updated: '2022-05-09T23:31:01.842Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14c1',
      number: '163',
      slug: 'RETURN',
      name: 'RETURN',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/return.png',
      date: '08/20/21',
      description: 'Get over it',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/return.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/return.mp3',

      created: '2022-05-09T23:31:01.841Z',
      updated: '2022-05-09T23:31:01.841Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14c0',
      number: '164',
      slug: 'PITCH',
      name: 'PITCH',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/pitch.png',
      date: '08/27/21',
      description: 'Running everywhere',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/pitch.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/pitch.mp3',

      created: '2022-05-09T23:31:01.841Z',
      updated: '2022-05-09T23:31:01.841Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14bf',
      number: '165',
      slug: 'BUILD',
      name: 'BUILD',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/build.png',
      date: '09/03/21',
      description: 'it will reach the top',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/build.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/build.mp3',

      created: '2022-05-09T23:31:01.841Z',
      updated: '2022-05-09T23:31:01.841Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14be',
      number: '166',
      slug: 'CLEAR',
      name: 'CLEAR',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/clear.png',
      date: '09/10/21',
      description: 'afterwards',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/clear.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/clear.mp3',

      created: '2022-05-09T23:31:01.841Z',
      updated: '2022-05-09T23:31:01.841Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14bd',
      number: '167',
      slug: 'PICTURE',
      name: 'PICTURE',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/picture.png',
      date: '09/17/21',
      description: 'Featuring your most favourite word of all',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/picture.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/picture.mp3',

      created: '2022-05-09T23:31:01.840Z',
      updated: '2022-05-09T23:31:01.840Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14bc',
      number: '168',
      slug: 'HELP',
      name: 'HELP',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/help.png',
      date: '09/24/21',
      description: 'A hand is always welcome',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/help.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/help.mp3',

      created: '2022-05-09T23:31:01.840Z',
      updated: '2022-05-09T23:31:01.840Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14bb',
      number: '169',
      slug: 'ASSOCIATION',
      name: 'ASSOCIATION',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/association.png',
      date: '10/01/21',
      description: 'Your choice if you have one which you do',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/association.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/association.mp3',

      created: '2022-05-09T23:31:01.840Z',
      updated: '2022-05-09T23:31:01.840Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14ba',
      number: '170',
      slug: 'MASSIVE',
      name: 'MASSIVE',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/massive.png',
      date: '10/08/21',
      description: 'North Beach',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/massive.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/massive.mp3',

      created: '2022-05-09T23:31:01.840Z',
      updated: '2022-05-09T23:31:01.840Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14b9',
      number: '171',
      slug: 'CENTER',
      name: 'CENTER',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/center.png',
      date: '10/15/21',
      description: 'left of right',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/center.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/center.mp3',

      created: '2022-05-09T23:31:01.839Z',
      updated: '2022-05-09T23:31:01.839Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14b8',
      number: '172',
      slug: 'LIMIT',
      name: 'LIMIT',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/limit.png',
      date: '10/22/21',
      description: 'HODL',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/limit.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/limit.mp3',

      created: '2022-05-09T23:31:01.839Z',
      updated: '2022-05-09T23:31:01.839Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14b7',
      number: '173',
      slug: 'OPEN',
      name: 'OPEN',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/open.png',
      date: '10/29/21',
      description: 'whether you like it or not',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/open.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/open.mp3',

      created: '2022-05-09T23:31:01.839Z',
      updated: '2022-05-09T23:31:01.839Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14b6',
      number: '174',
      slug: 'SIGNAL',
      name: 'SIGNAL',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/signal.png',
      date: '11/05/21',
      description: 'no noise',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/signal.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/signal.mp3',

      created: '2022-05-09T23:31:01.839Z',
      updated: '2022-05-09T23:31:01.839Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14b5',
      number: '175',
      slug: 'POST',
      name: 'POST',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/post.png',
      date: '11/12/21',
      description: 'afterwards',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/post.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/post.mp3',

      created: '2022-05-09T23:31:01.838Z',
      updated: '2022-05-09T23:31:01.838Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14b4',
      number: '176',
      slug: 'VERDICT',
      name: 'VERDICT',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/verdict.png',
      date: '11/19/21',
      description: 'the jury is in',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/verdict.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/verdict.mp3',

      created: '2022-05-09T23:31:01.838Z',
      updated: '2022-05-09T23:31:01.838Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14b3',
      number: '177',
      slug: 'TRIP',
      name: 'TRIP',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/trip.png',
      date: '11/26/21',
      description: 'small steps',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/trip.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/trip.mp3',

      created: '2022-05-09T23:31:01.838Z',
      updated: '2022-05-09T23:31:01.838Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14b2',
      number: '178',
      slug: 'TINT',
      name: 'TINT',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/tint.png',
      date: '12/03/21',
      description: 'winter wool',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/tint.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/tint.mp3',

      created: '2022-05-09T23:31:01.838Z',
      updated: '2022-05-09T23:31:01.838Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14b1',
      number: '179',
      slug: 'INCLUDED',
      name: 'INCLUDED',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/included.png',
      date: '12/10/21',
      description: 'best join them',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/included.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/included.mp3',

      created: '2022-05-09T23:31:01.837Z',
      updated: '2022-05-09T23:31:01.837Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14b0',
      number: '180',
      slug: 'ROUTE',
      name: 'ROUTE',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/route.png',
      date: '12/17/21',
      description: 'which way is it',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/route.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/route.mp3',

      created: '2022-05-09T23:31:01.837Z',
      updated: '2022-05-09T23:31:01.837Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14af',
      number: '181',
      slug: 'WORK',
      name: 'WORK',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/work.png',
      date: '12/24/21',
      description: 'a lot of',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/work.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/work.mp3',

      created: '2022-05-09T23:31:01.837Z',
      updated: '2022-05-09T23:31:01.837Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14ae',
      number: '182',
      slug: 'STAND',
      name: 'STAND',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/stand.png',
      date: '12/31/21',
      description: 'look around take one',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/stand.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/stand.mp3',

      created: '2022-05-09T23:31:01.837Z',
      updated: '2022-05-09T23:31:01.837Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14ad',
      number: '183',
      slug: 'TRAFFIC',
      name: 'TRAFFIC',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/traffic.png',
      date: '01/07/22',
      description: 'ever increasing',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/traffic.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/traffic.mp3',

      created: '2022-05-09T23:31:01.836Z',
      updated: '2022-05-09T23:31:01.836Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14ac',
      number: '184',
      slug: 'SPARK',
      name: 'SPARK',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/spark.png',
      date: '01/14/22',
      description: 'smoke on the water',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/spark.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/spark.mp3',

      created: '2022-05-09T23:31:01.836Z',
      updated: '2022-05-09T23:31:01.836Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14ab',
      number: '185',
      slug: 'ORDER',
      name: 'ORDER',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/order.png',
      date: '01/21/22',
      description: 'left right left right',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/order.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/order.mp3',

      created: '2022-05-09T23:31:01.836Z',
      updated: '2022-05-09T23:31:01.836Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14aa',
      number: '186',
      slug: 'FACTUAL',
      name: 'FACTUAL',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/factual.png',
      date: '01/28/22',
      description: 'bright light',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/factual.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/factual.mp3',

      created: '2022-05-09T23:31:01.836Z',
      updated: '2022-05-09T23:31:01.836Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14a9',
      number: '187',
      slug: 'DISTANCE',
      name: 'DISTANCE',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/distance.png',
      date: '02/04/22',
      description: 'mnumberdle of the road',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/distance.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/distance.mp3',

      created: '2022-05-09T23:31:01.835Z',
      updated: '2022-05-09T23:31:01.835Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14a8',
      number: '188',
      slug: 'BOX',
      name: 'BOX',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/box.png',
      date: '02/11/22',
      description: 'all corners pointing',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/box.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/box.mp3',

      created: '2022-05-09T23:31:01.835Z',
      updated: '2022-05-09T23:31:01.835Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14a7',
      number: '189',
      slug: 'WHY',
      name: 'WHY',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/why.png',
      date: '02/18/22',
      description: 'all corners pointing',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/whyohwhy.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/why.mp3',

      created: '2022-05-09T23:31:01.835Z',
      updated: '2022-05-09T23:31:01.835Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14a6',
      number: '190',
      slug: 'SAND',
      name: 'SAND',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/sand.png',
      date: '02/25/22',
      description: 'chop em up',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/sand.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/sand.mp3',

      created: '2022-05-09T23:31:01.835Z',
      updated: '2022-05-09T23:31:01.835Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14a5',
      number: '191',
      slug: 'TODAY',
      name: 'TODAY',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/today.png',
      date: '03/04/22',
      description: 'the day of days',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/today.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/today.mp3',

      created: '2022-05-09T23:31:01.834Z',
      updated: '2022-05-09T23:31:01.834Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14a4',
      number: '192',
      slug: 'HOME',
      name: 'HOME',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/home.png',
      date: '03/11/22',
      description: 'on my way',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/home.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/home.mp3',

      created: '2022-05-09T23:31:01.834Z',
      updated: '2022-05-09T23:31:01.834Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14a3',
      number: '193',
      slug: 'FLOWER',
      name: 'FLOWER',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/flower.png',
      date: '03/18/22',
      description: 'Bonnie bonnie',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/flower.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/flower.mp3',

      created: '2022-05-09T23:31:01.834Z',
      updated: '2022-05-09T23:31:01.834Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14a2',
      number: '194',
      slug: 'WHITE',
      name: 'WHITE',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/white.png',
      date: '03/25/22',
      description: 'mum',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/white.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/white.mp3',

      created: '2022-05-09T23:31:01.834Z',
      updated: '2022-05-09T23:31:01.834Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14a1',
      number: '195',
      slug: 'GROUND',
      name: 'GROUND',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/ground.png',
      date: '04/01/22',
      description: 'floor flat',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/ground.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/ground.mp3',

      created: '2022-05-09T23:31:01.833Z',
      updated: '2022-05-09T23:31:01.833Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c14a0',
      number: '196',
      slug: 'HAIR',
      name: 'HAIR',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/hair.png',
      date: '04/22/22',
      description: 'if you are going',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/hair.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/hair.mp3',

      created: '2022-05-09T23:31:01.827Z',
      updated: '2022-05-09T23:31:01.827Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c149f',
      number: '197',
      slug: 'SWEET',
      name: 'SWEET',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/sweet.png',
      date: '04/29/22',
      description: 'sometimes sour',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/sweet.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/sweet.mp3',

      created: '2022-05-09T23:31:01.826Z',
      updated: '2022-05-09T23:31:01.826Z',
    },
    {
      _id_old: '6279a435cce4316bbd3c149e',
      number: '198',
      slug: 'CENT',
      name: 'CENT',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/cent.png',
      date: '05/06/22',
      description: 'keep going',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/cent.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/cent.mp3',

      created: '2022-05-09T23:31:01.825Z',
      updated: '2022-05-09T23:31:01.825Z',
    },
  ],
};

export default data;
