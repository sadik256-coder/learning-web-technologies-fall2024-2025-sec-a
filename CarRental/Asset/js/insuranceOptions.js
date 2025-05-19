function showScreen(screen) {
  let content = document.getElementById('screen-content');

  if (screen === 'coverage') {
    content.innerHTML = `
      <h2>Compare Coverage Tiers</h2>
      <ul>
        <li>Basic: Low coverage, low premium</li>
        <li>Standard: Medium coverage, medium premium</li>
        <li>Premium: Full coverage, high premium</li>
      </ul>
    `;
  } else if (screen === 'terms') {
    content.innerHTML = `
      <h2>View Deductible Amounts</h2>
      <p>Basic: Bdt1000 deductible<br>Standard: Bdt5000 deductible<br>Premium: Bdt10000 deductible</p>
    `;
  } else if (screen === 'claim') {
    content.innerHTML = `
      <h2>Claim Examples</h2>
      <p>Example: Accident with Bdt20000 damage.<br>Standard Plan pays Bdt5000 after Bdt1000 deductible.</p>
    `;
  }
}
