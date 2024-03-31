const typeSplit = new SplitType('[animate]', {
    types: 'lines, words, chars',
    tagName: 'span'
});

gsap.from('[animate] .char', {
    opacity: 0.1,
    duration: 7, // Time anim for letters
    ease: "power1.out", // Animation type "type out"
    stagger: 0.05, // letters-spacing
    scrollTrigger: {
        trigger: "[animate]",
        start: "top 99%", // start anim when 99% from top
        end: "center center", // stop anim when center of section_first
        scrub: true 
    }
});
