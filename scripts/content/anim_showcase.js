var panel_main = document.getElementById("contentpageMain");
var panel_sight = document.getElementById("contentpageSight");
var panel_sub = document.getElementById("contentpageSub");

var opc = 1.0;
var blr = 10;

var appear = false;
var disappear = false;

var t_last;

function GENERATOR_tween(_tot_x, _tot_t, _delta_t) {
    return _tot_x * _delta_t / _tot_t;
}

function TRANSLATE_pixel_to_number(str) {
    return Number(str.substring(0, str.length - 2));
}

function CTRL_SightEnter() {
    t_last = performance.now();
    disappear = true;
    appear = false;
    requestAnimationFrame(callback);
    return;
}

function CTRL_SightLeave() {
    t_last = performance.now();
    disappear = false;
    appear = true;
    requestAnimationFrame(callback);
    return;
}

function ANIM_appear(delta_t) {
    opc += GENERATOR_tween(0.9, 300, delta_t);
    blr += GENERATOR_tween(10, 300, delta_t);
    if (opc >= 1.0) opc = 1.0;
    if (blr >= 10) blr = 10;
    if (opc >= 1.0 && blr >= 10) appear = false;
    refresh();
    return;
}

function ANIM_disappear(delta_t) {
    opc -= GENERATOR_tween(0.9, 300, delta_t);
    blr -= GENERATOR_tween(10, 300, delta_t);
    if (opc <= 0.1) opc = 0.1;
    if (blr <= 0.0) blr = 0.0;
    if (opc <= 0.1 && blr <= 0.0) disappear = false;
    refresh();
    return;
}

function refresh() {
    panel_main.style.opacity = opc;
    panel_main.style.backdropFilter = 'blur(' + Math.ceil(blr) + 'px)';
    panel_sight.style.opacity = opc;
    panel_sight.style.backdropFilter = 'blur(' + Math.ceil(blr) + 'px)';
    panel_sub.style.opacity = opc;
    panel_sub.style.backdropFilter = 'blur(' + Math.ceil(blr) + 'px)';
}

function callback(_t) {
    let delta_t = _t - t_last;
    t_last = _t;

    if (appear) {
        ANIM_appear(delta_t);
    }
    else if (disappear) {
        ANIM_disappear(delta_t);
    }

    if (appear || disappear) requestAnimationFrame(callback);
    return;
}