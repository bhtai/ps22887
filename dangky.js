function formRegister() {
    // hợp lệ họ
    let txt_ho = document.forms["register"]["lastName"];
    let msg = document.getElementById("message");
    msg.style.color = "red";
    msg.style.fontStyle = "Italic";
    if (txt_ho.value == "") {
        msg.innerText = "Họ tên không được để trống.";
        return false;
    } else {
        msg.innerText = "";
    }
    // hợp lệ bổ sung
    let bo_sung = document.forms["register"]["bosung"];
    if (bo_sung.value < 4 || bo_sung.value > 1000) {
        msg.innerText = "Hãy nhập thông tin bổ sung từ 4 đến 1000 ký tự";
        return false;
    } else {
        msg.innerText = "";
    }
    // hợp lệ tỉnh
    let chon_tinh = document.forms["register"]["tinh"];
    if (chon_tinh.value == 0) {
        msg.innerText = "Bạn chưa chọn tỉnh";
    } else {
        msg.innerText = "";
    }
    // hợp lệ quốc tịch
    let chon_quoc_tich = document.forms["register"]["quoctich"];
    if (chon_quoc_tich.value == 0) {
        msg.innerText = "Bạn chưa chọn quốc tịch";
    } else {
        msg.innerText = "";
    }


    // hợp lệ giới tính 

    let gender = document.forms["register"]["gender"];
    if (!gender[0].checked && !gender[1].checked) {
        msg.innerText = "Giới tính phải được chọn.";
        return false;
    }

    // hợp lệ sdt

    let cellphone = document.forms["register"]["cellphone"];
    if (cellphone.value.length == 0) {
        msg.innerHTML += "<p>Điện thoại không được để trống.</p>"
        fValid = false;
    } else {
        if (cellphone.value.length < 10 || cellphone.value.length > 11) {
            msg.innerHTML += "<p>Điện thoại phải có từ 10 đến 11 ký tự số !</p>";
            fValid = false;
        } else {
            msg.innerText += "";
            fValid = true;
        }
    }


    // hợp lệ sở thích

    let hobbyArr = document.forms["register"]["hobby"];
    let i = 0;

    while (i < hobbyArr.length) {
        if (hobbyArr[i].checked == true) {
            break;
        }
        i++
    }
    if (i == hobbyArr.length) {
        msg.innerText = "BẠN PHẢI CÓ ÍT NHẤT MỘT SỞ THÍCH";
        return false;
    }

    if (msg.innerText == "") {
        msg.style.color = "green";
        msg.innerText += "Chúc Mừng! Bạn đã đăng ký thành công!.";
    }

    return false;

}