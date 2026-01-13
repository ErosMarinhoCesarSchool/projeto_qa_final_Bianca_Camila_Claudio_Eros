// @ts-check 
import { test, expect } from '@playwright/test'; 

// O Playwright carrega a baseURL definida no playwright.config.js 

test('deve carregar a página inicial e verificar o título e o logo', async ({ page }) => { 

// 1. Navegar para a página inicial (usando a baseURL) 

await page.goto('/');

// 2. Asserção Web-First: Verifica se o título da página está correto 

await expect(page).toHaveTitle('BugBank | O banco com bugs e falhas do seu jeito'); 

// 3. CHECK ESSENCIAL: Verifica se o campo de E-mail está visível. 
// Novo Locator: Usa getByRole('textbox') e filtra pelo nome de acessibilidade 'E-mail'. 
// O .first() ainda é necessário devido aos dois campos de 'E-mail' (Login e Cadastro). 

const emailInput = page.getByRole('textbox', { name: 'E-mail' }).first(); 

await expect(emailInput).toBeVisible(); 

// 4. CHECK ADICIONAL: Verifica se o botão principal de Login está visível. 
// Usamos getByRole para o papel de 'button' e filtramos pelo texto 'Acessar'. 

const loginButton = page.getByRole('button', { name: 'Acessar' }); 

await expect(loginButton).toBeVisible();

});