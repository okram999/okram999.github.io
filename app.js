// Define routes/pages
const routes = {
    home: {
        title: "Welcome Home! 🏠",
        content: "This is a simple Single-Page Application (SPA) built with vanilla JavaScript and hosted on GitHub Pages!"
    },
    about: {
        title: "About This SPA 📱",
        content: "This SPA demonstrates client-side routing without page reloads. It's fast, smooth, and hosted completely free on GitHub Pages."
    },
    contact: {
        title: "Get In Touch 📧",
        content: "You can reach me at: jack345@example.com or visit my GitHub profile!"
    }
};

// Function to navigate between pages
function navigate(page) {
    const route = routes[page] || routes.home;
    
    // Update content
    document.getElementById('content').innerHTML = `
        <h1>${route.title}</h1>
        <p>${route.content}</p>
    `;
    
    // Update URL without page reload
    window.history.pushState({page}, '', `#${page}`);
}

// Handle browser back/forward buttons
window.addEventListener('popstate', (event) => {
    const page = event.state?.page || 'home';
    navigate(page);
});

// Load initial page
window.addEventListener('DOMContentLoaded', () => {
    const page = window.location.hash.slice(1) || 'home';
    navigate(page);
});
