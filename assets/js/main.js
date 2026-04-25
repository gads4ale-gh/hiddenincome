(function () {
    'use strict';

    // Update footer year automatically
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Lead form handling — redirects to "obrigado.html" on submit
    const form = document.getElementById('leadForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const nome = form.nome.value.trim();
            const email = form.email.value.trim();
            const consent = form.consent.checked;

            if (!nome || !email || !consent) {
                alert('Por favor, preencha todos os campos e aceite a política de privacidade.');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, informe um e-mail válido.');
                return;
            }

            try {
                const params = new URLSearchParams({ nome: nome });
                window.location.href = 'obrigado.html?' + params.toString();
            } catch (err) {
                window.location.href = 'obrigado.html';
            }
        });
    }

    // Personalize thank-you page with the visitor's name (if present in URL)
    const thanksName = document.getElementById('thanksName');
    if (thanksName) {
        const params = new URLSearchParams(window.location.search);
        const nome = params.get('nome');
        if (nome) {
            thanksName.textContent = ', ' + nome;
        }
    }
})();
