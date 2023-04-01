browser.storage.local.get("isEnabled", (values) => {
    if (values.isEnabled) {
        //For testing
        document.body.style.border = "5px solid red";
    }
});
