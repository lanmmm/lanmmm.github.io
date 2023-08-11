var time_last;
var blur_pixel = 0;
var SCREEN_HEIGHT;
// 动画状态 [上拉按钮展开状态，上拉按钮收起状态，下拉按钮展开状态，下拉按钮收起状态，窗口展开状态，窗口收起状态]
// 请注意，此状态为动画状态，仅在动画播放时激活，动画播放完毕时应关闭
var animStatus = [false, false, false, false, false, false];
// 窗口状态，[展示窗状态，上拉按钮展示状态，下拉按钮展示状态]
var activeStatus = [false, false, false];
var button_appear = document.getElementById("homepageAboutButtonAppear_Enabled");
var button_disappear = document.getElementById("homepageAboutButtonDisAppear_Enabled");
var blurLayer = document.getElementById("blurLayer");
var showcase = document.getElementById("homepageAboutShowcase");


// 数据类型转换函数：从css样式获取的末尾带有单位"px"的字符串转化为 Number 类型
function TYPE_TRANSLATE_StringWithPX_to_Number(_s) {
    return Number(_s.substring(0, _s.length - 2));
}
// 数值生成函数：根据动画总时长及总变化量生成该帧单位变化量
function NUMBER_GENERATE_EverySingleFrame(_tot_x, _tot_t, _delta_t) {
    return _tot_x * _delta_t / _tot_t;
}


// 控制函数：接受来自 html 的调用，激活对应的动画
function CONTROL_aboutpageAppear() {
    if (!activeStatus[0]) {
        showcase.style.position = "absolute";
        blurLayer.style.visibility = "visible";
        activeStatus[0] = true;
        activeStatus[1] = false;
        animStatus[0] = false;
        animStatus[1] = true;
        animStatus[4] = true;
        animStatus[5] = false;
    } else {
        showcase.style.position = "fixed";
        activeStatus[0] = false;
        activeStatus[2] = false;
        animStatus[2] = false;
        animStatus[3] = true;
        animStatus[5] = true;
        animStatus[4] = false;
    }
    time_last = performance.now();
    requestAnimationFrame(anim_callback);
}
function CONTROL_aboutpageAppearButton_Enabled() {
    if (!activeStatus[0]) {
        animStatus[0] = true;
        animStatus[1] = false;
        activeStatus[1] = true;
    } else {
        animStatus[2] = true;
        animStatus[3] = false;
        activeStatus[2] = true;
    }
    time_last = performance.now();
    requestAnimationFrame(anim_callback);
}
function CONTROL_aboutpageAppearButton_Unabled() {
    if (!activeStatus[0]) {
        animStatus[1] = true;
        animStatus[0] = false;
        activeStatus[1] = false;
    } else {
        animStatus[3] = true;
        animStatus[2] = false;
        activeStatus[2] = false;
    }
    time_last = performance.now();
    requestAnimationFrame(anim_callback);
}


// 动画单元函数：分别控制各个动画的逐帧变换
function ANIM_ButtonEnable(button, delta_t) {
    let _h = TYPE_TRANSLATE_StringWithPX_to_Number(getComputedStyle(button).height);
    let _pos = TYPE_TRANSLATE_StringWithPX_to_Number(getComputedStyle(button).top);
    if (_pos < 0) {
        button.style.top = _pos + NUMBER_GENERATE_EverySingleFrame(_h, 100, delta_t) + 'px';
    } else {
        for (let i = 0; i < 4; i++) animStatus[i] = false;
        button.style.top = '0px';
    }
    return;
}
function ANIM_ButtonUnable(button, delta_t) {
    let _h = TYPE_TRANSLATE_StringWithPX_to_Number(getComputedStyle(button).height);
    let _pos = TYPE_TRANSLATE_StringWithPX_to_Number(getComputedStyle(button).top);
    if (_pos + _h > 0) {
        button.style.top = _pos - NUMBER_GENERATE_EverySingleFrame(_h, 100, delta_t) + 'px';
    } else {
        for (let i = 0; i < 4; i++) animStatus[i] = false;
        button.style.top = -_h + 'px';
    }
    return;
}
function ANIM_ShowcaseEnable(delta_t) {
    let _pos = TYPE_TRANSLATE_StringWithPX_to_Number(getComputedStyle(showcase).top);
    SCREEN_HEIGHT = document.body.clientHeight;
    if (_pos - SCREEN_HEIGHT * 0.15 > 0) {
        _pos -= NUMBER_GENERATE_EverySingleFrame(SCREEN_HEIGHT * 0.85 - 50, 150, delta_t);
        blur_pixel += NUMBER_GENERATE_EverySingleFrame(20, 150, delta_t);
        showcase.style.top = _pos + 'px';
        blurLayer.style.backdropFilter = "blur(" + Math.floor(blur_pixel) + "px)";
    } else {
        blurLayer.style.backdropFilter = "blur(20px)";
        showcase.style.top = Math.ceil(SCREEN_HEIGHT * 0.15) + 'px';
        animStatus[4] = false;
    }
    return;
}
function ANIM_ShowcaseUnable(delta_t) {
    let _pos = TYPE_TRANSLATE_StringWithPX_to_Number(getComputedStyle(showcase).top);
    SCREEN_HEIGHT = document.body.clientHeight;
    if (SCREEN_HEIGHT - _pos > 50) {
        _pos += NUMBER_GENERATE_EverySingleFrame(SCREEN_HEIGHT * 0.85 - 50, 150, delta_t);
        blur_pixel -= NUMBER_GENERATE_EverySingleFrame(20, 150, delta_t);
        showcase.style.top = _pos + 'px';
        blurLayer.style.backdropFilter = "blur(" + Math.floor(blur_pixel) + "px)";
    } else {
        blurLayer.style.backdropFilter = "blur(0px)";
        blurLayer.style.visibility = "hidden";
        showcase.style.top = '100%';
        animStatus[5] = false;
    }
    return;
}


// 动画回调函数：每帧被调用一次，调用被激活的动画单元
function anim_callback(_t) {
    // 更新时间戳
    let delta_t = _t - time_last;
    time_last = _t;

    if (animStatus[0]) {
        ANIM_ButtonEnable(button_appear, delta_t);
    } else if (animStatus[1]) {
        ANIM_ButtonUnable(button_appear, delta_t);
    } else if (animStatus[2]) {
        ANIM_ButtonEnable(button_disappear, delta_t);
    } else if (animStatus[3]) {
        ANIM_ButtonUnable(button_disappear, delta_t);
    }

    if (animStatus[4]) {
        ANIM_ShowcaseEnable(delta_t);
    } else if (animStatus[5]) {
        ANIM_ShowcaseUnable(delta_t);
    }

    // 上下拉按钮特判复位
    if (!activeStatus[1] && !animStatus[0] && !animStatus[1]) {
        button_appear.style.top = -TYPE_TRANSLATE_StringWithPX_to_Number(getComputedStyle(button_appear).height) + 'px';
    }
    if (!activeStatus[2] && !animStatus[2] && !animStatus[3]) {
        button_disappear.style.top = -TYPE_TRANSLATE_StringWithPX_to_Number(getComputedStyle(button_disappear).height) + 'px';
    }

    // 检验是否需要执行下一帧
    let flg = false;
    for (let i = 0; i < 6; i++) flg |= animStatus[i];
    if (flg) requestAnimationFrame(anim_callback);
    return;
}