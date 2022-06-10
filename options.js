// Saves options to chrome.storage
function save_options() {
  var enable = document.getElementById('enable').checked;
  var log_req = document.getElementById('log_req').checked;
  chrome.storage.local.set({
    enable: enable,
    log_req: log_req
  });
}

// Restores checkbox state using the options stored in chrome.storage.
function restore_options() {
  // Use default value enable = true and block_60fps = false
  chrome.storage.local.get({
    enable: true,
    block_60fps: false,
    battery_only: false,
  }, function(options) {
    document.getElementById('enable').checked = options.enable;
    document.getElementById('log_req').checked = options.block_60fps;
  });
}

// Restore saved options when extension is loaded
document.addEventListener('DOMContentLoaded', restore_options);

// Save options when checkboxes are clicked
var checkboxes = document.getElementsByClassName('checkbox');
for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('click', save_options)
}

// l10n
for (let element of document.querySelectorAll('[data-l10n-id]')) {
  element.textContent = chrome.i18n.getMessage(element.dataset.l10nId);
}
