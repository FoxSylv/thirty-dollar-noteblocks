browser.storage.local.get("isEnabled", (values) => {
    if (values.isEnabled || values.isEnabled === undefined) {
        //Favicon
        const link = document.querySelector("link[rel*='icon']");
        link.href = browser.runtime.getURL("data/images/enabled.png");

        //Title
        document.title = "DON'T YOU LECTURE ME WITH YOUR THIRTY DOLLAR NOTEBLOCKS";

        //Caption
        const caption = document.getElementsByClassName("title")[0];
        caption.innerHTML = `DON'T YOU LECTURE ME WITH YOUR THIRTY DOLLAR <img src=${browser.runtime.getURL("data/images/noteblock_harp.png")} alt="Noteblock image" style="height: 50px; margin-left: 6.9px; transform: translateY(25%);"></img>`;
        caption.removeAttribute("id");
        caption.style = "cursor: auto;";

        //Extension credits
        const credits = document.getElementsByClassName("credits")[0];
        credits.innerHTML = `<p>Original Website by <a target="_blank" href="https://twitter.com/TheRealGDColon">Colon</a>:</p>
                             <p>Extension by <a target="_blank" href="https://github.com/FoxSylv">FoxSylv</a> ^w^</p>`;
        credits.removeAttribute("style");
        var plznokill = document.createElement("div");
        plznokill.innerHTML = "<p>All sounds owned by Mojang please don't kill me >w<</p>";
        plznokill.setAttribute("class", "credits");
        plznokill.style = "margin-top: 0;";
        credits.after(plznokill);

        //Remove reference to "my" silly projects (to remove ambiguity)
        credits.previousElementSibling.remove();

        //Change social links to search for thirty dollar noteblocks
        const linkHeader = document.getElementsByClassName("socialLinks")[0];
        linkHeader.innerHTML = linkHeader.innerHTML.replace("website", "noteblocks");
        const socialLinks = document.getElementsByClassName("socialTag");
        for (var s = 0; s < socialLinks.length; ++s) {
            var newLink = socialLinks[s].firstChild.getAttribute("href").replace("website", "noteblocks");
            socialLinks[s].firstChild.setAttribute("href", newLink);
        }
    } //end if(values.isEnabled)
}); //end browser.storage.local.get()
