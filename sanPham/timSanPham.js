window.onload = () => {
    find();
}

function convert_vi_to_en(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    str = str.replace(/  +/g, ' ');
    return str;
}

function find(){
    let search = window.localStorage.getItem('search');
    search = convert_vi_to_en(search);
    search = search.toLowerCase();
    const product = new Product();
    let cardList = product.findProductByText(search);
    console.log(cardList.length)
    if(cardList != []){
        document.getElementById('data_items').innerHTML = '';
        let dom = '';
        for(let i=0; i< cardList.length; i++){
            console.log('do');
            dom +=`<div class="item col-6 col-sm-6 col-md-3 card">
                        <div class="d-flex justify-content-between">
                            ${cardList[i].newitem == true ? `
                            <span class="bg-info rounded-circle d-flex justify-content-center align-items-center shadow-1-strong" style="width: 35px; height: 35px;">
                                <p class="text-white mb-0 pb-0 small">New</p>
                            </span>
                            `: '<div style="width: 35px; height: 35px;" ></div>'}
                            ${cardList[i].isale == true ? `
                            <span class="bg-danger rounded-circle d-flex justify-content-center align-items-center shadow-1-strong" style="width: 35px; height: 35px;">
                                <p class="text-white mb-0 pb-0 small">Sale</p>
                            </span>
                            `: '<div style="width: 35px; height: 35px;" ></div>'}
                        </div>
                        <div class="i">
                            <a title="${cardList[i].nameCard}" href="#" onClick="showDetail('${cardList[i].id}')">
                                <img class="lazy card-img-top pt-2" alt="${cardList[i].nameCard}" title="${cardList[i].nameCard}" src="${'https://hoayeuthuong.com/'+cardList[i].imageURL}" style="display: inline;">
                            </a>
                        </div>
                        <div class="t pb-2 mt-3">
                            <a class="text-muted small text-decoration-none" href="#" title="${cardList[i].nameCard}" onClick="showDetail('${cardList[i].id}');">${cardList[i].nameCard}</a>
                            <span class="vn row">
                                ${cardList[i].oldprice != '' ? `<p class="col-12 col-sm-6 mb-0 oprice small text-danger"><s>${cardList[i].oldprice}</s></p>`: ''}
                                <p class="text-dark mb-0 small onew col-12 col-sm-6">${cardList[i].newprice}</p>
                            </span>
                        </div>
                    </div>`;
        }
        document.getElementById('data_items').innerHTML = dom;
    }
    if(cardList.length == 0){
        document.getElementById('nothing').innerHTML = "";
        document.getElementById('nothing').innerHTML = `
        <img class="intro_img" width="30%" src="../public/image/blooming-spring-flowers.jpg">
        <h4 style="font-size: 2rem;" class="font">Không Tìm Thấy Sản Phẩm</h4>
        `;
    }
}

function showDetail(id){
    if(typeof window.localStorage['show'] != undefined){
        window.localStorage.removeItem('show');
    }
    window.localStorage.setItem('show',id);
    window.location.href = './chiTietSanPham.html';
}