document.addEventListener('DOMContentLoaded', () => {
    const emailLink = document.querySelector('a[href^="mailto:"]');
    
    emailLink.addEventListener('click', () => {
        alert('Email copiado: ' + emailLink.href.replace('mailto:', ''));
    });
});
