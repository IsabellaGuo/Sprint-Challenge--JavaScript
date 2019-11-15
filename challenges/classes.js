// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

class CuboidMaker2 {
    constructor (attributes) {
      this.length = attributes.length;
      this.width = attributes.width;
      this.height = attributes.height
    }

    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height); 
      }
}
const cuboid2 = new CuboidMaker2 ({
    "length": 4,
    "width": 5,
    "height": 5,
  });
  console.log(cuboid2.volume());
  console.log(cuboid2.surfaceArea()); 

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
    constructor(childAttributes) {
      super(childAttributes);    
    }  
    volume() {
      return this.length * this.width * this.height;
    }
    surfaceArea() {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height); 
    } 
  } 
  const cube = new CuboidMaker2 ({
    "length": 4,
    "width": 4,
    "height": 4,
  });

  console.log(cube.volume());
  console.log(cube.surfaceArea()); 