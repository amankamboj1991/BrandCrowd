import TemplateSearchPage from "../../Pages/TemplateSearchPage";

const templateSearchPage = new TemplateSearchPage();

describe("Top navigation bar", () => {

  it("Verify Page heading", () => {      
      templateSearchPage.openUrl()
      templateSearchPage.pageHeading()
  });
 
  it("Verify Upgrade Account", () => {     
    templateSearchPage.openUrl() 
    templateSearchPage.clickAndVerifyUpgradeAccount()    
  });

});

describe("Left Panel", () => {
  
  it("Verify Category clickable & Instagram only templates are displayed", () => {     
    templateSearchPage.openUrl()     
    templateSearchPage.clickCategory();    
    //This scenario can be extended to:
    //- reclick category & check Instagram.
    // Assert only Instagram templates are displayed
  });

});