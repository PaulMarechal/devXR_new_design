const section_second = document.querySelector('.section_second')
// const tilt_item_card = document.querySelector('.tilt_item_card')
const tilt_item_cards = document.querySelectorAll('.tilt_item_card');
const under_title_cards_realisations  = document.querySelectorAll('.under_title_cards_realisations');
const title_cards_realisations = document.querySelectorAll('.title_cards_realisations');
section_second.style.height = "-webkit-fill-available"
section_second.style.marginBottom = "5rem"


function handleHover() {
    let ratio = 0.10;

    document.querySelectorAll('.hover-container').forEach(function(container) {
        let el = null;
        let children = null;
        let w = 0;
        let h = 0;

        container.addEventListener('mouseenter', function(e) {
            el = this;
            children = Array.from(el.getElementsByClassName('tilt_item_card-inner'));
            w = el.offsetWidth;
            h = el.offsetHeight;
        });

        container.addEventListener('mousemove', function(e) {
            let absoluteOffsetX = e.offsetX - w / 2;
            let absoluteOffsetY = e.offsetY - h / 2;
            let relativeOffsetX = absoluteOffsetX * 100 / w * 2 * ratio;
            let relativeOffsetY = absoluteOffsetY * 100 / h * 2 * ratio;

            children.forEach(function(child) {
                child.style.transition = 'transform 0.2s ease-out, top 0.5s ease-out'; 
                child.style.transform = `rotateY(${relativeOffsetX}deg) rotateX(${relativeOffsetY * -1}deg)`;
            });

            el.querySelector('h3').style.transition = 'transform 0.2s ease-out, top 0.5s ease-out';
            el.querySelector('h3').style.transform = 'translateX(' + relativeOffsetX + 'px)';
            el.querySelector('.under_title_cards_realisations').style.transition = 'transform 0.2s ease-out, top 0.5s ease-out'; 
            el.querySelector('.under_title_cards_realisations').style.transform = 'translateX(' + relativeOffsetX + 'px)';
        });

        container.addEventListener('mouseleave', function() {
            children.forEach(function(child) {
                child.style.transition = 'transform 1s ease-out, top 0.5s ease-out'; 
                child.style.transform = 'none';
            });

            el.querySelector('h3').style.transition = 'transform 1s ease-out, , top 0.5s ease-out'; 
            el.querySelector('h3').style.transform = 'none';
        });
    });
}

handleHover();


console.log(tilt_item_cards)
tilt_item_cards.forEach((tilt_item_card, index) => {
    console.log(tilt_item_card)
    tilt_item_card.addEventListener("mouseover", (event) => {
        under_title_cards_realisations[index].style.top = "80%";
        title_cards_realisations[index].style.top = "62%";
    });

    tilt_item_card.addEventListener("mouseout", (event) => {
        under_title_cards_realisations[index].style.top = "102%";
        title_cards_realisations[index].style.top = "80%";
    });
});
