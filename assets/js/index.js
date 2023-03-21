const gunshot = $("#gunshot");

let intervalID = null;

function fire1(){
    gunshot[0].currentTime = 0;
    gunshot[0].play();

    $("#bolt").addClass("bolt-animate");
    $("#m4-container").addClass("recoil-animate");
    $("#muzzle-flash").addClass("flash-animate");
    $("#trigger").addClass("trigger-animate")

    let casing = `
        <div class="casing casing-animate">
            <div id="primer"></div>
            <div id="casing-body"></div>
        </div>
    `;

    setTimeout(() => {
        $("#casing-div").append(casing);
    }, 50);

    setTimeout(() => {
        $("#bolt").removeClass("bolt-animate");
        $("#m4-container").removeClass("recoil-animate");
        $("#muzzle-flash").removeClass("flash-animate");
        $("#trigger").removeClass("trigger-animate")
    }, 100);
}

function autoFire() {
    intervalID = setInterval(fire1, 130);
}

$("#auto-btn").mousedown(function(e) {
    if (e.button === 0) {
        autoFire();
    }
});

$(document).mouseup(function(e) {
    if (e.button === 0) {
        clearInterval(intervalID);
    }
});

$("#fire-btn").on("click", fire1);
