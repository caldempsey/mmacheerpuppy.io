// Style picker for backgrounds. Responsible for providing CSS objects that can be implicitly deconstructed (providing helpers i.e. animated backgrounds or defaults)
// Returns POJO's which React represents as CSS objects. 
// See https://stackoverflow.com/questions/43366026/react-inline-style-style-prop-expects-a-mapping-from-style-properties-to-value. 
 // more ubuntu orange needed
const styles = {
  light:{
    backgroundColor: 'rgb(239,239,239)', 
  },
  morning:{
    backgroundColor: 'orange', 
    borderRadius: '1px'
  },
  dark:{
    backgroundColor: 'rgb(26,26,26)', 
  },
  //...other styles...
};
// Arrow function to export a style from styles defined above from the POJO. 
export default (value = "dark") => styles[value] ? styles[value] : styles.dark;
