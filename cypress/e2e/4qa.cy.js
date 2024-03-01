describe('Невалидный логин', function () {
    
    it('Вход с НЕвалидными логином и валидным паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('123test123@123.123');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

         })
})