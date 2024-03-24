export default class HomePage{

    webLocators = {
        myAccount: '.tw-mr-0.tw-text-white',        
    }

    openUrl(){
    cy.visit(Cypress.env('HOMEPAGEURL'))
    }

    verifyPageTitle(){
    cy.title().should('eq', 'Make Logos, Business Cards, Social Designs and More | BrandCrowd');
    }

    clickMyAccount(){
    cy.get(this.webLocators.myAccount).click()
    }

}