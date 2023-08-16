describe('Тестирование формы логина и пароля', function () {
    it('Ввожу верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.wait(1000);
         cy.contains('Авторизация прошла успешно').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').click();
     })
     it('Проверяю логику восстановления пароля', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.wait(1000);
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
    }) 
    it('Ввожу существующий логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio10');
        cy.get('#loginButton').click();
        cy.wait(1000);
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
    })
    it('Ввожу несуществующий логин и верный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@olnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click(); 
        cy.wait(1000);
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
        })
    it('Ввожу несуществующий логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click(); 
        cy.wait(1000);
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        }) 
        it('Ввожу существующий логин с верхним регистром букв и верный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.wait(1000);
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
    })   
    })