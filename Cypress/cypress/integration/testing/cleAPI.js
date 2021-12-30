import {MLBAPI} from "../../api/mlb";

const mlbAPI = new MLBAPI()
const playerInfo = ['P', 'Cleveland Indians', 'Shane Bieber', '57']

describe('MLB API Test', function () {

    it('By Player Name', function () {
        mlbAPI.getPlayerName('Bieber', 'Shane Bieber')
    })

    it('Teams Player has Played On', function () {
        mlbAPI.getPlayerName('Lindor', 'Francisco Lindor')
        mlbAPI.teamsPlayerHasPlayedOn()
    })

    it('Search Guardians 40 Man Roster by Player Name and Validate Player Info', function () {
        mlbAPI.getByPlayerName40Roster(114, 'Bieber')
        mlbAPI.validatePlayerInfo(playerInfo)
    })

})