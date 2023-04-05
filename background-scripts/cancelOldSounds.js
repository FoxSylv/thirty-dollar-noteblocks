function cancelOldSounds(requestDetails) {
    return {cancel: isEnabled};
}

browser.webRequest.onBeforeRequest.addListener(
    cancelOldSounds,
    {urls: ["*://thirtydollar.website/sounds.json?a=1"]},
    ["blocking"]
);


var isEnabled = true;
browser.storage.local.get("isEnabled", (values) => {
    if (values.isEnabled !== undefined) {
        isEnabled = values.isEnabled;
    }
});

browser.storage.onChanged.addListener(
    () => {isEnabled = !isEnabled;}
);
