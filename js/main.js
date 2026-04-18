function getMessageFromUrl() {
  const defaultMessage = 'I love you lots, but';
  const params = new URLSearchParams(window.location.search);
  let message = params.get('message');

  if (!message) {
    return defaultMessage;
  }

  message = message.trim();

  if (
    (message.startsWith("'") && message.endsWith("'")) ||
    (message.startsWith('"') && message.endsWith('"'))
  ) {
    message = message.slice(1, -1).trim();
  }

  return message || defaultMessage;
}

window.addEventListener('load', () => {
  const messageElement = document.getElementById('page-message');
  const message = getMessageFromUrl();

  if (messageElement) {
    messageElement.textContent = message;
    document.title = message;
  }

  document.body.classList.add('loaded');
});
