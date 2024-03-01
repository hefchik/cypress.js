describe('Покупка аватара', function () {
    
    it('Успешная покупка автара', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('appeez855@yandex.ru');
        cy.get('#password').type('123Password');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1030');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Pupsen Vupsen');
        cy.get('.payment__info-button-v2').click();
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__font-for-success').should('be.visible');
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
        cy.get('.payment__adv').click();
        cy.get('.pokemon__title').contains('Магазин');
         })
})