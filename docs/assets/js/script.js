// Function to convert HEX to HSL
function hexToHSL(hex) {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
    }
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    s = s * 100;
    l = l * 100;
    h = Math.round(h * 360);
    s = Math.round(s);
    l = Math.round(l);
    return { h, s, l };
}

// Function to set CSS variables dynamically based on HEX input
function setColorVariables(hexVar, prefix) {
    const hex = getComputedStyle(document.documentElement).getPropertyValue(hexVar).trim();
    const { h, s, l } = hexToHSL(hex);

    const styles = `
        --${prefix}-h: ${h};
        --${prefix}-s: ${s}%;
        --${prefix}-l: ${l}%;
        --${prefix}-hover: hsl(${h}, ${s}%, ${l + (l > 50 ? -10 : 10)}%);
        --${prefix}-content: hsl(${h}, ${s}%, ${l > 50 ? l - 70 : l + 75}%);
    `;
    return styles;
}

// Function to inject dynamic color styles into the document
function injectStyles() {
    const primaryStyles = setColorVariables('--primary', 'primary');
    const secondaryStyles = setColorVariables('--secondary', 'secondary');
    const accentStyles = setColorVariables('--accent', 'accent');

    let styleElement = document.getElementById('dynamic-color-styles');
    
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'dynamic-color-styles';
        document.head.appendChild(styleElement);
    }

    styleElement.textContent = `:root { ${primaryStyles} ${secondaryStyles} ${accentStyles} }`;
}

// Call to inject dynamic styles on load
injectStyles();

// Function to toggle the navigation menu and icon
function setupNavToggle() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const hamburgerIcon = document.getElementById('hamburger-icon');

    hamburger.addEventListener('click', () => {
        // Toggle navigation visibility
        navLinks.classList.toggle('hidden');

        // Toggle between the hamburger and close icons
        if (hamburgerIcon.classList.contains('ri-menu-line')) {
            hamburgerIcon.classList.remove('ri-menu-line');
            hamburgerIcon.classList.add('ri-close-line');
        } else {
            hamburgerIcon.classList.remove('ri-close-line');
            hamburgerIcon.classList.add('ri-menu-line');
        }
    });
}

// Initialize navigation toggle
setupNavToggle();
