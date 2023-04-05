browser.storage.local.get("isEnabled", (values) => {
    if (values.isEnabled) {
        //Remove error from the normal sounds not loading
        const errorBox = document.getElementById("iconboxLoading");
        errorBox.style = "display: none";
    } //end if(values.isEnabled)
}); //end browser.storage.local.get()
