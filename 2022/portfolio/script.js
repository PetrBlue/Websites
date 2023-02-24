function zmenaBarvy() {
    console.log("kk")
    if (document.documentElement.style.color == "#000000") {
        document.documentElement.style.setProperty('--text-color', '#FFFFFF');
        document.documentElement.style.setProperty('--background-color', '#131217');
        document.documentElement.style.setProperty('--panel-color', '#090C9B');
    } else {
        console.log("ne")
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--background-color', '#F5F5F5');
        document.documentElement.style.setProperty('--panel-color', '#CC0000');
    }
}