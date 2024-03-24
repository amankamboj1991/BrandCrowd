import TemplateSearchPage from "../../Pages/TemplateSearchPage";

const templateSearchPage = new TemplateSearchPage();

describe("Template Search Page tests", () => {
  
  it("Verify Page heading", () => {      
      templateSearchPage.openUrl()
      templateSearchPage.pageHeading()
  });

  it("Verify Category clickable", () => {     
    templateSearchPage.openUrl() 
    templateSearchPage.clickCategory()    
  });

});