const ENABLED_ICON = "icons/enabled.png";
const DISABLED_ICON = "icons/disabled.png";


function setIcon(icon) {
    browser.browserAction.setIcon({
        path: {
            48: icon
        }
    });
}

browser.browserAction.onClicked.addListener(() => {
    browser.storage.local.get("isEnabled", (values) => {
        var isEnabled = values.isEnabled;
        if (isEnabled === undefined) {
            isEnabled = true;
        }

        if (isEnabled) {
            setIcon(DISABLED_ICON);
            console.log("Extension disabled");
        }
        else {
            setIcon(ENABLED_ICON);
            console.log("Extension enabled");
        }
        browser.storage.local.set({"isEnabled": !isEnabled});
        browser.tabs.reload();
    });
});
