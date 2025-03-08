// background.js

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed.');
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'authenticate') {
      chrome.identity.launchWebAuthFlow(
        {
          url: 'https://your-authentication-url.com',
          interactive: true
        },
        (redirectUrl) => {
          if (chrome.runtime.lastError || !redirectUrl) {
            console.error(chrome.runtime.lastError);
            sendResponse({ success: false });
          } else {
            // Process the redirectUrl to extract tokens if necessary
            // For example, parse the URL to get an access token
            const accessToken = new URL(redirectUrl).searchParams.get('access_token');
            if (accessToken) {
              // Store the access token securely
              // Redirect to the desired page
              chrome.tabs.create({ url: 'https://your-redirect-url.com' });
              sendResponse({ success: true });
            } else {
              sendResponse({ success: false });
            }
          }
        }
      );
      return true; // Indicates that the response is asynchronous
    }
  });
  