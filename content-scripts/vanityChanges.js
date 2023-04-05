browser.storage.local.get("isEnabled", (values) => {
    if (values.isEnabled) {
        //Favicon
        const link = document.querySelector("link[rel*='icon']");
        link.href = browser.runtime.getURL("icons/enabled.png");

        //Title
        document.title = "DON'T YOU LECTURE ME WITH YOUR THIRTY DOLLAR NOTEBLOCKS";

        //Caption
        const caption = document.getElementsByClassName("title")[0];
        caption.innerHTML = `DON'T YOU LECTURE ME WITH YOUR THIRTY DOLLAR <img src=${browser.runtime.getURL("icons/noteblock.webp")} alt="Noteblock image" style="height: 50px; margin-left: 6.9px; transform: translateY(25%);"></img>`;
        caption.removeAttribute("id");
        caption.style = "cursor: auto;";
    } //end if(values.isEnabled)
}); //end browser.storage.local.get()
