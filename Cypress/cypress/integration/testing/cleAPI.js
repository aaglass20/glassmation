import {MLBAPI} from "../../api/mlb";

const mlbAPI = new MLBAPI()

describe('MLB API Test', function () {

    it('By Player Name', function () {
        mlbAPI.getPlayerName()
    })

    it('Teams Player has Played On', function () {
        mlbAPI.teamsPlayerHasPlayedOn()
    })
    
})