let games_list = require('./lists/games.json');
let socials_list = require('./lists/socials.json');

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'games',
        title: 'Categorias em Live',
        items: games_list
      },
      {
        slug: 'socials',
        title: 'Redes Sociais',
        items: socials_list
      }
    ]
  }
}