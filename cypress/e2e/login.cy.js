describe('Форма логина и пароля', function () {

    it('Правильный логин, правилный пароль', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Авторизация прошла успешно').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       })

       it('Восстановление пароля', function () {
        cy.clearCookies();
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Правильный логин, неправилный пароль', function () {

        cy.clearCookies();
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio6');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

        it('Неправильный логин, правилный пароль', function () {

            cy.clearCookies();
            cy.reload();
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('german@olnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.contains('Такого логина или пароля нет').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            })
        
            it('Проверка валидации', function () {

                cy.clearCookies();
                cy.reload();
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('germanolnikov.ru');
                cy.get('#pass').type('iLoveqastudio1');
                cy.get('#loginButton').click();
                cy.contains('Нужно исправить проблему валидации').should('be.visible');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                })

                it('Проверка на привидение к строчным буквам в логине', function () {

                    cy.clearCookies();
                    cy.reload();
                    cy.visit('https://login.qa.studio/');
                    cy.get('#mail').type('GerMan@Dolnikov.ru');
                    cy.get('#pass').type('iLoveqastudio1');
                    cy.get('#loginButton').click();
                    cy.contains('Авторизация прошла успешно').should('be.visible');
                    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                    })
        

       
})