describe('Login Page', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
  })
});
it(' Başarılı form doldurulduğunda submit edebiliyorum:', () => {
  cy.get('input[name="email"]').type('valid@example.com'); // Geçerli bir email yaz
  cy.get('input[name="password"]').type('validPassword'); // Geçerli bir şifre yaz
  cy.get('input[name="terms"]').check(); // Kullanım şartlarını kabul et
  cy.get('button[type="submit"]').click(); // Gönder butonuna tıkla

  // Başarılı sayfaya yönlendirildiğini kontrol et
  cy.url().should('include', '/success'); // Başarılı sayfanın URL'sini kontrol et
});