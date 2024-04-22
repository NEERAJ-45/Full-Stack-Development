const colorSchemes = [
    {
        bodyBackground: 'linear-gradient(135deg, #f0f0f0, #b0e0e6)',
        navbarBackground: 'rgba(255, 255, 255, 0.2)',
        navbarLinksColor: '#000',
        hoverColor: '#ff4500',
        titleColor: '#333',
        subtitleColor: '#666',
        cardBackground: 'rgba(255, 255, 255, 0.7)',
        cardTitleColor: '#333',
        cardDescriptionColor: '#666',
    },
    {
        bodyBackground: 'linear-gradient(135deg, #ff7f50, #ff6347)',
        navbarBackground: 'rgba(0, 0, 0, 0.2)',
        navbarLinksColor: '#fff',
        hoverColor: '#32cd32',
        titleColor: '#fff',
        subtitleColor: '#f8f8ff',
        cardBackground: 'rgba(0, 0, 0, 0.7)',
        cardTitleColor: '#fff',
        cardDescriptionColor: '#f8f8ff',
    },
    {
        bodyBackground: 'linear-gradient(135deg, #87ceeb, #00bfff)',
        navbarBackground: 'rgba(0, 0, 128, 0.2)',
        navbarLinksColor: '#fff',
        hoverColor: '#00fa9a',
        titleColor: '#fff',
        subtitleColor: '#f8f8ff',
        cardBackground: 'rgba(0, 0, 128, 0.7)',
        cardTitleColor: '#fff',
        cardDescriptionColor: '#f8f8ff',
    },
    {
        bodyBackground: 'linear-gradient(135deg, #4b0082, #800080)',
        navbarBackground: 'rgba(128, 0, 128, 0.2)',
        navbarLinksColor: '#fff',
        hoverColor: '#da70d6',
        titleColor: '#fff',
        subtitleColor: '#f8f8ff',
        cardBackground: 'rgba(128, 0, 128, 0.7)',
        cardTitleColor: '#fff',
        cardDescriptionColor: '#f8f8ff',
    },
    {
        bodyBackground: 'linear-gradient(135deg, #f0e68c, #fafad2)',
        navbarBackground: 'rgba(255, 255, 0, 0.2)',
        navbarLinksColor: '#000',
        hoverColor: '#8b4513',
        titleColor: '#000',
        subtitleColor: '#8b4513',
        cardBackground: 'rgba(255, 255, 0, 0.7)',
        cardTitleColor: '#000',
        cardDescriptionColor: '#8b4513',
    },
    {
        bodyBackground: 'linear-gradient(135deg, #d3d3d3, #708090)',
        navbarBackground: 'rgba(112, 128, 144, 0.2)',
        navbarLinksColor: '#fff',
        hoverColor: '#ff8c00',
        titleColor: '#2f4f4f',
        subtitleColor: '#778899',
        cardBackground: 'rgba(112, 128, 144, 0.7)',
        cardTitleColor: '#fff',
        cardDescriptionColor: '#778899',
    },
    {
        bodyBackground: 'linear-gradient(135deg, #98fb98, #7fffd4)',
        navbarBackground: 'rgba(60, 179, 113, 0.2)',
        navbarLinksColor: '#fff',
        hoverColor: '#20b2aa',
        titleColor: '#006400',
        subtitleColor: '#556b2f',
        cardBackground: 'rgba(60, 179, 113, 0.7)',
        cardTitleColor: '#fff',
        cardDescriptionColor: '#556b2f',
    },
    {
        bodyBackground: 'linear-gradient(135deg, #ffb6c1, #ff69b4)',
        navbarBackground: 'rgba(255, 105, 180, 0.2)',
        navbarLinksColor: '#fff',
        hoverColor: '#ff69b4',
        titleColor: '#ff1493',
        subtitleColor: '#ff69b4',
        cardBackground: 'rgba(255, 105, 180, 0.7)',
        cardTitleColor: '#fff',
        cardDescriptionColor: '#ff69b4',
    },
    {
        bodyBackground: 'linear-gradient(135deg, #ffd700, #ff6347)',
        navbarBackground: 'rgba(255, 140, 0, 0.2)',
        navbarLinksColor: '#fff',
        hoverColor: '#dc143c',
        titleColor: '#ff4500',
        subtitleColor: '#ff8c00',
        cardBackground: 'rgba(255, 140, 0, 0.7)',
        cardTitleColor: '#fff',
        cardDescriptionColor: '#ff8c00',
    },
    {
        bodyBackground: 'linear-gradient(135deg, #d2b48c, #bc8f8f)',
        navbarBackground: 'rgba(210, 180, 140, 0.2)',
        navbarLinksColor: '#fff',
        hoverColor: '#cd853f',
        titleColor: '#a0522d',
        subtitleColor: '#8b4513',
        cardBackground: 'rgba(210, 180, 140, 0.7)',
        cardTitleColor: '#fff',
        cardDescriptionColor: '#8b4513',
    },
];

// Function to apply color scheme to elements
function applyColorScheme(scheme) {
    // Apply body background
    document.body.style.background = scheme.bodyBackground;

    // Apply navbar styles
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.background = scheme.navbarBackground;
        const links = navbar.querySelectorAll('a');
        links.forEach(link => {
            link.style.color = scheme.navbarLinksColor;
            link.addEventListener('mouseover', () => {
                link.style.background = 'rgba(255, 255, 255, 0.1)';
                link.style.color = scheme.hoverColor;
            });
            link.addEventListener('mouseout', () => {
                link.style.background = '';
                link.style.color = scheme.navbarLinksColor;
            });
        });
    }

    // Apply title and subtitle styles
    const h1 = document.querySelector('h1');
    if (h1) {
        h1.style.color = scheme.titleColor;
    }
    const h2 = document.querySelector('h2');
    if (h2) {
        h2.style.color = scheme.subtitleColor;
    }

    // Apply card styles
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.background = scheme.cardBackground;
        const cardTitle = card.querySelector('h3');
        if (cardTitle) {
            cardTitle.style.color = scheme.cardTitleColor;
        }
        const cardDescription = card.querySelector('p');
        if (cardDescription) {
            cardDescription.style.color = scheme.cardDescriptionColor;
        }
    });
}

// Initialize color scheme index
let currentSchemeIndex = 0;

// Function to cycle through color schemes
function cycleColorSchemes() {
    // Apply the current color scheme
    applyColorScheme(colorSchemes[currentSchemeIndex]);

    // Increment the scheme index
    currentSchemeIndex = (currentSchemeIndex + 1) % colorSchemes.length;
}

// Start cycling color schemes every 30 seconds
setInterval(cycleColorSchemes, 3000);

// Initialize with the first color scheme
cycleColorSchemes();

// Blinking cursor text options
const blinkingTextOptions = [
    "Web Developer",
    "Graphic Designer",
    "UI/UX Expert",
    "Creative Thinker",
    "Photographer",
];

// Function to cycle through blinking cursor text options
function cycleBlinkingText() {
    const blinkingTextElement = document.querySelector('#blinkingText');
    let currentIndex = 0;

    function updateText() {
        blinkingTextElement.textContent = blinkingTextOptions[currentIndex];

        // Increment the index for the next cycle
        currentIndex = (currentIndex + 1) % blinkingTextOptions.length;
    }

    // Update text every 2 seconds
    setInterval(updateText, 2000);
    // Initial update
    updateText();
}

// Start cycling blinking cursor text
cycleBlinkingText();
