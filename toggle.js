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
        console.log(isEnabled);
        if (isEnabled === undefined) {
            isEnabled = true;
        }
        console.log(isEnabled);

        if (isEnabled) {
            setIcon(DISABLED_ICON);
        }
        else {
            setIcon(ENABLED_ICON);
        }
        browser.storage.local.set({"isEnabled": !isEnabled});
        browser.tabs.reload();
    });
});
