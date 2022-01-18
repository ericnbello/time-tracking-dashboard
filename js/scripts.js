function toggleInterval(interval) {
    const daily = document.getElementsByClassName("daily");
    const weekly = document.getElementsByClassName("weekly");
    const monthly = document.getElementsByClassName("monthly");

    for (var i = 0; i < daily.length; i++) {
        if(interval==="daily"){
            daily[i].style.display = "flex";
            weekly[i].style.display = "none";
            monthly[i].style.display = "none";
        }
        else if (interval==="weekly") {
            weekly[i].style.display = "flex";
            daily[i].style.display = "none";
            monthly[i].style.display = "none";
        }
        else if (interval==="monthly") {
            monthly[i].style.display = "flex";
            daily[i].style.display = "none";
            weekly[i].style.display = "none";
        }
        else {
            daily[i].style.display = "none";
            weekly[i].style.display = "none";
            monthly[i].style.display = "none";
        }
    };
};