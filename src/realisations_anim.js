const section_second = document.querySelector('.section_second')
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
                child.style.transition = 'transform 0.2s ease-out'; // Transition plus fluide
                child.style.transform = `rotateY(${relativeOffsetX}deg) rotateX(${relativeOffsetY * -1}deg)`;
            });

            el.querySelector('h3').style.transition = 'transform 0.2s ease-out'; // Transition plus fluide
            el.querySelector('h3').style.transform = 'translateX(' + relativeOffsetX + 'px)';
        });

        container.addEventListener('mouseleave', function() {
            children.forEach(function(child) {
                child.style.transition = 'transform 1s ease-out'; // Transition plus fluide
                child.style.transform = 'none';
            });

            el.querySelector('h3').style.transition = 'transform 1s ease-out'; // Transition plus fluide
            el.querySelector('h3').style.transform = 'none';
        });
    });
}

handleHover();

