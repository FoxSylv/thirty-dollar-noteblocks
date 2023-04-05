browser.storage.local.get("isEnabled", (values) => {
    if (values.isEnabled) {
        //Remove error from the normal sounds not loading
        const errorBox = document.getElementById("iconboxLoading");
        errorBox.style = "display: none";

        //Add new sounds
        fetch(browser.extension.getURL("./data/noteblockJSON.json")).then(x => x.json()).then(list => {
            const icons = document.getElementById("icons");
            icons.setAttribute("class", "iconbox");
            list.forEach(sound => {
                let newIcon = document.createElement("div");
                newIcon.setAttribute("class", "sound");
                newIcon.setAttribute("soundname", sound.name);
                newIcon.setAttribute("soundorigin", sound.source);
                newIcon.setAttribute("sound", browser.extension.getURL(`./data/sounds/${sound.id}.ogg`));
                newIcon.setAttribute("str", sound.id);
                sound.tags.forEach((tag) => newIcon.setAttribute(`tag_${tag}`, ""));
                
                let img = document.createElement("img");
                img.setAttribute("alt", sound.name);
                img.setAttribute("src", browser.extension.getURL(`./data/images/${sound.id}.png`));
                newIcon.append(img);

                icons.append(newIcon);
            });
        });
    } //end if(values.isEnabled)
}); //end browser.storage.local.get()
