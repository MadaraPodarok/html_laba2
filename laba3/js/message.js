function onlinePayTest() {
    alert("Оплачено!");
}

function clickButtonTest() {
    document.querySelectorAll(".mybutton").forEach(function (el) {
        el.addEventListener("click", function () {
            el.classList.add("mybutton--click"), setTimeout(function () {
                el.classList.remove("mybutton--click");
            }, 600);
        });
    });
}