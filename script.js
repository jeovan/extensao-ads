document.addEventListener('load', onInit(), false);
//top.tree.addEventListener("load",onInit(), false);


function onInit(){
  //top.tree.frameElement.parentNode.cols= "300,*";
  var frame = document.getElementById('ide');
  console.log(frame.document);
}

// var move =window.frames['frame_SHeditor'].document.getElementsByTagName('table')[0].children[0].children[0].children[0];
// move.style.cursor = "ew-resize";
// move.onmousedown = function(event) {
//   console.log(document.documentElement.scrollLeft;
//   console.log( top.tree.frameElement.parentNode.cols.substring(0, top.tree.frameElement.parentNode.cols.length - 2));
//   var pos =  top.tree.frameElement.parentNode.cols.substring(0, top.tree.frameElement.parentNode.cols.length - 2);
//   top.tree.frameElement.parentNode.cols= "300,*"
// };



// document.getElementByT("frame_SHeditor")

// window.frames['frame_SHeditor'].document.getElementsByTagName('table').children


// (e.clientX - element.offsetLeft) + 'px';