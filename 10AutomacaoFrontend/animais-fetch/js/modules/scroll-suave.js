export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]',
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    //conseguiu pegar a seção pq o href é o mesmo seletor de css e html #id

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // //forma alternativa
    // const topo = (section.offsetTop);
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth'
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
