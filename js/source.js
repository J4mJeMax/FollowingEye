//Get coords of mouse
const getCoords = event => {
  var x = event.clientX;
  var y = event.clientY;
  return [x,y];
};

//Limits for black circle in eye
const getLimits = () =>{
  let element = document.getElementById('dark-circle');
  let parentElement = document.getElementById('pupil');
  let yLimit = ((parentElement.offsetHeight - element.offsetHeight));
  let xLimit = (parentElement.offsetWidth - element.offsetWidth);
  return [xLimit, yLimit];
};

//Function that calculate margin top and margin right
const follow = event => {
  let width = window.innerWidth, height = window.innerHeight;
  let halfWidth = width / 2, halfHeight = height/2;
  let coordsTab = getCoords(event);
  let topMargin = height - coordsTab[1];
  let leftMargin = width - coordsTab[0];
  let limits = getLimits();
  if(topMargin>=halfHeight){
    let percent = coordsTab[1]/halfHeight;
    document.getElementById('dark-circle').style.marginTop = (limits[0]*percent/2)+"px";
  } else {
    let percent = coordsTab[1]/halfHeight;
    document.getElementById('dark-circle').style.marginTop = (limits[0]*percent/2)+"px";
  }
  if(leftMargin>=halfWidth){
    let percent = coordsTab[0]/halfWidth;
    document.getElementById('dark-circle').style.marginLeft = (limits[1]*percent/2)+"px";
  } else {
    let percent = coordsTab[0]/halfWidth;
    document.getElementById('dark-circle').style.marginLeft = (limits[1]*percent/2)+"px";
  }
}
