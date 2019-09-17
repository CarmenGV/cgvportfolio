const simple = [
  document.querySelector('#about h3'),
  document.querySelector('#skills h3'),
  document.querySelector('#portfolio h3'),
  document.querySelector('#contact h3'),
  document.querySelector('.about-desc')
];
const slideUp = [
  document.querySelector('.about-cards'),
  document.querySelector('.skills-chart'),
  document.querySelector('#portGrid'),
  document.querySelector('#contact-info')
]

ScrollReveal().reveal(simple,{
  delay: 300,
  easing: 'ease-in-out',
});
ScrollReveal().reveal(slideUp, {
  distance: '50px',
  origin: 'bottom',
  delay: 500,
  duration: 900,
});
