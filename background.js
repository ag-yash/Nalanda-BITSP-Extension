
chrome.alarms.create('reloadWebsite', { periodInMinutes: 15 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'reloadWebsite') {
    chrome.tabs.query({ url: 'https://nalanda-aws.bits-pilani.ac.in/my/*' }, (tabs) => {
      tabs.forEach(tab => {
        chrome.tabs.reload(tab.id);
      });
    });
  }
});

chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: "https://nalanda-aws.bits-pilani.ac.in/my/" });
});