const update_header = document.onscroll = () => {
    const BIG_HEADER = "big-header"
    const header = document.querySelector("body > header")
    
    if (document.scrollingElement.scrollTop > 0) {
        if (header.classList.contains(BIG_HEADER))
            header.classList.remove(BIG_HEADER)
        return
    }

    if (!header.classList.contains(BIG_HEADER))
        header.classList.add(BIG_HEADER)
}

update_header()

const replace_product = product_class => {
    document.querySelector(".products > main > div.show").classList.remove("show")
    document.querySelector(`.products > main > div.${product_class}`).classList.add("show")
}