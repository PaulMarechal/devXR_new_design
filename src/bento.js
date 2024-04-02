// Old code 
const window_height = window.innerHeight
const a_propos_div = document.querySelector(".a_propos_div")
const avantages_site_immersifs_div = document.querySelector(".avantages_site_immersifs_div")
const confiance_div = document.querySelector(".confiance_div")
const exemple_site = document.querySelector(".exemple_site")
const parent_bento_first_section = document.querySelector(".parent_bento_first_section")
const remove_info_div = document.querySelectorAll(".remove_info_div")
const argument_container = document.querySelector(".argument_container")
const logo_div = document.querySelector(".logo_div")
const realisations_container = document.querySelector(".realisations_container")

parent_bento_first_section.style.height = `${window_height * 0.85}px`

function refreshOnOrientationChange() {
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            location.reload();
        }, 500); // Attendez 500 millisecondes avant de rafraîchir la page
    });
}

refreshOnOrientationChange();

const div_bento = [
    "div1", "div2", 
    "div3", "div4", 
    "div5", "div6", 
    "div7", "div8", 
    "div9", "div10", 
    "div11"
]

function display_new_sizes_div(div){
    div.style.height = "30%"
    div.style.width = "30%"
    div.style.opacity = "0"
    setTimeout(() => {
        div.style.height = "100%"
        div.style.width = "100%"
        div.style.opacity = "1"
    }, 100);
}

function reset_height_width_div(){
    for (const i in div_bento) {
        const div = document.querySelector(`.${div_bento[i]}`)
        div.style.opacity = "0"
        div.style.height = "1%"
        div.style.width = "1%"
    }
}

function remove_inside_div() {
    remove_info_div.forEach(div => {
        div.opacity = 0;
        setTimeout(() => {
            div.remove();
        }, 550);
    });
}

/*
function click_on_div_avantages(){
    remove_inside_div()
    reset_height_width_div()

    setTimeout(() => { 
        for (const i in div_bento) {
            const div = document.querySelector(`.${div_bento[i]}`)
            if(div_bento[i] == "div1"){
                div.style.gridArea = "1 / 1 / 6 / 7"
                display_new_sizes_div(div)
            } else if (div_bento[i] == "div2"){
                div.style.gridArea = "6 / 1 / 11 / 7"
                display_new_sizes_div(div)
            } else if (div_bento[i] == "div3"){
                div.style.gridArea = "11 / 1 / 16 / 7"
                display_new_sizes_div(div)
            } else if (div_bento[i] == "div4"){
                div.style.gridArea = "16 / 1 / 21 / 7"
                display_new_sizes_div(div)
            }else if (div_bento[i] == "div8"){
                div.style.gridArea = "1/ 7 / 21 / 21"
                display_new_sizes_div(div)
            } else {
                div.style.opacity = 0;
            }
        }
    }, 600);
}
*/

/*
function click_on_div_realisations(){
    reset_height_width_div()
    remove_inside_div()

    setTimeout(() => { 
        for (const i in div_bento) {
            const div = document.querySelector(`.${div_bento[i]}`)
            if(div_bento[i] == "div1"){
                div.style.gridArea = "1 / 1 / 21 / 6"
                display_new_sizes_div(div)
            } else if (div_bento[i] == "div8"){
                div.style.gridArea = "1 / 6 / 21 / 11"
                display_new_sizes_div(div)
            } else if (div_bento[i] == "div6"){
                div.style.gridArea = "1 / 11 / 21 / 16"
                display_new_sizes_div(div)
            } else if (div_bento[i] == "div5"){
                div.style.gridArea = "1 / 16 / 21 / 21"
                display_new_sizes_div(div)
            } else {
                div.style.opacity = 0;
            }
        }
    }, 600);
}
*/

/*
function click_on_div_exemples(){
    reset_height_width_div()
    remove_inside_div()

    setTimeout(() => { 
        for (const i in div_bento) {
            const div = document.querySelector(`.${div_bento[i]}`)
            if(div_bento[i] == "div1"){
                div.style.gridArea = "1 / 1 / 11 / 11"
                display_new_sizes_div(div)
            } else if (div_bento[i] == "div3"){
                div.style.gridArea = "11 / 1 / 21 / 11"
                display_new_sizes_div(div)
            } else if (div_bento[i] == "div8"){
                div.style.gridArea = "1 / 11 / 11 / 21"
                display_new_sizes_div(div)
            } else if (div_bento[i] == "div9"){
                div.style.gridArea = "11 / 11 / 21 / 21"
                display_new_sizes_div(div)
            } else {
                div.style.opacity = 0;
            }
        }
    }, 600);
}
*/
/*
function click_on_div_a_propos(){
    reset_height_width_div()
    remove_inside_div()

    setTimeout(() => { 
        for (const i in div_bento) {
            const div = document.querySelector(`.${div_bento[i]}`)
            if(div_bento[i] == "div1"){
                div.style.gridArea = "1 / 1 / 21 / 11"
                display_new_sizes_div(div)
            } else if (div_bento[i] == "div8"){
                div.style.gridArea = "1 / 11 / 21 / 21"
                display_new_sizes_div(div)
            } else {
                div.style.opacity = 0;
            }
        }
    }, 600);
}
*/
/*******************/
/*  Mobile version */
/*******************/
/*  Portrait mode  */
/*
function mobile_click_on_div_a_propos(){
    reset_height_width_div()
    setTimeout(() => { 
        for (const i in div_bento) {
            const div = document.querySelector(`.${div_bento[i]}`)
            if(div_bento[i] == "div1"){
                if( window.innerHeight > window.innerWidth ) {
                    div.style.gridArea = "1 / 1 / 21 / 13"
                } else {
                    div.style.gridArea = "1 / 1 / 21 / 21"
                }
                display_new_sizes_div(div)
            } else {
                div.style.opacity = 0;
            }
        }
    }, 600);
}
*/
/*
function mobile_click_on_div_avantages(){
    reset_height_width_div()
    setTimeout(() => { 
        for (const i in div_bento) {
            const div = document.querySelector(`.${div_bento[i]}`)
            if(div_bento[i] == "div1"){
                if( window.innerHeight > window.innerWidth ) {
                    div.style.gridArea = "1 / 1 / 7 / 13"
                } else {
                    div.style.gridArea = "1 / 1 / 21 / 8"
                }
                display_new_sizes_div(div)
            } else if (div_bento[i] == "div2"){
                if( window.innerHeight > window.innerWidth ) {
                    div.style.gridArea = "7 / 1 / 14 / 13"
                } else {
                    div.style.gridArea = "1 / 8 / 21 / 14"
                }
                display_new_sizes_div(div)
            } else if (div_bento[i] == "div3"){
                if( window.innerHeight > window.innerWidth ) {
                    div.style.gridArea = "14 / 1 / 21 / 13"
                } else {
                    div.style.gridArea = "1 / 14 / 21 / 21"
                }
                display_new_sizes_div(div)
            } else {
                div.style.opacity = 0;
            }
        }
    }, 600);
}
*/
/*
function mobile_click_on_div_realisations(){
    reset_height_width_div()
    setTimeout(() => { 
        for (const i in div_bento) {
            const div = document.querySelector(`.${div_bento[i]}`)
            if(div_bento[i] == "div1"){
                if( window.innerHeight > window.innerWidth ) {
                    div.style.gridArea = "1 / 1 / 6 / 13"
                } else {
                    div.style.gridArea = "1 / 1 / 11 / 11"
                }
                display_new_sizes_div(div)
            } else if (div_bento[i] == "div2"){
                if( window.innerHeight > window.innerWidth ) {
                    div.style.gridArea = "6 / 1 / 11 / 13"
                } else {
                    div.style.gridArea = "11 / 1 / 21 / 11"
                }
                display_new_sizes_div(div)
            } else if (div_bento[i] == "div3"){
                if( window.innerHeight > window.innerWidth ) {
                    div.style.gridArea = "11 / 1 / 16 / 13"
                } else {
                    div.style.gridArea = "1 / 11 / 11 / 21"
                }
                display_new_sizes_div(div)
            } else if (div_bento[i] == "div9"){
                div.style.display = "grid"
                if( window.innerHeight > window.innerWidth ) {
                    div.style.gridArea = "16 / 1 / 21 / 13"
                } else {
                    div.style.gridArea = "11 / 11 / 21 / 21"
                }
                display_new_sizes_div(div)
            } else {
                div.style.opacity = 0;
            }
        }
    }, 600);
}
*/
/*
function mobile_click_on_div_exemples(){
    reset_height_width_div()

    setTimeout(() => { 
        for (const i in div_bento) {
            const div = document.querySelector(`.${div_bento[i]}`)
            if(div_bento[i] == "div1"){
                if( window.innerHeight > window.innerWidth ) {
                    div.style.gridArea = "1 / 1 / 11 / 10"
                } else {
                    div.style.gridArea = "1 / 1 / 21 / 6"
                }
                display_new_sizes_div(div)
            } else if (div_bento[i] == "div3"){
                if( window.innerHeight > window.innerWidth ) {
                    div.style.gridArea = "11 / 1 / 21 / 10"
                } else {
                    div.style.gridArea = "1 / 6 / 21 / 11"
                }
                display_new_sizes_div(div)
            } else if (div_bento[i] == "div8"){
                div.style.display = "block"
                if( window.innerHeight > window.innerWidth ) {
                    div.style.gridArea = "1 / 10 / 11 / 21"
                } else {
                    div.style.gridArea = "1 / 11 / 21 / 16"
                }
                
                display_new_sizes_div(div)
            } else if (div_bento[i] == "div9"){
                div.style.display = "block"
                if( window.innerHeight > window.innerWidth ) {
                    div.style.gridArea = "11 / 10 / 21 / 21"
                } else {
                    div.style.gridArea = "1 / 16 / 21 / 21"
                }
                display_new_sizes_div(div)
            } else {
                div.style.opacity = 0;
            }
        }
    }, 600);
}
*/
/*
function click_on_top_menu_event() { 
    if( navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
        a_propos_div.addEventListener('click', () => {mobile_click_on_div_a_propos()})
        avantages_site_immersifs_div.addEventListener("click", () => {mobile_click_on_div_avantages()})
        confiance_div.addEventListener("click", () => {mobile_click_on_div_realisations()})
        exemple_site.addEventListener("click", () => {mobile_click_on_div_exemples()})
        
    }
    else {
        a_propos_div.addEventListener('click', () => {click_on_div_a_propos()})
        avantages_site_immersifs_div.addEventListener("click", () => {click_on_div_avantages()})
        confiance_div.addEventListener("click", () => {click_on_div_realisations()})
        exemple_site.addEventListener("click", () => {click_on_div_exemples()})
    }
}

click_on_top_menu_event()
*/
// End old code 

// New code 

function elemnt_to_hide(){
    const element_to_hide = [".argument_container", ".realisations_container", ".parent_bento_first_section"]
    for (var i = 0; i < element_to_hide.length; i++) {
        const elem = document.querySelector(`${element_to_hide[i]}`)
        elem.style.opacity = "0"
        elem.style.display = "none"
    }
}


a_propos_div.addEventListener("click", () => {
    
    elemnt_to_hide()

    setTimeout(() => { 
        parent_bento_first_section.style.opacity = "0"
        argument_container.style.display = "block"
        setTimeout(() => {
            parent_bento_first_section.style.display = "none"
            argument_container.style.opacity = "1"
        }, 200);
    }, 500);
})

logo_div.addEventListener("click", () => {

    elemnt_to_hide()

    parent_bento_first_section.style.display = "grid"
    argument_container.style.opacity = "0"
    realisations_container.style.opacity = "0"
    setTimeout(() => {
        parent_bento_first_section.style.opacity = "1"
        argument_container.style.display = "none"
        realisations_container.style.display = "none"
    }, 200);
})

confiance_div.addEventListener("click", () => {

    elemnt_to_hide()

    setTimeout(() => { 
        parent_bento_first_section.style.opacity = "0"
        realisations_container.style.display = "block"
        setTimeout(() => {
            parent_bento_first_section.style.display = "none"
            realisations_container.style.opacity = "1"
        }, 200);
    }, 500);
});

