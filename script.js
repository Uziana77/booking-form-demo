let currentStep = 1;

function changeStep(stepChange) {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    document.querySelector(`.step[data-step="${currentStep}"]`).classList.remove('active');

    currentStep += stepChange;

    document.getElementById(`step-${currentStep}`).classList.add('active');
    document.querySelector(`.step[data-step="${currentStep}"]`).classList.add('active');

    document.getElementById('prevBtn').disabled = (currentStep === 1);
    document.getElementById('nextBtn').innerText = (currentStep === 6) ? 'Confirm Booking' : 'Next';
}

function lookupCar() {
    document.getElementById('car-result').classList.remove('hidden');
}

function toggleSelect(el) {
    el.classList.toggle('selected');
}

function nextStepAuto() {
    changeStep(1);
}

function openTimePicker(el) {
    document.querySelectorAll('.dot').forEach(d => d.classList.remove('blue'));
    el.classList.add('blue');
    document.getElementById('time-picker').classList.remove('hidden');
}