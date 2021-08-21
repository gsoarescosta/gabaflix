let games_list = require('./lists/games.json');
let socials_list = require('./lists/socials.json');

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'socials',
                title: 'Redes Sociais',
                items: socials_list
            },
            {
                slug: 'games',
                title: 'Jogos em Live',
                items: games_list
            }
        ]
    }
}

/*
- jogos
    - cs:go
    - rocket league
    - ragnarok (novaRO)
    - grand chase
    - fifa
    - nba2k ?
    - tribes of midgard
    - fall guys
    - overwatch ?
    - valorant ?
    - genshin impact ?
*/