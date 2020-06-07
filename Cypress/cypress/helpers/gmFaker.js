import faker from "faker";

export class GMFaker {
    constructor() {
        this.emailGM =  faker.random.number() + faker.internet.email(null, null, 'glassmation.automation')
        this.FullName = faker.name.findName()
    }

    ssEmail() {
        expect(this.emailGM).to.contain('glassmation.automation')
        return this.emailGM
    }

    gmFullName(){
            return this.FullName
    }

}