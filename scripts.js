document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents actual form submission

        // Create the pop-up container
        let popup = document.createElement("div");
        popup.classList.add("popup");

        // Pop-up content
        popup.innerHTML = `
            <div class="popup-content">
                <span class="popup-icon">✔</span>
                <p>Thanks for leaving a recommendation!</p>
                <button class="popup-btn">Ok</button>
            </div>
        `;
        document.body.appendChild(popup);

        // Close pop-up when "Ok" button is clicked
        let popupBtn = popup.querySelector(".popup-btn");
        popupBtn.addEventListener("click", function () {
            popup.remove();
        });
    });
});
