const filterButtons = document.querySelectorAll('.btn-filtre');
const projectElements = document.querySelectorAll('.projects-element');

const normalize = (text) => text.trim().toLowerCase();

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        filterButtons.forEach((btn) => btn.classList.remove('btn-filtre-select'));
        button.classList.add('btn-filtre-select');

        const filter = normalize(button.textContent);

        projectElements.forEach((project) => {
            const type = normalize(project.querySelector('.project-type').textContent);
            const matches = filter === 'tous' || type === filter;
            project.style.display = matches ? 'flex' : 'none';
        });
    });
});
