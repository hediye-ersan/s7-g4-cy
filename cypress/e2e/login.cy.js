


  describe('Login Form Tests', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true);
    })
  });

  beforeEach(() => {
    cy.visit('http://localhost:5173/'); // Login sayfasına git
  });

  describe("Başarılı form doldurulduğunda submit edebiliyorum:" , ()=> {
    it("succes sayafasını açabiliyorum" , ()=> {
      cy.get('[data-cy="email-input"]').type("erdem.guntay@wit.com.tr")
      cy.get('[data-cy="password-input"]').type("9fxIH0GXesEwH_I")
      cy.get('[data-cy="terms-input"]').click()
      cy.get('[data-cy="submit"]').click
    });
    it("email yanlış girdim:", ()=> {
      cy.get('[data-cy="email-input"]').type("erdem.guntay@wit.com.tr")
      cy.get('[data-cy="error-mesage"]').should("have.length", 1)
      cy.get('[data-cy="error-mesage"]').contains("please enter")

    })
  })

  describe ("Basarılı testler:", ()=>{
    it("succes" , ()=> {
      cy.get('[data-cy="email-input"]').type("erdem.guntay@wit.com.tr")
      cy.get('[data-cy="password-input"]').type("9fxIH0GXesEwH_I")
      cy.get('[data-cy="terms-input"]').check()
      cy.get('[data-cy="submit"]').click
      cy.url().should("contain","/main")
    });
  })
  

 

/* Proje oluşturulacak

2. Cypress ile de 2 farklı senaryoda test yazılacak:

a) Başarılı form doldurulduğunda submit edebiliyorum:

success sayfasını açabiliyorum.
b) Hatalı durumlarda beklenen hata mesajları görünüyor ve buton disabled kalıyor.

email yanlış girdim:

ekranda 1 tane hata mesajı var
ekranda doğru hata mesajı var
buton disabled durumda
email ve password yanlış

ekranda 2 tane hata mesajı var
ekranda password hata mesajı var
email ve password doğru ama kuralları kabul etmedim.

buton disabled mı*/