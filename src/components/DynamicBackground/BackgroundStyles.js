// Style picker for backgrounds. Responsible for providing CSS objects that can be implicitly deconstructed (providing helpers i.e. animated backgrounds or defaults)
// Returns POJO's which React represents as CSS objects. 
// See https://stackoverflow.com/questions/43366026/react-inline-style-style-prop-expects-a-mapping-from-style-properties-to-value. 

import AnimatedCity from './gif/default.gif'
import PixelTreesDay from './png/pixel_trees_day.png'
import PixelTreesNight from './png/pixel_trees_night.png'
import EightBitMorning from './png/8-bit-day/morning.png'

const styles = {
  // https://stackoverflow.com/questions/39195687/setting-a-backgroundimage-with-react-inline-styles How to add inline backgroundimage properties.
  // https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files From the docs.
  anim_city:{
      background: `url(${AnimatedCity})`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
  },
  pixel_trees_day:{
    background: `url(${PixelTreesDay})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
  },
  pixel_trees_night:{
    background: `url(${PixelTreesNight})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
  },
  eightbit_morning:{
    background: `url(${EightBitMorning})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
  }
  //...other styles...
};
// Arrow function to export a style from styles defined above from the POJO. 
export default (value = "eightbit_morning") => styles[value] ? styles[value] : styles.anim_city;
