/*
- redes sociais
    - twitch
    - twitter
    - spotify
    - linkedin
    - youtube
    - github
    - steam
    - origin
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
/*
- jogos
    - name
    - img
*/
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'socials',
                title: 'Redes Sociais',
                items: []
            },
            {
                slug: 'games',
                title: 'Jogos em Live',
                items: []
            }
        ]
    }
}