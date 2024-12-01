import config from '/config/sections.config.js';



function fillTopbar()
{
    for (const section of config.sections)
    {
        const listItem = document.createElement('li');
        const listItemAnchor = document.createElement('a');

        listItemAnchor.href = '#';
        listItemAnchor.classList.add('topbar__navAnchor');
        listItemAnchor.innerText = section.shortTitle;

        listItem.classList.add('topbar__navItem');
        listItem.appendChild(listItemAnchor);

        document.querySelector('.topbar__navList').appendChild(listItem);
    }
}



function collapseTopbarWhenResizing()
{
	window.addEventListener('resize', () =>
	{
		if (window.matchMedia('(min-width: 30rem)').matches)
		{
			document.getElementById('topbar__isNavDisplayed').checked = false;
		}
	});
}



export function initialiseTopbar()
{
	fillTopbar();
	collapseTopbarWhenResizing();
}