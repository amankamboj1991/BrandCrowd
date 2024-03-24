import HomePage from "../../Pages/HomePage";

const home = new HomePage();

describe("HomePage", () => {
  
    it("Verify page tile", () => {
    home.openUrl();
    home.verifyPageTitle()    
  });

});
