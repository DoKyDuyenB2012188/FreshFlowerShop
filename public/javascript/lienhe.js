function send(){
    var email = document.getElementById('frm_Email').value;
    var tieuDe = document.getElementById('frm_TieuDe').value;
    var yKienKhachHang = "";
    if (document.getElementById('frm_YKien1').checked == true){
        yKienKhachHang = document.getElementById('frm_YKien1').value;
    }
        else
        yKienKhachHang = document.getElementById('frm_YKien2').value;
    var noiDung = document.getElementById('frm_NoiDung').value;

    //Kiem tra thong tin bat buoc
    if(email == "" || tieuDe == "" || yKienKhachHang == "" || noiDung == ""){
        alert("Vui lòng điền đầy đủ thông tin!");
        return
    }

    //Xac nhan lai thong tin
    var choice = confirm("Email: " + email + "\nTiêu đề: " + tieuDe + "\nBạn là: " + yKienKhachHang);
    if(choice == 1){
        alert("Đã gửi thành công");
    }
}