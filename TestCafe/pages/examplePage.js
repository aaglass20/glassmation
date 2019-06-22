import {Selector, t} from 'testcafe';

export default class examplePage {
    constructor() {
        this.youName = Selector('[id="developer-name"]');
        this.populateButton = Selector('#populate');
        this.remoteTesting = Selector('#remote-testing')
        this.reusingJsCode = Selector('#reusing-js-code')
        this.backgroundParallelTesting = Selector('#background-parallel-testing')
        this.continuousIntegrationEmbedding = Selector('#continuous-integration-embedding')
        this.trafficMarkupAnalysis = Selector('#traffic-markup-analysis')
        this.triedTestCafe = Selector('#tried-test-cafe')
        this.windows = Selector('#windows')
        this.macOs = Selector('#macos')
        this.linux = Selector('#linux')
        this.submitButton = Selector('#submit-button')
        this.preferredInterface = Selector('#preferred-interface');
        this.comments = Selector('#comments')
        this.selectPreferredInterface = this.preferredInterface.find('option');
        this.slider = Selector('#slider');
        this.sliderHandle = Selector('span[class="ui-slider-handle ui-corner-all ui-state-default"]')
    }

    async selectInterface(selection) {
        await t
            .click(this.preferredInterface)
            .click(this.selectPreferredInterface.withText(selection))
    }
}

