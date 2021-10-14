

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Fetching photo from github profile
const APIURL = 'https://api.github.com/users/'

getUser('KateKononuk')
const avatar = document.getElementById('avatar')

async function getUser(username) {
  try {
    const {
      data
    } = await axios(APIURL + username)
    avatar.style.backgroundImage = `url(${data.avatar_url})`
  } catch (err) {
    console.log(err)

 } 
}