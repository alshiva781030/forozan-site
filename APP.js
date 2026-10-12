
//const moreButton = document.getElementById("moreButton");
//const description = document.getElementById("description");

//moreButton.addEventListener("click", function () {
 //   description.textContent = "در پلتفرم تحلیلگران فجورا می‌توانید با شرکت‌ها، محصولات و خدمات آن‌ها آشنا شوید.";
//});



//const moreButton = document.getElementById("moreButton");

//moreButton.addEventListener("click", function () {
   // alert("به پلتفرم تحلیلگرن فجورا خوش آمدید! در اینجا می‌توانید شرکت‌ها و خدمات آن‌ها را پیدا کنید.");
//});


//const moreButton = document.getElementById("moreButton");
//const companyPopup = document.getElementById("companyPopup");

//moreButton.addEventListener("click", function () {
   // companyPopup.hidden = false;
//});



//const moreButton = document.getElementById("moreButton");
//const companyPopup = document.getElementById("companyPopup");
//const closePopup = document.getElementById("closePopup");

// باز کردن پاپ‌آپ
//moreButton.addEventListener("click", function () {
   // companyPopup.hidden = false;
//});

// بستن پاپ‌آپ
//closePopup.addEventListener("click", function () {
   // companyPopup.hidden = true;
//});



const moreButton = document.getElementById("moreButton");
const companyPopup = document.getElementById("companyPopup");
const closePopup = document.getElementById("closePopup");
const popupOverlay = document.getElementById("popupOverlay");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");
const companyButtons = document.querySelectorAll(".view-company");


moreButton.addEventListener("click", function () {
    popupTitle.textContent = "درباره پلتفرم تحلیلگران فجورا";

    popupDescription.textContent =
        "در تحلیلگران فجورا می‌توانید شرکت‌ها، محصولات و خدمات کسب‌وکارها را پیدا و بررسی کنید.";

    companyPopup.hidden = false;
    popupOverlay.hidden = false;
});


// بستن پاپ‌آپ
closePopup.addEventListener("click", function () {
    companyPopup.hidden = true;
    popupOverlay.hidden = true;
});

popupOverlay.addEventListener("click", function () {
    companyPopup.hidden = true;
    popupOverlay.hidden = true;
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        companyPopup.hidden = true;
        popupOverlay.hidden = true;
    }
});


companyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        popupTitle.textContent = button.dataset.name;
        popupDescription.textContent = button.dataset.description;

        companyPopup.hidden = false;
        popupOverlay.hidden = false;
    });
});