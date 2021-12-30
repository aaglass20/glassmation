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
            cy.log(JSON.parse(JSON.stringify(response.body)).search_player_all.queryResults.row.team_full)
            cy.log(results.team_full)
            cy.log(results.name_display_first_last)
            let name = results.name_display_first_last
            let team = results.team_full
            let playerId = results.player_id
            cy.log(JSON.stringify(response.body))
            cy.wrap(name).as('name')
            cy.wrap(team).as('team')
            cy.wrap(playerId).as('playerId')
        })
    }

    teamsPlayerHasPlayedOn() {
        cy.get('@playerId').then(playerId => {
            cy.request({
                method: 'GET',
                url: `${Cypress.env('MLB_BASE_URL')}/json/named.player_teams.bam?season=\'2014\'&player_id=${playerId}`,
                headers: {},
                form: true,
                body: {}
            }).then((response) => {
                expect(response.status).to.eq(200)
                cy.log(JSON.stringify(response.body))
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