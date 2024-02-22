function loadIcons() {
  document.querySelectorAll('.tech-icon').forEach((icon) => {
    const searchValue = icon.getAttribute('data-icon');

    fetch('https://api.iconify.design/search?query=' + searchValue)
      .then((response) => response.json())
      .then((data) => {
        const iconData = data.icons[0];
        if (!iconData) icon.textContent = searchValue;
        else {
          const prefix = iconData.split(':')[0];
          const iconName = iconData.split(':')[1];
          icon.style.setProperty(
            '--icon-url',
            `url('https://api.iconify.design/${prefix}/${iconName}.svg')`
          );
          icon.classList.add('icon-loaded');
        }
      });
  });
}

loadIcons();
