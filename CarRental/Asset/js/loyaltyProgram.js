function showScreen(screen) {
  const content = document.getElementById('screen-content');

  if (screen === 'points') {
    content.innerHTML = `
      <h2>Points Tracker</h2>
      <p>You earn <strong>1 point</strong> for every $1 spent on rentals.</p>
      <p>Total points: <strong>350</strong></p>
    `;
  } else if (screen === 'rewards') {
    content.innerHTML = `
      <h2>Reward Catalog</h2>
      <ul>
        <li>Free GPS upgrade - 100 points</li>
        <li>One-day free rental - 300 points</li>
        <li>Priority customer support - 150 points</li>
      </ul>
    `;
  } else if (screen === 'tiers') {
    content.innerHTML = `
      <h2>Tier Benefits</h2>
      <p>Track your progress to unlock more benefits:</p>
      <ul>
        <li><strong>Silver:</strong> 0 - 499 points (Basic perks)</li>
        <li><strong>Gold:</strong> 500 - 999 points (Free upgrades)</li>
        <li><strong>Platinum:</strong> 1000+ points (All premium perks)</li>
      </ul>
    `;
  }
}
