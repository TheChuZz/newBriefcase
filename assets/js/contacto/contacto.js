document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('.btn-submit');
    const btnText = submitBtn.querySelector('.btn-text');
    const loading = submitBtn.querySelector('.loading');
    const successMessage = document.getElementById('successMessage');

    // Función para validar email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Función para validar un campo
    function validateField(field) {
        const formGroup = field.closest('.form-group');
        const value = field.value.trim();
        let isValid = true;

        // Remover clase de error
        formGroup.classList.remove('error');

        if (field.hasAttribute('required') && !value) {
            isValid = false;
            formGroup.classList.add('error');
        } else if (field.type === 'email' && value && !isValidEmail(value)) {
            isValid = false;
            formGroup.classList.add('error');
            const errorMsg = formGroup.querySelector('.error-message');
            errorMsg.textContent = 'Por favor, ingresa un correo electrónico válido';
        }

        return isValid;
    }

    // Validación en tiempo real
    const requiredFields = form.querySelectorAll('input[required], textarea[required]');
    requiredFields.forEach(field => {
        field.addEventListener('blur', function () {
            validateField(field);
        });

        field.addEventListener('input', function () {
            if (field.closest('.form-group').classList.contains('error')) {
                validateField(field);
            }
        });
    });

    // Validación del formulario completo
    function validateForm() {
        let isFormValid = true;

        requiredFields.forEach(field => {
            if (!validateField(field)) {
                isFormValid = false;
            }
        });

        return isFormValid;
    }

    // Manejo del envío del formulario
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Ocultar mensaje de éxito previo
        successMessage.style.display = 'none';

        if (!validateForm()) {
            return;
        }

        // Mostrar estado de carga
        submitBtn.disabled = true;
        btnText.style.opacity = '0';
        loading.style.display = 'block';

        // Simular envío (aquí integrarías con tu backend)
        setTimeout(() => {
            // Ocultar estado de carga
            btnText.style.opacity = '1';
            loading.style.display = 'none';
            submitBtn.disabled = false;

            // Mostrar mensaje de éxito
            successMessage.style.display = 'block';

            // Limpiar formulario
            form.reset();

            // Remover clases de error
            form.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('error');
            });

            // Scroll al mensaje de éxito
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 2000);
    });

    // Prevenir envío con Enter si hay errores
    form.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            if (validateForm()) {
                form.dispatchEvent(new Event('submit'));
            }
        }
    });
});