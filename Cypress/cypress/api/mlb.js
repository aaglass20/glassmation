export class MLBAPI {

    getPlayerName() {
        cy.request({
            method: 'GET',
            url: Cypress.env('MLB_BASE_URL') + '/json/named.search_player_all.bam?active_sw=%27Y%27&name_part=%27Lindor%25%27',
            headers: {},
            form: true,
            body: {}
        }).then((response) => {
            expect(response.status).to.eq(200)
            let results = JSON.parse(JSON.stringify(response.body)).search_player_all.queryResults.row
            cy.log(JSON.parse(JSON.stringify(response.body)).search_player_all.queryResults.row.team_full)
            cy.log(results.team_full)
            cy.log(results.name_display_first_last)
            let name = results.name_display_first_last
            let team = results.team_full
            let playerId = results.player_id
            cy.log(JSON.stringify(response.body))
            cy.wrap(name).as('name')
            cy.wrap(team).as('team')
            cy.wrap(playerId).as('playId')
            beforeEach(function () {
                cy.log('Global Variable')
                cy.wrap(name).as('name')
                cy.wrap(team).as('team')
                cy.wrap(playerId).as('playerId')
            })
        })
    }

    teamsPlayerHasPlayedOn() {

        cy.get('@playerId').then(playerId => {
            cy.request({
                method: 'GET',
                url: Cypress.env('MLB_BASE_URL') + '/json/named.player_teams.bam?season=\'2014\'&player_id=' + playerId,
                headers: {},
                form: true,
                body: {}
            }).then((response) => {
                expect(response.status).to.eq(200)
                // let results = JSON.parse(JSON.stringify(response.body)).search_player_all.queryResults.row
                // cy.log(JSON.parse(JSON.stringify(response.body)).search_player_all.queryResults.row.team_full)
                // cy.log(results.team_full)
                // cy.log(results.name_display_first_last)
                // let name = results.name_display_first_last
                // let team = results.team_full
                // let playerId = results.player_id
                cy.log(JSON.stringify(response.body))

            })
        })
    }
}