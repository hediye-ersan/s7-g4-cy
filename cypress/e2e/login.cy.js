
describe("A senaryosu testi", ()=>{
  it("Başarılı form doldurulduğunda submit edebiliyorum:", () => {
    cy.visit("http://localhost:5173/")
    cy.get('[data-cy="email"]').type("erdem.guntay@wit.com.tr")
    cy.get('[data-cy="password"]').type("9fxIH0GXesEwH_I ")
    cy.get('[data-cy="terms"]').check()
    cy.get('[data-cy="submit"]').click()
  })
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