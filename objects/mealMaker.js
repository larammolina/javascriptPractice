const menu = {
  _courses: {
    appetizers: [],
    mains: [], 
    desserts: [],
    get courses(){
      return object.key(_courses);
    },
  },
  get appetizers(){
    return this._courses.appetizers;
  },
  set appetizers(appetizerIn) {
    this._courses.apeetizers = appetizerIn;
  },
  get mains(){
    return this._courses.mains
  },
  set mains(mainIn){
    this._courses.mains = mainIn;
  },
  get desserts(){
    return this._courses.desserts;
  }, 
  set desserts(dessertIn){
    this._courses.desserts = dessertIn;
  },

  get courses() {
    return _courses;
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish =  {
      name: dishName,
      price: dishPrice,
    };
  return this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const index = Math.random(Math.random()* dishesh.length);
    return dishes[index];
  },

  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourses('appetizers');
    const main = this.getRandomDishFromCourses('mains');
    const dessert = this.getRandomDishFromCourses('desserts');
    const totalPrice = appetizer.prince + main.price + dessert.price;
    return 'Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice}';
    }
};