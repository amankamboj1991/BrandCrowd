export default class TemplateSearchPage{

    webLocators = {
        searchField: '#searchTerm',
        heading: '.tw-font-bold.tw-text-4xl.tw-mb-4.tw-text-grayscale-800',
        categoryButton: '(//div[@class=\'tw-flex tw-py-2 tw-items-center tw-cursor-pointer\'])[1]',        
        upgradeAccountButton: '.tw-hidden.md\\:tw-block.tw-mr-6.tw-my-auto a[href*="upgrade-account"]'
    }

        openUrl(){
        cy.visit(Cypress.env('URL'))
        }

        pageHeading(){
        cy.get(this.webLocators.heading).should('contain', 'Tech Challenge Templates');
        }
        
        clickCategory(){            
            cy.xpath(this.webLocators.categoryButton).click()                       
        }
        
        clickAndVerifyUpgradeAccount(){
          cy.get(this.webLocators.upgradeAccountButton).click() 
          cy.title().should('eq', 'Checkout | BrandCrowd')         
        }
        
}