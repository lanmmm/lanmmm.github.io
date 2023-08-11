var last_t;     //上一帧执行时的时间戳

// 数据类型转换函数：从css样式获取的末尾带有单位"px"的字符串转化为 Number 类型
function TYPE_TRANSLATE_StringWithPX_to_Number(_s) {
    return Number(_s.substring(0, _s.length - 2));
}

// 数值生成函数：根据动画总时长及总变化量生成该帧单位变化量
function NUMBER_GENERATE_EverySingleFrame(_tot, _tot_t, _delta_t) {
    return _tot * (_delta_t / _tot_t);
}

// 动画单元函数：对传入的对象执行特定操作【进入动画】以生成新的一帧
function ANIM_in(cur_obj, delta_t) {
    if (cur_obj.pos < 0) {
        cur_obj.pos += NUMBER_GENERATE_EverySingleFrame(cur_obj.hgt, 200, delta_t);
        cur_obj.cur.style.bottom = cur_obj.pos + 'px';
    } else {
        inAnimActive[cur_obj._id] = false;
        cur_obj.cur.style.bottom = '0px';
    }
    return;
}

// 动画单元函数：对传入的对象执行特定操作【离开动画】以生成新的一帧
function ANIM_out(cur_obj, delta_t) {
    if (cur_obj.pos + cur_obj.hgt > 0) {
        cur_obj.pos -= NUMBER_GENERATE_EverySingleFrame(cur_obj.hgt, 200, delta_t);
        cur_obj.cur.style.bottom = cur_obj.pos + 'px';
    } else {
        inAnimActive[cur_obj._id] = false;
        cur_obj.cur.style.bottom = -cur_obj.hgt + 'px';
    }
    return;
}

// 分别获取三个文本区域并封装为对象
Obj_Left = new Object();
Obj_Left.cur = document.getElementById("homepageLeftShowcaseTitle");
Obj_Left.hgt = TYPE_TRANSLATE_StringWithPX_to_Number(getComputedStyle(Obj_Left.cur).height);
Obj_Left.pos = TYPE_TRANSLATE_StringWithPX_to_Number(getComputedStyle(Obj_Left.cur).bottom);
Obj_Left._id = 2;
Obj_Right = new Object();
Obj_Right.cur = document.getElementById("homepageRightShowcaseTitle");
Obj_Right.hgt = TYPE_TRANSLATE_StringWithPX_to_Number(getComputedStyle(Obj_Right.cur).height);
Obj_Right.pos = TYPE_TRANSLATE_StringWithPX_to_Number(getComputedStyle(Obj_Right.cur).bottom);
Obj_Right._id = 3;
Obj_Center = new Object();
Obj_Center.cur = document.getElementById("homepageCenterShowcaseTitle");
Obj_Center.hgt = TYPE_TRANSLATE_StringWithPX_to_Number(getComputedStyle(Obj_Center.cur).height);
Obj_Center.pos = TYPE_TRANSLATE_StringWithPX_to_Number(getComputedStyle(Obj_Center.cur).bottom);
Obj_Center._id = 1;

// 出入动画活动状态
var inAnimActive = [0, 0, 0, 0];
var outAnimActive = [0, 0, 0, 0];

// 直接响应函数：接收来自 html 文档传入的用户操作信息，执行对应操作【应用进入动画】
function movein_showcasetitle(cur_showcase) {
    Obj_Center.pos = TYPE_TRANSLATE_StringWithPX_to_Number(getComputedStyle(Obj_Center.cur).bottom);
    Obj_Right.pos = TYPE_TRANSLATE_StringWithPX_to_Number(getComputedStyle(Obj_Right.cur).bottom);
    Obj_Left.pos = TYPE_TRANSLATE_StringWithPX_to_Number(getComputedStyle(Obj_Left.cur).bottom);
    inAnimActive[cur_showcase] = true;
    outAnimActive[cur_showcase] = false;
    last_t = performance.now();
    requestAnimationFrame(anim_showcasetitle);
    return;
}
// 直接响应函数：接收来自 html 文档传入的用户操作信息，执行对应操作【应用离开动画】
function moveout_showcasetitle(cur_showcase) {
    Obj_Center.pos = TYPE_TRANSLATE_StringWithPX_to_Number(getComputedStyle(Obj_Center.cur).bottom);
    Obj_Right.pos = TYPE_TRANSLATE_StringWithPX_to_Number(getComputedStyle(Obj_Right.cur).bottom);
    Obj_Left.pos = TYPE_TRANSLATE_StringWithPX_to_Number(getComputedStyle(Obj_Left.cur).bottom);
    inAnimActive[cur_showcase] = false;
    outAnimActive[cur_showcase] = true;
    last_t = performance.now();
    requestAnimationFrame(anim_showcasetitle);
    return;
}

// 动画操作回调函数：由requestAnimationFrame(callback)函数调用，根据状态信息调用动画单元函数
function anim_showcasetitle(_t) {
    //更新时间信息
    let delta_t = _t - last_t;
    last_t = _t;
    //根据动画活动状态进行调用
    if (inAnimActive[1]) {
        ANIM_in(Obj_Center, delta_t);
    } else if (outAnimActive[1]) {
        ANIM_out(Obj_Center, delta_t);
    }
    if (inAnimActive[2]) {
        ANIM_in(Obj_Left, delta_t);
    } else if (outAnimActive[2]) {
        ANIM_out(Obj_Left, delta_t);
    }
    if (inAnimActive[3]) {
        ANIM_in(Obj_Right, delta_t);
    } else if (outAnimActive[3]) {
        ANIM_out(Obj_Right, delta_t);
    }
    //检查活动状态判断是否需要继续递归
    let flg = false;
    for (let i = 1; i <= 3; i++) flg |= inAnimActive[i];
    for (let i = 1; i <= 3; i++) flg |= outAnimActive[i];
    if (flg) requestAnimationFrame(anim_showcasetitle);
    return;
}