$(document).ready(function(){
    addfile();
    updateCart();
});
  
  function addfile(){
    $("header").html(`
    <div class="container-fluid p-0" id="header">
    <div id="flower" class="overflow-hidden d-flex justify-content-between p-0 m-0" style="background-color: rgb(252, 181, 65);width:100%; height:40px">
        
    </div>
    <div class="row d-flex justify-content-around overflow-hidden w-100" style="margin-right: 0px;margin-left: 0px;">
        <div class="logo col-6 col-md-3 d-flex text-center flex-column justify-content-center align-items-center" >
            <a style="width: 300px;" href="../index.html"><b style="font-size: 2.5rem;" class="m-0">
                <span class="font" style="color: red;">Fr</span>
                
                <span class="font" style="color: orange;">e</span>
                <span class="font" style="color: green;">sh</span>
                <span class="font" style="color: rgb(247, 80, 112);">Fl</span>
                <span class="font" style="color: plum;">o</span>
                <span class="font" style="color: palevioletred;">wer</span>
            </b></a>
        </div>
    
        <div class="search col-12 col-md-6 d-flex justify-content-center align-items-center flex-column" style="margin-top: 10px">
          <div style="width: 100%">
            <div class="search d-flex flex-column justify-content-center align-items-center">
              <!-- <i class="fa fa-search"></i> -->
              <input onkeypress="handleKeyPress(event)" id="search_text" type="text" class="form-control" placeholder="màu sắc, chủ đề, kiểu dáng...">
              <button onClick="search();"  style="width:80px" class="btn "><p>Tìm kiếm</p></button>
            </div>
          </div>
          
          <div class=" d-flex justify-content-around align-items-center">
            <a  href="tel:02873002010" class="support" style="text-align: center; width: 49%;">
                <strong style="color: rgb(196, 60, 65);">Hotline Miền Nam</strong>
                <span style="color: #ff9800;">02873002010</span>
            </a>
            <a href="tel:02473002010" class="support" style="text-align: center; width: 49%;">
                <strong style="color: rgb(196, 60, 65);">Hotline Miền Bắc</strong>
                <span style="color: #ff9800;">02473002010</span>
            </a>
          </div>
        </div>
        <div class="col-6 col-md-3 d-flex justify-content-center align-items-center" style="margin-bottom: 20px">
          <div class="d-flex justify-content-center align-items-center">
            <div class="cart">
              <div id="shopping-cart" class="text-center" style="width: 90px; height:55px;">
                <a class="mt-1" style="display: block;" href="../gioHang/gioHang.html" title="Giỏ hàng"><img src="../public/image/shopping-bag.png" alt="" ><strong style="color: rgb(196, 60, 65); display: block;">Giỏ hàng<span id="num"></span></strong></a>
              </div>
            </div>
      
            <div id="myaccount" class="account">
              <div class="text-center" style="width: 90px; height:55px;">
                <a class="mt-1" style="display: block;" href="" title="Tài khoản"><img src="../public/image/user.png"  alt=""><strong style="color: rgb(196, 60, 65); display: block;">Tài khoản</strong></a>
              </div>
                <div id="signin" class="signin_dropdown">
                  <a href="../dangKy&dangNhap/loginandregister.html" title="Sign in" class="sign-in">Sign in</a>
                  <div class="dac">
                    <strong>Bạn chưa có tài khoản</strong>
                    <a href="dangky.html" title="Nhấn vào đây" c lass="register">Nhấn vào đây</a>
                  </div>
                  <a href="" class="login-fb" style="display: none;">Login with Facebook</a>
                  <a href="" id="btnSignInGG" class="login-gg">Sign in with Google</a>
                  <a href="" >Quên mật khẩu</a>
                  <div class="npf">
                    <strong>Lợi ích khi đăng ký</strong>
                    <ul>
                      <li>Được giảm giá từ 3-10%</li>
                      <li>Nhận được các chương trình khuyến mãi</li>
                    </ul>
                  </div>
                </div>
            </div> 
          </div>
        </div>
      </div>   
      <nav class="navbar navbar-expand-lg navbar-light" style="background-color: rgb(247, 247, 247)">
        <div class="container-fluid" id="navbarNavDropdown" 
        style="padding-right: 15px;">
          <a class="navbar-brand" style="margin-right: 7.5%;"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="font_w nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  CHỦ ĐỀ
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a onClick="chocie('hoasinhnhat')" class="dropdown-item" >Hoa Sinh Nhật</a></li>
                  <li><a onClick="chocie('hoachucmung')" class="dropdown-item" >Hoa Chúc Mừng </a></li>
                  <li><a onClick="chocie('hoakhaitruong')" class="dropdown-item">Hoa khai trương</a></li>
                  <li><a onClick="chocie('hoachiabuon')" class="dropdown-item" >Hoa Chia Buồn</a></li>
                  <li><a onClick="chocie('hoachucsuckhoe')" class="dropdown-item" >Hoa Chúc Sức Khoẻ</a></li>
                  <li><a onClick="chocie('hoatinhyeu')" class="dropdown-item" >Hoa Tình Yêu</a></li>
                  <li><a onClick="chocie('hoacamon')" class="dropdown-item" >Hoa Cảm Ơn</a></li>
                  <li><a onClick="chocie('hoatotnghiep')" class="dropdown-item" >Hoa Mừng Tốt Nghiệp</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="font_w nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ĐỐI TƯỢNG
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a onClick="chocie('nguoiyeu')" class="dropdown-item" >Hoa Tặng Người Yêu</a></li>
                    <li><a onClick="chocie('banbe')" class="dropdown-item" >Hoa Tặng Bạn Bè</a></li>
                    <li><a onClick="chocie('vo')" class="dropdown-item" >Hoa Tặng Vợ</a></li>
                    <Li><a onClick="chocie('chong')" class="dropdown-item" >Hoa Tặng Chồng</a></Li>
                    <li><a onClick="chocie('me')" class="dropdown-item" >Hoa Tặng Mẹ</a></li>
                    <li><a onClick="chocie('treem')" class="dropdown-item" >Hoa Tặng Trẻ Em</a></li>
                    <li><a onClick="chocie('nu')" class="dropdown-item" >Hoa Tặng Cho Nữ</a></li>
                    <li><a onClick="chocie('nam')" class="dropdown-item" >Hoa Tặng Cho Nam</a></li>
                    <li><a onClick="chocie('sep')" class="dropdown-item" >Hoa Tặng Sếp</a></li>
                    <li><a onClick="chocie('dongnghiep')" class="dropdown-item" >Hoa Tặng Đồng Nghiệp</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="font_w nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    KIỂU DÁNG
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a onClick="chocie('bohoa')" class="dropdown-item" >Bó Hoa Tươi</a></li>
                    <li><a onClick="chocie('giohoa')" class="dropdown-item" >Giỏ Hoa Tươi</a></li>
                    <li><a onClick="chocie('hophoa')" class="dropdown-item" >Hộp Hoa Tươi</a></li>
                    <li><a onClick="chocie('hoabinh')" class="dropdown-item" >Bình Hoa Tươi</a></li>
                    <li><a onClick="chocie('hoathabinh')" class="dropdown-item" href="#">Hoa Thả Bình</a></li>
                    <li><a onClick="chocie('langhoachucmung')" class="dropdown-item" href="#">Lẵng Hoa Khai Trương</a></li>
                    <li><a onClick="chocie('langhoachiabuon')" class="dropdown-item" href="#">Lẵng Hoa Chia Buồn</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="font_w nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    MÀU SẮC
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a onClick="chocie('trang')" class="dropdown-item" >Màu Trắng</a></li>
                    <li><a onClick="chocie('red')" class="dropdown-item" >Màu Đỏ</a></li>
                    <li><a onClick="chocie('hong')" class="dropdown-item" >Màu Hồng</a></li>
                    <li><a onClick="chocie('cam')" class="dropdown-item" >Màu Cam</a></li>
                    <li><a onClick="chocie('tim')" class="dropdown-item" >Màu Tím</a></li>
                    <li><a onClick="chocie('vang')" class="dropdown-item" >Màu Vàng</a></li>
                    <li><a onClick="chocie('xanh')" class="dropdown-item" >Màu Xanh(Xanh Dương, Xanh Lá)</a></li>
                    <li><a onClick="chocie('mix')" class="dropdown-item" >Kết Hợp Màu</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>             
</div>
    `);
    $("footer").html(`
    <div class="container-fluid">
    <!-- footer -->
    <div class="container-fluid ">
        <div class="row Footer pt-3 mt-4 pl-0 pr-0 pl-sm-5 pr-sm-5">
            <div class="col-12 col-sm-3">
              <h5>FreshFlowerShop</h5>
              <ul style="list-style: none;">
                <li><a href="../gioiThieu/gioiThieu.html">Giới thiệu</a></li>
                <li>Tin tức</li>
                <li>Trách nhiệm xã hội</li>
                <li>Tuyển dụng</li>
                <li>Câu hỏi thường gặp(FAQs)</li>
                <li><a href="../lienHe/lienHe.html">Liên hệ</a></li>
                <li><a>Copyright @ 2022</a></li>
              </ul>
            </div>
            <div class="col-12 col-sm-3">
              <h5>CHĂM SÓC KHÁCH HÀNG</h5>
              <ul>
                <li>Thắc mắc và khiếu nại</li>
                <li>Cam kết hài lòng 100%</li>
                <li>Chính sách bảo mật thông tin</li>
                <li>Chính sách và điều khoản</li>
                <li>Hướng dẫn đặt hàng</li>
              </ul>
              <br />
              KẾT NỐI <br />
              <a href="https://www.facebook.com/"><img src="../public/image/footer/icon-fb.png" alt=""></a>
              <a href="https://twitter.com/"><img src="../public/image/footer/icon-twitter.png" alt=""></a>
              <a href="https://www.youtube.com/"><img src="../public/image/footer/icon-youtube.png" alt=""></a>
            </div>
            <div class="col-12 col-sm-3">
              <h5>GIỚI THIỆU VỀ HOA</h5>
              <ul>
                <li>Ý nghĩa về hoa</li>
                <li>Cách chăm sóc hoa</li>
              </ul>
              <h5>NEWSLETTER</h5> <br/>
              <p>Đăng kí ngay để nhận được các thông tin khuyến mãi và ưu đãi đặc biệt từ: <span>FreshFlowerShop.com</span></p>
              <form action="#" method="post">
                <input type="email" name="email-cua-ban" id="email-cua-ban" placeholder="Email của bạn" size="15">
                <button class="Footer-mail-button">
                  <div class="ti-email">ok</div>
                </button>
              </form>
            </div>
            <div class="col-12 col-sm-3 overflow-hidden">
              <span>VĂN PHÒNG ĐIỀU HÀNH</span> <br />
              <span>Công ty Cổ Phần Color Life</span> <br />
      
              <span>Địa chỉ</span>: 270F Võ Thị Sáu, P.7, Q. 3, Tp. Hồ Chí Minh <br />
      
              <span>MST</span>: 0313230072 cấp lần đầu ngày 25/04/2015 bởi Sở kế hoạch đầu tư Thành phố Hồ Chí Minh
              <br />
      
              <span>Email</span>: contact@hoayeuthuong.com <br />
      
              <span>Điện thoại : 028 7300 2010 - 024 7300 2010</span>
      
              <img src="../public/image/footer/da-thong-bao.png" alt="Đã Thông Báo">
    
              <img src="../public/image/footer/dmca_copyright_protected150a.png" alt="Công nhận">
            </div>
    </div>
    <a href="#header" class="btn btn-danger btn-floating btn-lg" id="btn-back-to-top">
        <i class="fas fa-arrow-up"></i>
    </a>
    </div>
    `);

    if(!document.getElementById('hf')) {
      var link = document.createElement('link');
      link.id = 'hf';
      link.rel = 'stylesheet';
      link.href = '../headerAndFooter/hf.css';
      document.head.appendChild(link);
    }
    const img = `<img width="40px" src="../public/image/flower-svgrepo-com (1).svg">`;
    let imageAdd = document.getElementById('flower');
    let allImg = "";
    for(let i=0; i< 25; i++){
        allImg += img;
    }
    imageAdd.innerHTML = allImg;
}

function chocie(label){
    window.localStorage.setItem('choice',label);
    window.location.href = '../sanPham/sanPham.html'
}

function search(){
    let value = document.getElementById('search_text').value;
    if(value != ""){
        if(window.localStorage.getItem('search')){
            window.localStorage.removeItem('search');
        }
        window.localStorage.setItem('search',value);
        window.location.href = `../sanPham/timSanPham.html?search=${value}`;
    }
    else{
        alert("Hãy nhập thông tin tìm kiếm!");
    }
}

function handleKeyPress(event){
    if(event.keyCode == 13){
        search();
    }
}

function updateCart(){
    let cart = window.localStorage.getItem('cart');
   if(cart){
    cart = JSON.parse(cart);
    if(cart.length == 0){
        document.getElementById('num').textContent = "";
    }
    else{
        document.getElementById('num').textContent = '('+cart.length+')';
    }
   }
}