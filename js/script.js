// Form validation
(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

// Show toast notification after page loads
window.addEventListener('load', function () {
    setTimeout(function () {
        var toast = document.getElementById('welcomeToast');
        if (toast) {
            new bootstrap.Toast(toast).show();
        }
    }, 2000);
});

// Cart button click handler
document.querySelector('[data-bs-target="#cartOffcanvas"]')?.addEventListener('click', function () {
    var cartOffcanvas = document.getElementById('cartOffcanvas');
    if (cartOffcanvas) {
        new bootstrap.Offcanvas(cartOffcanvas).show();
    }
});

// Add to cart functionality
document.querySelectorAll('.btn').forEach(function (button) {
    if (button.textContent.includes("Add to Cart")) {
        button.addEventListener('click', function () {
            // Show toast notification
            var toastHtml = `
                    <div class="toast" role="alert">
                        <div class="toast-header">
                            <i class="bi bi-check-circle text-success me-2"></i>
                            <strong class="me-auto">Success!</strong>
                            <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
                        </div>
                        <div class="toast-body">Item added to cart successfully!</div>
                    </div>
                `;

            var toastContainer = document.querySelector('.toast-container');
            if (toastContainer) {
                toastContainer.insertAdjacentHTML('beforeend', toastHtml);
                var newToast = toastContainer.lastElementChild;
                var toast = new bootstrap.Toast(newToast);
                toast.show();

                // Remove toast after it's hidden
                newToast.addEventListener('hidden.bs.toast', function () {
                    newToast.remove();
                });
            }
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

window.addEventListener('load', function () {
    setTimeout(function () {
        const heroRight = document.querySelector('.hero-section .text-center');
        if (heroRight) {
            heroRight.innerHTML = `
                <img src="./img/steamicon2.png" alt="Featured Game" style="max-width:150px;">
                <h5 class="mt-3">Featured: Steam Gift Cards</h5>
                <p>Instant delivery, ready to use!</p>
            `;
        }
    }, 3000);
});