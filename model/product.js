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
        let arr = item.occasion.map((it) => it.replace(/\s/g, ""))
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
        let arr = item.style.map((it) => it.replace(/\s/g, ""))
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
            let arr = item.object.map((it) => it.replace(/\s/g, ""))
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
        let arr = item.color.map((it) => it.replace(/\s/g, ""))
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
    let object = this.findObject(filter_list);
    let style = this.findStyle(filter_list);
    let color = this.findColor(filter_list);
    result.push(...occasion);
    result.push(...object);
    result.push(...style);
    result.push(...color);
    let set = new Set(result);
    return Array.from(set);
  }
  addProduct() {}
  deleteProduct() {}
  updateProduct() {}
}
