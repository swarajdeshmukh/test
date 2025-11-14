// Helper
function pad(n){ return n < 10 ? '0' + n : n; }

function updateClock(){
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const ampm = hours >= 12 ? 'PM' : 'AM';
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;

  const timeStr1 = `${pad(hour12)}`;
  const timeStr2 = `${pad(minutes)}`;

  document.getElementById('hr').textContent = timeStr1;

  // split minute string into characters
  let m1 = timeStr2[0];     // first digit
  let m2 = timeStr2[1];     // last digit

  // insert HTML — wrap last digit in span
  document.getElementById('min').innerHTML = `
      ${m1}<span style="color: #FFF59C;">${m2}</span>
  `;
}

updateClock();
setInterval(updateClock, 1000);
