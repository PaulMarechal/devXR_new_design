const window_height = window.innerHeight
const a_propos_div = document.querySelector(".a_propos_div")
const avantages_site_immersifs_div = document.querySelector(".avantages_site_immersifs_div")
const confiance_div = document.querySelector(".confiance_div")
const exemple_site = document.querySelector(".exemple_site")
const parent_bento_first_section = document.querySelector(".parent_bento_first_section")

parent_bento_first_section.style.height = `${window_height * 0.85}px`

const div_bento = [
    "div1", "div2", 
    "div3", "div4", 
    "div5", "div6", 
    "div7", "div8", 
    "div9", "div10", 
    "div11"
]

function display_new_sizes_div(div){
    div.style.opacity = "0"
    div.style.height = "30%"
    div.style.width = "30%"
    setTimeout(() => {
        div.style.height = "100%"
        div.style.width = "100%"
        div.style.opacity = "1"
    }, 100);
}

function reset_height_width_div(){
    for (const i in div_bento) {
        const div = document.querySelector(`.${div_bento[i]}`)
        div.style.height = "30%"
        div.style.width = "30%"
        div.style.opacity = "0"
    }
}

function click_on_div_avantages(){
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

function click_on_div_realisations(){
    reset_height_width_div()
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

function click_on_div_exemples(){
    reset_height_width_div()
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

function click_on_div_a_propos(){
    reset_height_width_div()
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

a_propos_div.addEventListener('click', () => {click_on_div_a_propos()})
avantages_site_immersifs_div.addEventListener("click", () => {click_on_div_avantages()})
confiance_div.addEventListener("click", () => {click_on_div_realisations()})
exemple_site.addEventListener("click", () => {click_on_div_exemples()})