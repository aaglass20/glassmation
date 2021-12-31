export class MLBAPI {

    getPlayerName(searchName, fullName) {
        cy.request({
            method: 'GET',
            url: `${Cypress.env('MLB_BASE_URL')}/json/named.search_player_all.bam?active_sw=%27Y%27&name_part=%27${searchName}%25%27`,
            headers: {},
            form: true,
            body: {}
        }).then((response) => {
            expect(response.status).to.eq(200)
            let results = JSON.parse(JSON.stringify(response.body)).search_player_all.queryResults.row
            expect(results.name_display_first_last).to.include(fullName)
            cy.log(JSON.stringify(response.body))
            cy.wrap(results.name_display_first_last).as('name')
            cy.wrap(results.team_full).as('team')
            cy.wrap(results.player_id).as('playerId')
        })
    }

    teamsPlayerHasPlayedOn(year, team) {
        cy.get('@playerId').then(playerId => {
            cy.request({
                method: 'GET',
                url: `${Cypress.env('MLB_BASE_URL')}/json/named.player_teams.bam?season=\'${year}\'&player_id=${playerId}`,
                headers: {},
                form: true,
                body: {}
            }).then((response) => {
                expect(response.status).to.eq(200)
                cy.log(JSON.stringify(response.body))
                let results = JSON.parse(JSON.stringify(response.body)).player_teams.queryResults.row
                cy.log(results.org)
                expect(results.org).to.eq(team)
            })
        })
    }


    getByPlayerName40Roster(team_id, name) {
        cy.request({
            method: 'GET',
            url: `${Cypress.env('MLB_BASE_URL')}//json/named.roster_40.bam?team_id=${team_id}`,
            headers: {},
            form: true,
            body: {}
        }).then((response) => {
            expect(response.status).to.eq(200)
            const results = response.body.roster_40.queryResults.row
            const matchedName = results.find((playerInfo) => {
                return playerInfo.name_last === name;
            });
            cy.wrap(matchedName).as("playerInfo");
        })
    }

    validatePlayerInfo(playerData) {
        cy.get("@playerInfo").then((playerInfo) => {
            expect(playerInfo.position_txt).to.eq(playerData[0])
            expect(playerInfo.team_name).to.eq(playerData[1])
            expect(playerInfo.name_display_first_last).to.eq(playerData[2])
            expect(playerInfo.jersey_number).to.eq(playerData[3])
        })
    }

}

export default new MLBAPI();