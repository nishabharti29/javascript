let isLoggedIn = true;
let isAdmin = false ;

if (isLoggedIn && isAdmin) {
    console.log("welcome , administrator!");
} else if (isLoggedIn) {
    console.log("welcome, user!");
} else {
    console.log("please log in.")

}