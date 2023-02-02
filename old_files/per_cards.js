gsap.registerPlugin(ScrollTrigger);

gsap.from('.neil-overview-row', {
    duration: 1,
    opacity: 0,
    ease: 'rough',
    stagger: 2})
gsap.from('.card', {
    duration: 2,
    x: '-500%',
    ease: 'power',
    scrollTrigger: 'personality-cards',
    stagger: 1})