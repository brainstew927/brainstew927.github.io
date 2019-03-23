
var user_glob;

function start() {
    console.log("avviato js");
}

function butt_click(pass, user) {
    console.log("premuto il bottone");

    try_log(user, pass);
}

function ret_user() {
    return user_glob;
}

function try_log(user, pass) {
    console.log("tentando di accedere con:");
    console.log("\tuser:  " + user);
    console.log("\tpass:  " + pass);

    if (user == "brain" && pass == "lol") {

        user_glob = user;

        textBx = document.getElementById("err");
/*
        textBx.hidden = false;
        textBx.isContentEditable = true;
        textBx.textContent = "ciao " + user;
*/      
        window.location.href = "sec.html"
    }
}

function sec_hand(user) {
    console.log("sosss:" + user);
}

function red(link) {
   
    console.log("redirecting to:" + link);

    window.open(link);
}
