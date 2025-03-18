// Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const currentFilter = document.getElementById('current-filter');
const resetFilter = document.getElementById('reset-filter');

// Function to filter projects
function filterProjects(technology) {
    projectCards.forEach(card => {
        const technologies = card.getAttribute('data-technologies').split(' ');

        if (technology === 'all' || technologies.includes(technology)) {
            card.classList.remove('hide');
            setTimeout(() => {
                card.classList.add('show');
            }, 100);
        } else {
            card.classList.remove('show');
            card.classList.add('hide');
        }
    });

    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.filter-btn[data-skill="${technology}"]`).classList.add('active');
}

// Function to reset filters
function resetFilters() {
    projectCards.forEach(card => {
        card.classList.remove('hide');
        setTimeout(() => {
            card.classList.add('show');
        }, 100);
    });

    // Reset active buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector('.filter-btn[data-skill="all"]').classList.add('active');
}

// Add event listeners to filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const technology = button.getAttribute('data-skill');

        if (button.classList.contains('active')) {
            resetFilters();
        } else {
            filterProjects(technology);
        }
    });
});

// Initialize all projects as visible
resetFilters();