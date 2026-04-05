// ------------------------------
// EMERGENCY BUTTONS
// ------------------------------

const fireBtn = document.querySelector(".fire");

fireBtn.addEventListener("click", () => {
    alert("🚨 Fire emergency alert sent to the warden and security!");
});


// ------------------------------
// STAR RATING SYSTEM
// ------------------------------

const stars = document.querySelectorAll(".stars i");
let rating = 0;

stars.forEach((star, index) => {

    star.addEventListener("click", () => {

        rating = index + 1;

        stars.forEach((s, i) => {

            if (i < rating) {
                s.classList.remove("fa-regular");
                s.classList.add("fa-solid");
                s.style.color = "#FFD700";
            } else {
                s.classList.remove("fa-solid");
                s.classList.add("fa-regular");
                s.style.color = "#999";
            }

        });

    });

});


// ------------------------------
// COMPLAINT SUBMISSION
// ------------------------------

const submitBtn = document.querySelector(".primary-btn");
const category = document.querySelector("select");
const roomInput = document.querySelector("input");
const description = document.querySelector("textarea");

const complaintContainer = document.querySelector(".card:nth-child(2)");

submitBtn.addEventListener("click", () => {

    if (category.value === "Select category..." || roomInput.value === "" || description.value === "") {
        alert("Please fill all complaint details!");
        return;
    }

    const newComplaint = document.createElement("div");
    newComplaint.classList.add("complaint");

    newComplaint.innerHTML = `
        <div>
            <h4>${description.value}</h4>
            <p>${category.value} - Room ${roomInput.value}</p>
        </div>
        <span class="pending">Pending</span>
    `;

    complaintContainer.appendChild(newComplaint);

    alert("✅ Complaint submitted successfully!");

    category.value = "Select category...";
    roomInput.value = "";
    description.value = "";

});


// ------------------------------
// MESS FEEDBACK BUTTON
// ------------------------------

const messBtn = document.querySelector(".mess .primary-btn");

messBtn.addEventListener("click", () => {

    if (rating === 0) {
        alert("Please select a star rating!");
        return;
    }

    alert("⭐ Thank you! Your mess feedback has been submitted.");

});
