// Curseur personnalisé : une bulle qui suit la souris et grossit au survol des éléments interactifs
(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const bubble = document.createElement('div');
    bubble.className = 'cursor-bubble';
    document.body.appendChild(bubble);
    document.body.classList.add('custom-cursor-active');

    const hoverSelector = [
        'a', 'button', 'input', 'textarea', 'select', 'label',
        '.btn', '.btn-filtre', '.nav-link', '.nav-link-sm',
        '.div-icon', '.skill', '.projects-element', '.projects-img-select',
        '.logo', '.menu-toggle', '.darkmode', '[data-cursor-hover]'
    ].join(', ');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let bubbleX = mouseX;
    let bubbleY = mouseY;
    const ease = 0.18;

    const onMouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        bubble.classList.add('visible');
    };

    const onMouseEnterWindow = () => bubble.classList.add('visible');
    const onMouseLeaveWindow = () => bubble.classList.remove('visible');

    const onMouseOver = (e) => {
        if (e.target.closest(hoverSelector)) bubble.classList.add('hovered');
    };
    const onMouseOut = (e) => {
        if (e.target.closest(hoverSelector)) bubble.classList.remove('hovered');
    };

    const onMouseDown = () => bubble.classList.add('clicked');
    const onMouseUp = () => bubble.classList.remove('clicked');

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeaveWindow);
    document.addEventListener('mouseenter', onMouseEnterWindow);

    const animate = () => {
        bubbleX += (mouseX - bubbleX) * ease;
        bubbleY += (mouseY - bubbleY) * ease;
        bubble.style.left = `${bubbleX}px`;
        bubble.style.top = `${bubbleY}px`;
        requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
})();
