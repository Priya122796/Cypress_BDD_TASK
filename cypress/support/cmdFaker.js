import { faker } from "@faker-js/faker";

Cypress.Commands.add("generateFakerData", function () {
    const generateData = () => {
        return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.person.lastName()+faker.internet.email({ firstName: 'Nifaanya', provider: 'qa.in', allowSpecialCharacters: true }),
    password: faker.internet.password(),
    }


}



let generatedData = generateData();
cy.writeFile("./cypress/fixtures/fakerdata.json", JSON.stringify(generatedData, null, "\t"));})