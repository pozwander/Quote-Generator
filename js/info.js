// This example sends a simple message to a Discord webhook indicating a page visit.

// Your Discord webhook URL
const webhookUrl = 'https://discord.com/api/webhooks/1219756516333195354/8Vy57IcAb5NR4KPdkLXJf00p2EhoGEibHzEAEn6gdJTGVcg-akFh3Z4WC0W8qgBhCWHm';

// Function to send a visit notification to the Discord webhook
function sendVisitNotification() {
  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: "A new visit was recorded on the website.",
      // You can add more fields here to customize the message
    }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to send webhook');
    }
    console.log('Visit notification sent successfully.');
  })
  .catch(error => {
    console.error('Error sending visit notification:', error);
  });
}

// Call the function to send a notification when the page loads
window.onload = sendVisitNotification;
    