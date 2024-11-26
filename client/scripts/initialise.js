import config from '/config/sections.config.js';



function fillTopbar()
{
    for (const section of config.sections)
    {
        const anchor = document.createElement('a');
        anchor.href = '#';
        anchor.classList.add('topbar__navAnchor');
        anchor.innerText = section.shortTitle;

        const listItem = document.createElement('li');
        listItem.classList.add('topbar__navItem');
        listItem.appendChild(anchor);

        document.querySelector('.topbar__navList').appendChild(listItem);
    }
}



function fillFooter()
{
    for (const section of config.sections)
    {
        const anchor = document.createElement('a');
        anchor.href = '#';
        anchor.classList.add('footer__navAnchor');
        anchor.innerText = `${section.shortTitle} - ${section.longTitle}`;

        const listItem = document.createElement('li');
        listItem.classList.add('footer__navItem');
        listItem.appendChild(anchor);

        document.querySelector('.footer__navList').appendChild(listItem);
    }
}



export default function initialise()
{
    fillTopbar();
    fillFooter();
}