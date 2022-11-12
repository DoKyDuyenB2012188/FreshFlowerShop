class Product {
  constructor() {
    this.data = products;
  }
  findNewProduct() {
    return this.data.filter((product) => product.newitem == true);
  }
  findSaleProduct() {
    return this.data.filter((product) => product.isale == true);
  }
  findOccasion(occasion) {
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
  findStyle(style) {
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
  findObject(object) {
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
  findColor(color) {
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
  
  filterProduct(filter_list) {
    let result = [];
    let occasion = this.findOccasion(filter_list);
    // console.log('occasion');
    // console.log(occasion);
    let object = this.findObject(filter_list);
    // console.log(object);
    // console.log('object');
    let style = this.findStyle(filter_list);
    // console.log(style);
    // console.log('style');
    let color = this.findColor(filter_list);
    // console.log('color');
    // console.log(color);
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
      console.log(search_color);
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
  addProduct() {}
  deleteProduct() {}
  updateProduct() {}
}
