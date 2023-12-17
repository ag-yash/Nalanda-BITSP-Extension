chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: "https://nalanda-aws.bits-pilani.ac.in/my/" });
});