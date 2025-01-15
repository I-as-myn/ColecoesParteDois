describe('Teste da Agenda de Contatos', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Deve adicionar um contato', () => {
        cy.get('input[placeholder="Nome"]').type('João Silva');
        cy.get('input[placeholder="E-mail"]').type('joaosilva@ebac.com.br');
        cy.get('input[placeholder="Telefone"]').type('01234567890');
        cy.get('button').contains('Adicionar').click();

        cy.contains('João Silva').should('be.visible');
        cy.contains('joaosilva@ebac.com.br').should('be.visible');
        cy.contains('01234567890').should('be.visible');
    })

    it('Deve editar um contato', () => {
        cy.get('input[placeholder="Nome"]').type('João Silva');
        cy.get('input[placeholder="E-mail"]').type('joaosilva@ebac.com.br');
        cy.get('input[placeholder="Telefone"]').type('01234567890');
        cy.get('button').contains('Adicionar').click();

        cy.contains('li', 'João Silva').closest('.contato').find('button.edit').click(); 
        cy.get('input[placeholder="Nome"]').clear().type('João Silva Editado');
        cy.get('input[placeholder="E-mail"').clear().type('joaoeditado@ebac.com');
        cy.get('input[placeholder="Telefone"]').clear().type('09876543210');
        cy.get('button').contains('Salvar').click();

        cy.contains('João Silva Editado').should('be.visible');
        cy.contains('joaoeditado@ebac.com').should('be.visible');
        cy.contains('09876543210').should('be.visible');
    })

    it('Deve remover um contato', () => {
        cy.get('input[placeholder="Nome"]').type('Julia Souza');
        cy.get('input[placeholder="E-mail"]').type('ju-souza@ebac.com.br');
        cy.get('input[placeholder="Telefone"]').type('11111111111');
        cy.get('button').contains('Adicionar').click();
    
        cy.contains('li', 'Julia Souza').closest('.contato').find('button.delete').click(); 
    
        cy.contains('Julia Souza').should('not.exist');
        cy.contains('ju-souza@ebac.com.br').should('not.exist');
        cy.contains('11111111111').should('not.exist');
    });

    })
