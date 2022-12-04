function send() {
    var email = document.getElementById('frm_Email').value;
    var matKhau = document.getElementById('frm_MatKhau').value;
    var ho = document.getElementById('frm_Ho').value;
    var ten = document.getElementById('frm_Ten').value;
    var diaChi = document.getElementById('frm_DiaChi').value;
    var dienThoai = document.getElementById('frm_DienThoai').value;

    //Kiem tra thong tin bac buoc
    if (email == "" || matKhau == "" || ho == "" || ten == "" || diaChi == "" || dienThoai == "") {
        alert("Vui lòng điền hết * Thông tin");
        return
    }
    //Kiem tra so dien thoai
    if (isNaN(dienThoai)) {
        alert("So điện thoại không hợp lệ! Vui lòng nhập lại");
        return
    }

    //Kiem tra lai thong tin cua nguoi dang ky
    var choice = confirm('Kiểm tra lại thông tin cá nhân\nEmail của bạn là: ' + email + '\nMật Khẩu: ' + matKhau + '\nHọ và Tên: ' + ho + ' ' + ten +'\nĐịa chỉ: ' + diaChi  + '\nĐiện thoại: ' + dienThoai );
    if(choice == true){
        alert("Bạn đã đăng ký thành công");
    }
}
function send(){
    var email = document.getElementById('frm_Email').value;
    var matKhau = document.getElementById('frm_MatKhau').value;

    //Kiem tra thong tin bat buoc
    if(email == "" || matKhau == ""){
        alert('Vui lòng nhập dữ liệu bắt buộc!');
        return
    }

    var choice = confirm("Email: " + email + "\nMật khẩu: " +matKhau);
    if(choice == true)
        alert("Đăng nhập thành công!");
}