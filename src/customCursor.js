document.addEventListener("DOMContentLoaded", function(event) {
    const cursor = document.querySelector(".custom-cursor");
    const links = document.querySelectorAll("a");
    const linkOthers = document.querySelectorAll(".carte_metro_section, .catacombes_section");
    const faqLinks = document.querySelectorAll(".faq");

    let initCursor = false;

    function handleLinkHover() {
        cursor.classList.toggle("custom-cursor--link");
    }

    function moveCursor(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        if (!initCursor) {
            TweenLite.to(cursor, 0.3, { opacity: 1 });
            initCursor = true;
        }

        TweenLite.to(cursor, 0, { top: mouseY + "px", left: mouseX + "px" });
    }

    function hideCursor() {
        TweenLite.to(cursor, 0.3, { opacity: 0 });
        initCursor = false;
    }

    links.forEach(link => {
        link.addEventListener("mouseover", handleLinkHover);
        link.addEventListener("mouseout", handleLinkHover);
    });

    faqLinks.forEach(link => {
        const documentPage = document.querySelector(link.getAttribute("href"));
        link.addEventListener("mouseover", handleLinkHover);
        link.addEventListener("mouseout", handleLinkHover);
    });

    linkOthers.forEach(link => {
        link.addEventListener("mouseover", handleLinkHover);
        link.addEventListener("mouseout", handleLinkHover);
    });

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseout", hideCursor);
});
