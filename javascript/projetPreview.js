const previewBox = document.querySelector('.projects-img-select');
const previewImg = previewBox.querySelector('img');
const previewType = previewBox.querySelector('.project-type');
const previewYear = previewBox.querySelector('.project-year');
const previewTitle = previewBox.querySelector('h3');
const previewDesc = previewBox.querySelector('p');
const previewLink = previewBox.querySelector('.btn');

const projectRows = document.querySelectorAll('.projects-element');

const selectProject = (element) => {
    projectRows.forEach((el) => el.classList.remove('projects-element-select'));
    element.classList.add('projects-element-select');

    const img = element.querySelector('.projects-element-img');
    const type = element.querySelector('.project-type');
    const year = element.querySelector('.project-year');
    const title = element.querySelector('h3').firstChild.textContent.trim();
    const desc = element.querySelector('p').textContent;

    previewImg.src = img.src;
    previewImg.alt = img.alt;
    previewType.textContent = type.textContent;
    previewYear.textContent = year.textContent.trim();
    previewTitle.textContent = title;
    previewDesc.textContent = desc;

    const url = element.dataset.url;
    previewLink.href = url || '#';
    previewLink.hidden = !url;
};

projectRows.forEach((element) => {
    element.addEventListener('click', () => selectProject(element));
});
