import config from '/config/sections.config.js';



function fillFooter()
{
    for (const section of config.sections)
    {
        const listItem = document.createElement('li');
        const listItemAnchor = document.createElement('a');

        listItemAnchor.href = '#';
        listItemAnchor.classList.add('footer__navAnchor');
        listItemAnchor.innerText = `${section.shortTitle} - ${section.longTitle}`;

        listItem.classList.add('footer__navItem');
        listItem.appendChild(listItemAnchor);

        document.querySelector('.footer__navList').appendChild(listItem);
    }
}



export function initialiseFooter()
{
	fillFooter();
}