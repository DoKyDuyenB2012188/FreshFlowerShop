class Product {
  constructor() {
    this.data = products;
  }
  findNewProduct() {// tim kiem san pham moi
    return this.data.filter((product) => product.newitem == true);
  }
  findSaleProduct() {// cac san pham dang sale
    return this.data.filter((product) => product.isale == true);
  }
  findOccasion(occasion) {// tim kiem theo mang chu de
    let result = [];
    this.data.forEach((item) => {
      occasion.forEach((se) => {
        let arr = item.occasion.map((it) => it.replace(/\s/g, ""));
        if (arr.includes(se)) {
          result.push(item);
        }
      });
    });
    return result;
  }
  findStyle(style) { // tim kiem theo mang loai hoa
    let result = [];
    this.data.forEach((item) => {
      style.forEach((se) => {
        let arr = item.style.map((it) => it.replace(/\s/g, ""));
        if (arr.includes(se)) {
          result.push(item);
        }
      });
    });
    return result;
  }
  findObject(object) {// tim kiem theo mang doi tuong
    let result = [];
    this.data.forEach((item) => {
      object.forEach((se) => {
        let arr = item.object.map((it) => it.replace(/\s/g, ""));
        if (arr.includes(se)) {
          result.push(item);
        }
      });
    });
    return result;
  }
  findColor(color) { // tim kiem theo mang mau
    let result = [];
    this.data.forEach((item) => {
      color.forEach((se) => {
        let arr = item.color.map((it) => it.replace(/\s/g, ""));
        if (arr.includes(se)) {
          result.push(item);
        }
      });
    });
    return result;
  }
  findPrice(min, max, data){
    let result = data.filter((item) => {
      let accsess_str = item.newprice.split(' ')[0].split('.');
      let price = '';
      for(let i=0; i<accsess_str.length; i++){
        price += accsess_str[i];
      }
      return (Number(price) >= Number(min) && Number(price) <= Number(max))
    });
    return result;
  }
  filterProduct(filter_list) { // tim kiem tong hop
    let result = [];
    let occasion = this.findOccasion(filter_list);
    let object = this.findObject(filter_list);
    let style = this.findStyle(filter_list);
    let color = this.findColor(filter_list);
    if(occasion.length != 0){
      result.push(...occasion);
    }
    if(object.length != 0){
      result.push(...object);
    }
    if(result.length !=0  && style.length !=0){
      let intersection = [];
      result.forEach((item) => {
        style.forEach((st)=>{
          if(item.style.some(value => st.style.includes(value))){
            intersection.push(item);
          }
        })
      })
      result = intersection;
    }else if(result.length == 0 && style.length != 0 ){
      result.push(...style);
    }
    if(result.length != 0  && color.length !=0 ){
      let finish = [];
      const style_color = ['trang', 'hong', 'red', 'vang', 'xanh', 'cam', 'tim', 'mix'];
      const search_color = filter_list.filter(value => style_color.includes(value));// loc mau can tim
      result.forEach((item) => {
        if(search_color.every(element => item.color.indexOf(element) > -1)){
          finish.push(item);
        }
      })
      result = finish;
    }else if(result.length == 0 && color.length != 0){
      result.push(...color);
    }
    let set = new Set(result);
    return Array.from(set);
  }
  findOne(id){
    return this.data.filter((item) => item.id == id);
  }
  sortMinToMax(cardList){
    return cardList.sort((a,b) => {
      let a_t = a.newprice.split(' ')[0].split('.');
      let b_t = b.newprice.split(' ')[0].split('.');
      let price_a = "";
      let price_b = "";
      for(let i =0; i<a_t.length ;i++){
        price_a += a_t[i];
      }
      for(let i =0; i<b_t.length ;i++){
        price_b += b_t[i];
      }
      return price_a - price_b;
    });
  }
  sortMaxToMin(cardList){
    return cardList.sort((a,b) => {
      let a_t = a.newprice.split(' ')[0].split('.');
      let b_t = b.newprice.split(' ')[0].split('.');
      let price_a = "";
      let price_b = "";
      for(let i =0; i<a_t.length ;i++){
        price_a += a_t[i];
      }
      for(let i =0; i<b_t.length ;i++){
        price_b += b_t[i];
      }
      return price_b - price_a;
    });
  }
  sortNewPrice(cardList){
    return cardList.filter((item) => item.oldprice != "");
  }
  addProduct(item) {
    return this.data.push(item);
  }
  deleteProduct(id) {
    return this.data.filter((item) => item.id != id);
  }
  updateProduct(id, item) {
    this.deleteProduct(id);
    this.addProduct(item);
  }
}
