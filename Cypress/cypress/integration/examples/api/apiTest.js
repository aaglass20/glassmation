import MLBAPI from "../../../api/mlb";

const playerInfo = ['P', 'Cleveland Indians', 'Shane Bieber', '57']

describe('API Test Examples', function () {

    it('Search by Player Last Name, validate Full Name', function () {
        MLBAPI.getPlayerName('Bieber', 'Shane Bieber')
    })

    it('Teams Player has Played On, by year, validate team', function () {
        MLBAPI.getPlayerName('Lindor', 'Francisco Lindor')
        MLBAPI.teamsPlayerHasPlayedOn('2016', "Indians")
    })

    it('Find by Player Last Name on Guardians 40 Man Roster, Validate Player Info', function () {
        MLBAPI.getByPlayerName40Roster(114, 'Bieber')
        MLBAPI.validatePlayerInfo(playerInfo)
    })

})