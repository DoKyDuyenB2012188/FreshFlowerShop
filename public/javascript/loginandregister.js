function register() {
  var email = document.getElementById("frm_Email");
  var matKhau = document.getElementById("frm_MatKhau");
  var ho = document.getElementById("frm_Ho");
  var ten = document.getElementById("frm_Ten");
  var diaChi = document.getElementById("frm_DiaChi");
  var dienThoai = document.getElementById("frm_DienThoai");
  var filter = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
  //Kiem tra thong tin bac buoc
  if (
    email.value == "" ||
    matKhau.value == "" ||
    ho.value == "" ||
    ten.value == "" ||
    diaChi.value == "" ||
    dienThoai.value == ""
  ) {
    alert("Vui lòng điền hết * Thông tin");
    return;
  }
  //kiem tra email
  if (!filter.test(email.value)) {
    alert("Hãy nhập đúng định dạng Email!");
    email.focus();
    return;
  }
  if (!(matKhau.value.length >= 8)) {
    alert("Hãy nhập đúng mật khẩu phải từ 8 ký tự trở lên!");
    matKhau.focus();
    return;
  }
  //Kiem tra so dien thoai
  if (isNaN(dienThoai.value)) {
    alert("So điện thoại không hợp lệ! Vui lòng nhập lại");
    return;
  }

  //Kiem tra lai thong tin cua nguoi dang ky
  var choice = confirm(
    "Kiểm tra lại thông tin cá nhân\nEmail của bạn là: " +
      email.value +
      "\nMật Khẩu: " +
      matKhau.value +
      "\nHọ và Tên: " +
      ho.value +
      " " +
      ten.value +
      "\nĐịa chỉ: " +
      diaChi.value +
      "\nĐiện thoại: " +
      dienThoai.value
  );
  if (choice == true) {
    window.localStorage.setItem(
      "account",
      JSON.stringify([
        {
          username: ten.value,
          email: email.value,
          password: matKhau.value,
          login: false,
        },
      ])
    );
    alert("Bạn đã đăng ký thành công");
  }
  return flag;
}
function Login() {
  alert("sss");
  let frm = document.forms['login'];
  let email = frm.frm_Email;
  let matKhau = frm.frm_MatKhau;
  var filter = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;

//   Kiem tra thong tin bat buoc
  if (email.value == "" || matKhau.value == "") {
    alert("Vui lòng nhập dữ liệu bắt buộc!");
    return false;
  }

  if (!filter.test(email.value)) {
    alert("Hãy nhập đúng định dạng Email!");
    email.focus();
    return false;
  }
  let account = window.localStorage.getItem("account");
  if(account){
      account = JSON.parse(account)[0];
    if (account.email == email.value && account.password == matKhau.value) {
        account.login = true;
        window.localStorage.setItem("account", JSON.stringify([account]));
        alert("Đăng nhập thành công!");
        return true;
      } else {
        alert("Tài khoản hoặc mật khẩu sai!");
      }
  }else{
    alert("Tài khoản hoặc mật khẩu sai!!");
  }
  return false;
}
