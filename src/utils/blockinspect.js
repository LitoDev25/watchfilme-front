

function blockInspect() {
    // Bloqueia o clique com botão direito
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    // Bloqueia teclas como F12, Ctrl+Shift+I, Ctrl+U etc.
    document.addEventListener('keydown', function (e) {
        // F12
        if (e.key === "F12" || e.keyCode === 123) {
            e.preventDefault();
        }

        // Ctrl+Shift+I (DevTools)
        if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') {
            e.preventDefault();
        }

        // Ctrl+U (ver código-fonte)
        if (e.ctrlKey && e.key.toLowerCase() === 'u') {
            e.preventDefault();
        }

        // Ctrl+Shift+J (console)
        if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'j') {
            e.preventDefault();
        }
    });
}


export default blockInspect();