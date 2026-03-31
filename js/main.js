// main.js - SIIT Portal Replica
document.addEventListener('DOMContentLoaded', function() {
    // Landing page: toggle login form on Alumnos click
    var alumnosLink = document.getElementById('link-alumnos');
    var loginContainer = document.getElementById('login-container');

    if (alumnosLink && loginContainer) {
        alumnosLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (loginContainer.classList.contains('active')) {
                loginContainer.classList.remove('active');
            } else {
                loginContainer.classList.add('active');
            }
        });
    }

    // Login form: Acceso button navigates to dashboard
    var loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            window.location.href = 'dashboard.html';
        });
    }

    // Cerrar buttons: navigate back to dashboard
    var cerrarBtns = document.querySelectorAll('.btn-cerrar');
    cerrarBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'dashboard.html';
        });
    });
});
