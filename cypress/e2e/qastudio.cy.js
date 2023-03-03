describe('Тестирование qastudio', function () {
    
    it('Сайт qastudio', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();    
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Ольга');
        cy.get('#billing_last_name').type('Мачула');
        cy.get('#select2-billing_country-container').click();
        cy.get('.select2-search__field').click().type('Россия');
        cy.get('.elementor-section').click();
        cy.get('#billing_address_1').type('57, Комендантский');
        cy.get('#billing_city').type('Санкт-Петербург');
        cy.get('#billing_state').type('Санкт-Петербург');
        cy.get('#billing_postcode').type('190000');
        cy.get('#billing_phone').type('+79119382159');
        cy.get('#billing_email').type('ov.machula@mail.ru');
        cy.get('#place_order').click();

   })

     
})