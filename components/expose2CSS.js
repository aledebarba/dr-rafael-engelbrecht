
const expose2CSS = () => {  
  if (window !== "undefined") {
      collectValues();
      window.onresize = (evt) => {
        collectValues();      
      };
  }
};
export default expose2CSS;

function collectValues() {
    let root = document.documentElement;
    let w =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      let h =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
        
        let x = w;
        let res = 0.0021859 * x^2 - 2.46388 * x + 438.641;

        // set css variables

        root.style.setProperty('--et_width', w);
        root.style.setProperty('--et_height',h);
        root.style.setProperty('--res', res);
}