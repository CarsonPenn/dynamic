let participantCount = 1;

function participantTemplate(count) {
  return `
    <section class="participant${count}">
      <p><strong>Participant ${count}</strong></p>
      <div class="item">
        <label for="fname${count}">First Name<span>*</span></label>
        <input id="fname${count}" type="text" name="fname${count}" required>
      </div>
      <div class="item activities">
        <label for="activity${count}">Activity #<span>*</span></label>
        <input id="activity${count}" type="text" name="activity${count}">
      </div>
      <div class="item">
        <label for="fee${count}">Fee ($)<span>*</span></label>
        <input id="fee${count}" type="number" name="fee${count}">
      </div>
      <div class="item">
        <label for="date${count}">Desired Date <span>*</span></label>
        <input id="date${count}" type="date" name="date${count}">
      </div>
      <div class="item">
        <p>Grade</p>
        <select id="grade${count}" name="grade${count}">
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="5">5th</option>
          <option value="6">6th</option>
          <option value="7">7th</option>
          <option value="8">8th</option>
          <option value="9">9th</option>
          <option value="10">10th</option>
          <option value="11">11th</option>
          <option value="12">12th</option>
        </select>
      </div>
      
    </section>
  `;
}

document.getElementById("add").addEventListener("click", () => {
  participantCount++;
  const participantSection = participantTemplate(participantCount);
  document.querySelector(".participants").insertAdjacentHTML("beforeend", participantSection);
  
  // Ensure the button remains at the bottom of the participants section
  const addButton = document.getElementById("add");
  addButton.scrollIntoView({ behavior: 'smooth', block: 'end' });
});

function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements];
  return feeElements.reduce((total, feeInput) => total + parseFloat(feeInput.value || 0), 0);
}

function successTemplate(info) {
  return `
    <p>Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.feeTotal} in fees.</p>
  `;
}

function submitForm(event) {
  event.preventDefault();

  const adultName = document.getElementById("adult_name").value;
  const total = totalFees();

  const summary = document.getElementById("summary");
  summary.innerHTML = successTemplate({
    name: adultName,
    participants: participantCount,
    feeTotal: total
  });

  document.querySelector("form").style.display = "none";
  summary.style.display = "block";
}

document.querySelector("form").addEventListener("submit", submitForm);
