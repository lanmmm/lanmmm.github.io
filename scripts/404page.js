var last_t, background, button;

function RUN() {
    background = document.getElementById("background");
    button = document.getElementById("button_return");

    last_t = performance.now();
    requestAnimationFrame(callback);
    return;
}


// 数据类型转换函数：从css样式获取的末尾带有单位"px"的字符串转化为 Number 类型
function STYLE_TO_NUM(_s) {
    return Number(_s.substring(0, _s.length - 2));
}
// 数值生成函数：根据动画总时长及总变化量生成该帧单位变化量
function GENERATOR_EveryFrame(_tot_x, _tot_t, _delta_t) {
    return _tot_x * _delta_t / _tot_t;
}


function ANIM_background(delta_t) {
    let pos = STYLE_TO_NUM(getComputedStyle(background).left);
    pos -= GENERATOR_EveryFrame(256, 1000, delta_t);
    pos %= 128;
    background.style.left = pos + 'px';
    return;
}


function callback(_t) {
    let delta_t = _t - last_t;
    last_t = _t;
    
    ANIM_background(delta_t);
    
    requestAnimationFrame(callback);
    return;
}